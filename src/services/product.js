import { Product } from "models/Product";
import { log } from "utils";

export const productService = {
  async getProduct() {
    const products = await Product.find({});
    if (!products) throw "Invalid";
    return products;
  },
  async addProduct(payload) {
    const newProduct = new Product();
    newProduct.nameProduct = payload.nameProduct;
    newProduct.price = payload.price;
    newProduct.status = payload.status;
    newProduct.category = payload.category;
    newProduct.image = payload.image;
    return await newProduct.save();
  },
};
