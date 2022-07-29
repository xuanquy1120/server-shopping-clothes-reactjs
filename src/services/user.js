import { Product } from "models/Product";
import { User } from "models/User";
import { log } from "utils";

export const userService = {
  async addCartToUser(userId, payload) {
    try {
      const user = await User.findById(userId).populate("cart.product");
      const productById = await Product.findById(payload.product);
      if (!productById) {
        throw "product not found";
      }
      const productIndex = user.cart.findIndex(
        (item) => item.product._id.toString() === payload.product._id
      );
      if (productIndex >= 0) {
        if (payload.quantity < 1) {
          user.cart.splice(productIndex, 1);
        } else {
          user.cart[productIndex].quantity = payload.quantity;
        }
      } else {
        user.cart.push(payload);
      }
      await user.save();
      return user.cart;
    } catch (error) {
      log.info(error);
      throw error;
    }
  },
  async deleteCartUser(userId, payload) {
    try {
      const user = await User.findById(userId).populate("cart.product");
      const productById = await Product.findById(payload.id);
      if (!productById) {
        throw "product not found";
      }
      const productDelete = user.cart.findIndex((item)=>item.product._id.toString()===payload.id)
      user.cart.splice(productDelete,1)
      await user.save();
      return user.cart;
    } catch (error) {
      log.info(error);
      throw error;
    }
  },
};
