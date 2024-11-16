import Contributor from "../models/contributorModel";
import jwt from "jsonwebtoken";

export const generateTokens = (userId: string, email: string) => {
  const accessToken = jwt.sign(
    { userId, email },
    process.env.ACCESS_TOKEN_SECRET!,
    {
      expiresIn: "1h",
    },
  );
  const refreshToken = jwt.sign(
    { userId, email },
    process.env.REFRESH_TOKEN_SECRET!,
    {
      expiresIn: "7d",
    },
  );
  return { accessToken, refreshToken };
};

export const storeRefreshToken = async (id: string, refreshToken: string) => {
  await Contributor.findByIdAndUpdate(
    id,
    { $set: { refreshToken: refreshToken } },
    { new: true },
  );
};

export const verifyToken = (token: string) => {
  let decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  return decode;
};
