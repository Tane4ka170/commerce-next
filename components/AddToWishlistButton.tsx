import React, { useEffect, useState } from "react";

import toast from "react-hot-toast";
import { Heart } from "lucide-react";

import useStore from "@/store";
import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
const AddToWishlistButton = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  const { favoriteProduct, addToFavorite } = useStore();
  const [existingProduct, setExistingProduct] = useState<Product | null>(null);
  useEffect(() => {
    const availableProduct = favoriteProduct?.find(
      (item) => item?._id === product?._id
    );
    setExistingProduct(availableProduct || null);
  }, [product, favoriteProduct]);
  const handleFavorite = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    if (product?._id) {
      addToFavorite(product).then(() => {
        toast.success(
          existingProduct ? "Removed from favorites" : "Added to favorites"
        );
      });
    }
  };
  return (
    <div
      className={cn("absolute top-2 right-2 hover:cursor-pointer", className)}
    >
      <div
        onClick={handleFavorite}
        className={`p-2.5 rounded-full hover:bg-shop_dark_blue/50 hover:text-white hoverEffect  ${existingProduct ? "bg-shop_dark_blue/50 text-white" : "bg-lightColor/35"}`}
      >
        <Heart size={15} />
      </div>
    </div>
  );
};

export default AddToWishlistButton;
