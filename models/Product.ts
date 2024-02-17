import mongoose, { Schema } from 'mongoose';

type ProductVariant = {
  size: string;
  price: number;
  inStock: boolean;
  imgIndex: number;
};

type ProductDetails = {
  enviroment: string;
  light: string;
  careLevel: string;
  wind: boolean;
  plantType: string;
};

export type Product = {
  _id: string;
  url: string;
  productType: string;
  title: string;
  realName: string;
  latinName: string;
  details: ProductDetails;
  imgs: string[];
  variants: ProductVariant[];
};

const ProductSchema = new Schema<Product>(
  {
    _id: String,
    url: String,
    productType: String,
    title: String,
    realName: String,
    latinName: String,
    details: {
      enviroment: String,
      light: String,
      careLevel: String,
      wind: Boolean,
      plantType: String,
    },
    imgs: [String],
    variants: [
      {
        size: String,
        price: Number,
        inStock: Boolean,
        imgIndex: Number,
      },
    ],
  },
  {
    timestamps: true,
    collection: 'products',
  }
);

const ProductModel =
  mongoose.models.Product || mongoose.model<Product>('Product', ProductSchema);

export default ProductModel;
