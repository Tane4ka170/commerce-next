"use client";
import React from "react";

import toast from "react-hot-toast";
import { ShoppingBag } from "lucide-react";

import useStore from "@/store";
import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";

import { Button } from "./ui/button";
import PriceFormatter from "./PriceFormatter";
import QuantityButtons from "./QuantityButtons";

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
      {itemCount ? (
        <div className="text-sm w-full">
          <div className="flex items-center justify-between">
            <span className="text-xs text-darkColor/65">Quantity</span>
            <QuantityButtons product={product} />
          </div>
          <div className="flex items-center justify-between border-t pt-1">
            <span className="text-xs font-semibold">Subtotal</span>
            <PriceFormatter
              amount={product?.price ? product?.price * itemCount : 0}
            />
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default AddToCartButton;
