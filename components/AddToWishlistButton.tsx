import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import useStore from "@/store";
import { Heart } from "lucide-react";
import React, { useState } from "react";

const AddToWishlistButton = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  const { favoriteProduct, addToFavorite } = useStore();
  const [existingProduct, setExistingProduct] = useState<Product | null>(null);
  const handleFavorite = (e: React.MouseEvent<HTMLSpanElement>) => {};
  return (
    <div className={cn(`absolute right-2 top-2 z-10`, className)}>
      <button className="p-2.5 rounded-full hover:bg-shop_dark_blue/50 hover:text-white hoverEffect bg-deal-bg">
        <Heart size={15} />
      </button>
    </div>
  );
};

export default AddToWishlistButton;
