import { Product } from "@/sanity.types";
import useStore from "@/store";
import React from "react";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
  className?: string;
}
const QuantityButtons = ({ product, className }: Props) => {
  const { addItem, removeItem, getItemCount } = useStore();
  const itemCount = getItemCount(product?._id);
  const isOutOfStock = product?.quantity === 0;
  return (
    <div className={cn("flex items-center gap-1 pb-1 text-base", className)}>
      <Button>
        <Minus />
      </Button>
      <span>{itemCount}</span>
      <Button>
        <Plus />
      </Button>
    </div>
  );
};

export default QuantityButtons;
