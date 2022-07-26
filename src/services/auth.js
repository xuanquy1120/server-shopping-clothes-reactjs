import { User } from "models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const authService = {
  async login(payload) {
    try {
      const user = await User.findOne({
        email: payload.email,
      });
      if (!user) {
        throw "Email does not exist";
      }
      const checkPassword = await bcrypt.compare(
        payload.password,
        user.password
      );
      if (checkPassword) {
        const jsonObject = {
          _id: user._id,
        };
        const token = await jwt.sign(jsonObject, process.env.TOKEN_KEY, {
          expiresIn: 60000,
        });

        return {
          user: user,
          token: token,
        };
      } else {
        throw "wrong password";
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
