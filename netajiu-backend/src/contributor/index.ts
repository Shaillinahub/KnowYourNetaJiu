import { Elysia } from "elysia";
import bcrypt from "bcryptjs";
import Contributor, { ContributorType } from "../models/contributorModel";
import { generateTokens, storeRefreshToken } from "../utils/auth";
import jwt from "jsonwebtoken";


export const contributor = new Elysia()
  .post(
    "/login",
    async ({ set, body }: { set: any; body: ContributorType }) => {
      let user = await Contributor.findOne({ email: body.email });

      if (!user) {
        set.status = 401;
        return { message: "Invalid email or password" };
      }

      const valid = bcrypt.compare(user.password, body.password);
      if (!valid) {
        set.status = 401;
        return { message: "Invalid email or password" };
      }

      const { accessToken, refreshToken } = generateTokens(
        user._id.toString(),
        user.email,
      );
      await storeRefreshToken(user._id, refreshToken);

      return {
        user: {
          _id: user._id,
          username: user.username,
          email: user.email,
        },
        refreshToken,
        accessToken,
      };
    },
  )
  .post(
    "/register",
    async ({ set, body }: { set: any; body: ContributorType }) => {
      try {
        const existingUser = await Contributor.findOne({ email: body.email });
        if (existingUser) {
          set.status = 400;
          return { message: "Email already registered" };
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(body.password, salt);

        const newUser = new Contributor({
          ...body,
          password: hashedPassword,
        });

        await newUser.save();
        const { accessToken, refreshToken } = generateTokens(
          newUser._id.toString(),
          newUser.email!,
        );

        await storeRefreshToken(newUser._id!, refreshToken);

        set.status = 200;
        return {
          user: {
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
          },
          accessToken,
          refreshToken,
          message: "User registered successfully",
        };
      } catch (error) {
        console.error(error);
        set.status = 500;
        return { message: "Internal server error" };
      }
    },
  )
  .post(
    "/refresh-token",
    async ({ set, body }: { set: any; body: ContributorType }) => {
      if (!body.refreshToken) {
        set.status = 400;
        return { error: "Refresh token is required" };
      }

      try {
        const storedRefreshToken: any = await Contributor.findById(body.user);

        if (body.refreshToken !== storedRefreshToken.refreshToken) {
          set.status = 400;
          return { error: "Invalid refresh token" };
        }

        const payload = jwt.verify(
          body.refreshToken,
          process.env.REFRESH_TOKEN_SECRET!,
        ) as {
          userId: string;
          email: string;
        };

        const { accessToken } = generateTokens(payload.userId, payload.email);

        return { accessToken };
      } catch (error) {
        set.status = 401;
        if (error.name == "TokenExpiredError") {
          return { error: error.message };
        }

        return { error: error.message };
      }
    },
  )
  .post(
    "/upload-profile-photo",
    async ({
      set,
      body,
    }: {
      set: any;
      body: { userId: string; file: any };
    }) => {
      try {
        const user = await Contributor.findById(body.userId);
        if (!user) {
          set.status = 404;
          return { message: "User not found" };
        }
        const photoUrl = "public/profile_picture/" + body.userId + ".png";

        Bun.write(photoUrl, body.file);

        await Contributor.findByIdAndUpdate(body.userId, {
          photo: photoUrl,
        });

        return {
          message: "Profile photo uploaded successfully",
          photoUrl: photoUrl,
        };
      } catch (error) {
        console.error(error);
        set.status = 500;
        return { message: "Internal server error" };
      }
    },
  )
  .post(
    "/upload-document",
    async ({
      set,
      body,
    }: {
      set: any;
      body: { userId: string; file: any };
    }) => {
      try {
        const user = await Contributor.findById(body.userId);
        if (!user) {
          set.status = 404;
          return { message: "User not found" };
        }

        const documentUrl = "public/profile_picture/" + body.userId + ".png";

        Bun.write(documentUrl, body.file);
        await Contributor.findByIdAndUpdate(body.userId, {
          document: documentUrl,
        });

        return {
          message: "Document Uploaded Successfully",
          document: documentUrl,
        };
      } catch (error) {
        console.error(error);
        set.status = 500;
        return { message: "Internal server error" };
      }
    },
  );
