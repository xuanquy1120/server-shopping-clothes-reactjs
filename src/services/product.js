import { Product } from "models/Product";
import { log } from "utils";

export const productService = {
  async getProduct() {
    try {
      const products = await Product.find({});
      if (!products) throw "Invalid";
      return  products ;
    } catch (error) {
      log.error(error);
      throw error;
    }
  },
  async addProduct(payload) {
    try {
      const newProduct = new Product();
      newProduct.nameProduct = payload.nameProduct;
      newProduct.price = payload.price;
      newProduct.status = payload.status;
      newProduct.category = payload.category;
      newProduct.image = payload.image;
      return await newProduct.save();
    } catch (error) {
      log.info(error);
      throw error;
    }
  },
};
