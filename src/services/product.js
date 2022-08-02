import { Product } from "models/Product";
import { log } from "utils";

export const productService = {
  async getProduct(payload) {
    const [products, count] = await Promise.all([
      Product.find({})
        .skip((payload.page - 1) * payload.limit)
        .limit(payload.limit),
      Product.countDocuments({}),
    ]);
    if (!products) throw "Invalid";
    return {
      products: products,
      pagination: {
        total: Number(Math.ceil(count / payload.limit)),
        limit: Number(payload.limit),
        page: Number(payload.page),
      },
    };
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
      const [products, count] = await Promise.all([
        Product.find({
          nameProduct: new RegExp(payload.nameProduct, "i"),
          category: new RegExp(payload.category),
        })
          .skip((payload.page - 1) * payload.limit)
          .limit(payload.limit),
        Product.countDocuments({
          nameProduct: new RegExp(payload.nameProduct, "i"),
          category: new RegExp(payload.category),
        }),
      ]);
      if (!products) throw "Invalid";
      return {
        products: products,
        filter: {
          category: payload.category,
          nameProduct: payload.nameProduct,
        },
        pagination: {
          total: Number(Math.ceil(count / payload.limit)),
          limit: Number(payload.limit),
          page: Number(payload.page),
        },
      };
    } catch (error) {
      log.info(error);
      throw error;
    }
  },
};
