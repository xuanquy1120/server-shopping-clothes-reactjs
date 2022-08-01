import { userService } from "services";
import { failed, success } from "utils";

export const userController = {
  async updateCartToUser(req, res) {
    try {
        const userID = req.userId
        const payload = req.body
        const result = await userService.updateCartToUser(userID,payload);
        success(res, result);
    } catch (error) {
        failed(res, error);
    }
  },
  async addCartUser(req, res) {
    try {
        const userID = req.userId
        const payload = req.body
        const result = await userService.addCartUser(userID,payload);
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
