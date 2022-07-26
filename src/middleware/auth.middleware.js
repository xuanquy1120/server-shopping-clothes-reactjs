import jwt from "jsonwebtoken";
import { User } from "models/User";
import { failed } from "utils";
const JWT_KEY = process.env.TOKEN_KEY;
export const authMiddleware = {
  async isAuthenticated(req, res, next) {
    try {
      const bearerToken = req.headers["authorization"];
      if (bearerToken) {
        const token = bearerToken.split(" ")[1];
        console.log(token);
        await jwt.verify(token, JWT_KEY);
        next();
      } else {
        throw "Authentication failed";
      }
    } catch (error) {
      failed(res, "Authentication failed");
    }
  },
};
