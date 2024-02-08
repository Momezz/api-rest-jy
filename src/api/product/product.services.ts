import Product, { ProductDocument } from "./product.model";
import { DocumentDefinition } from "mongoose";

export function getAllProducts() {
  return Product.find({});
}

export function getProductById(id: string) {
  return Product.findById(id);
}

export function createProduct(
  input: DocumentDefinition<Omit<ProductDocument, 'createdAt' | 'updatedAt'>>,) {
  return Product.create(input);
}

export function updateProduct(id: String,
  product: DocumentDefinition<Omit<ProductDocument, 'createdAt' | 'updatedAt'>>,) {
  return Product.findByIdAndUpdate(id, product, { new: true });
}

export function deleteProduct(id: string) {
  const deleteProduct = Product.findByIdAndDelete(id);
  return deleteProduct;
}
