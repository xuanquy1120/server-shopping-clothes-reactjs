import jwt from "jsonwebtoken";
import { User } from "models/User";

import { failed } from "utils";
const JWT_KEY = process.env.TOKEN_KEY;
export const authMiddleware = {
  async isAuthenticated(req, res, next) {
    try {
      const bearerToken = req.headers["authorization"];
      if (!bearerToken) throw "Authentication failed";
      const token = bearerToken.split(" ")[1];
      const tokenDecoded = await jwt.verify(token, JWT_KEY);
      const user = await User.findById(tokenDecoded._id);
      if (!user) throw "Invalid user";
      req.userId = user._id;
      next();
    } catch (error) {
      failed(res, "Authentication failed");
    }
  },
};
