import { userService } from "services";
import { failed, success } from "utils";

export const userController = {
  async addCartToUser(req, res) {
    try {
        const userID = req.userId
        const Product = req.body
        const payload ={userID,Product,quantity:1}
        const result = await userService.addCartToUser(payload);
        success(res, result);
    } catch (error) {
        failed(res, error);
    }
  },

};
