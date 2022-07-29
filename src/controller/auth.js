import { authService } from "services";
import { failed, success } from "utils";

export const authController = {
  async login(req, res) {
    try {
      const payload = req.body;
      const user = await authService.login(payload);
      success(res, user);
    } catch (error) {
      failed(res, error);
    }
  },
  async register(req, res) {
    try {
      const payload = req.body;
      await authService.register(payload);
      success(res, "Successfully registeredAt");
    } catch (error) {
      failed(res, error);
    }
  },
  // async checkToken(req, res) {
  //   try {
  //     const payload = req.query.token;
  //     const result = await authService.checkToken(payload);
  //     success(res, result);
  //   } catch (error) {
  //     failed(res, error);
  //   }
  // },
};
