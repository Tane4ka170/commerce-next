"use client";
import React from "react";

import { ShoppingBag } from "lucide-react";

import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";

import { Button } from "./ui/button";

interface Props {
  product: Product | null | undefined;
  className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
  const isOutOfStock = product?.stock === 0;

  const handleAddToCart = () => {
    window.alert("Added to cart!");
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
