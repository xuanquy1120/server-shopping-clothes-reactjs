import { User } from "models/User";

export const userService = {
  async addCartToUser(payload) {
    const user = await User.findById(payload.userID);
    console.log(user)
    console.log(payload);
  },
};
