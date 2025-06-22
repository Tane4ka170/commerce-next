"use client";
import React from "react";

import { ShoppingBag } from "lucide-react";

import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";

import { Button } from "./ui/button";
import useStore from "@/store";
import toast from "react-hot-toast";

interface Props {
  product: Product;
  className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
  const { addItem, getItemCount } = useStore();
  const itemCount = getItemCount(product?._id);
  const isOutOfStock = product?.stock === 0;

  const handleAddToCart = () => {
    if ((product?.stock as number) > itemCount) {
      addItem(product);
      toast.success(`${product?.name?.substring(0, 12)}... has been added!`);
    } else {
      toast.error("You can't add more than the available stock");
    }
  };
  return (
    <div>
      <Button
        disabled={isOutOfStock}
        onClick={handleAddToCart}
        className={cn(
          "w-full bg-shop_dark_blue/80 text-shop_light_bg shadow-none border border-shop_dark_blue/80 font-semibold tracking-wide hover:text-white hover:bg-shop_dark_blue hover:border-shop_dark_blue hoverEffect",
          className
        )}
      >
        <ShoppingBag /> {isOutOfStock ? "Unavailable" : "Buy Now"}
      </Button>
    </div>
  );
};

export default AddToCartButton;
