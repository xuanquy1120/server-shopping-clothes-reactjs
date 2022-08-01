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
  async findProduct(payload) {
    try {
      const [listProduct, count] = await Promise.all([
        Product.find({
          nameProduct: new RegExp(payload.nameProduct, "i"),
          category: new RegExp(payload.category),
        })
          .skip((payload.page - 1) * payload.limit)
          .limit(payload.limit),
        Product.countDocuments({
          nameProduct: new RegExp(payload.nameProduct, "i"),
        }),
      ]);
      if (!listProduct) throw "Invalid";
      return {
        data: listProduct,
        pagination: {
          total: Math.ceil(count / payload.limit),
          limit: payload.limit,
          page: payload.page,
        },
      };
    } catch (error) {
      log.info(error);
      throw error;
    }
  },
};
