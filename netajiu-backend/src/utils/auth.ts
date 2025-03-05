import env from "../config/env";
import jwt from "jsonwebtoken";

export const generateTokens = (userId: string, email: string) => {
  const accessToken = jwt.sign({ userId, email }, env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "1h",
  });
  const refreshToken = jwt.sign(
    { userId, email },
    process.env.REFRESH_TOKEN_SECRET!,
    {
      expiresIn: "7d",
    },
  );
  return { accessToken, refreshToken };
};

export const verifyToken = (token: string) => {
  let decode = jwt.verify(token, env.ACCESS_TOKEN_SECRET);
  return decode;
};
