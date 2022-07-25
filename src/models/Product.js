import mongoose from "db/mongo";

const productSchema = new mongoose.Schema({
  nameProduct: {
    required: true,
    trim: true,
    type: String,
  },
  price: {
    required: true,
    trim: true,
    type: Number,
  },
  status: {
    required: true,
    trim: true,
    type: Boolean,
  },
  category: {
    required: true,
    trim: true,
    type: String,
  },
  image: {
    required: true,
    trim: true,
    type: String,
  },
});
export const Product = mongoose.model('products', productSchema)