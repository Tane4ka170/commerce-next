import { Product } from "@/sanity.types";
import React from "react";

interface Props {
  product: Product;
  className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
  return <div>AddToCartButton</div>;
};

export default AddToCartButton;
