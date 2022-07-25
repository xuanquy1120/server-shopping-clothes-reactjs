import { User } from "models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const authService = {
  async login(payload) {
    try {
      const user = await User.findOne({
        username: payload.username,
      });
      if (!user) throw "is";
      const checkPassword = await bcrypt.compare(
        payload.password,
        user.password
      );
      if (checkPassword) {
        const jsonObject = {
          username: user.username,
        };
        const token = await jwt.sign(jsonObject, process.env.TOKEN_KEY, {
          expiresIn: 10,
        });

        return {
          username: user.username,
          token: token,
        };
      } else {
        throw "Sai mat khau";
      }
    } catch (error) {
      throw error;
    }
  },
  async register(payload) {
    try {
      const newUser = new User();
      newUser.username = payload.username;
      newUser.password = bcrypt.hashSync(payload.password, 10);
      newUser.email = payload.email;
      return await newUser.save();
    } catch (error) {
      throw error;
    }
  },
  async checkToken(payload) {
    try {
      jwt.verify(payload, process.env.TOKEN_KEY);
    } catch (error) {
      throw error;
    }
  },
};
