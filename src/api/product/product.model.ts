import { Schema, model } from 'mongoose';

export interface ProductDocument extends Document {
  name: String;
  description: String;
  image: String;
  price: Number;
  ceatedAT: Date;
  updateAT: Date;
}

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  }
}, {
  timestamps: true,
  versionKey: false,
});

const Product = model<ProductDocument>('Product', ProductSchema);

export default Product;
