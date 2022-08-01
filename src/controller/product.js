import { productService } from "services";
import { failed, success } from "utils";

export const productController = {
  async getProduct(req, res) {
    try {
      const payload = req.body;
      const result = await productService.getProduct(payload);
      success(res, result);
    } catch (error) {
      failed(res, error);
    }
  },
  async addProduct(req, res) {
    try {
      const payload = req.body;
      await productService.addProduct(payload);
      success(res, payload);
    } catch (error) {
      failed(res, error);
    }
  },
  async findProduct(req, res) {
    try {
      const payload = req.query;
      const { data, pagination } = await productService.findProduct(payload);
      success(res, data, pagination);
    } catch (error) {
      failed(res, error);
    }
  }
};
