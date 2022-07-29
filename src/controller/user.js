import { userService } from "services";
import { failed, success } from "utils";

export const userController = {
  async addCartToUser(req, res) {
    try {
        const userID = req.userId
        const payload = req.body
        const result = await userService.addCartToUser(userID,payload);
        success(res, result);
    } catch (error) {
        failed(res, error);
    }
  },
  async deleteCartUser(req, res) {
    try {
        const userID = req.userId
        const payload = req.params
        const result = await userService.deleteCartUser(userID,payload);
        success(res, result);
    } catch (error) {
        failed(res, error);
    }
  },

};
