"use client";

import React, { useState } from "react";

import toast from "react-hot-toast";
import { Heart } from "lucide-react";

import Link from "next/link";
import useStore from "@/store";
import { Product } from "@/sanity.types";

const FavoriteButton = ({
  showProduct = false,
  product,
}: {
  showProduct?: boolean;
  product?: Product | null | undefined;
}) => {
  const { favoriteProduct, addToFavorite } = useStore();
  const [existingProduct, setExistingProduct] = useState<Product | null>(null);

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
    <>
      {!showProduct ? (
        <Link href={"/wishlist"} className="group relative">
          <Heart className="w-5 h-5 hover:text-shop_light_green hoverEffect" />
          <span className="absolute -top-1 -right-1 bg-shop_dark_blue text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center group-hover:scale-105 transition-all duration-300 ease-in-out">
            {favoriteProduct?.length ? favoriteProduct?.length : 0}
          </span>
        </Link>
      ) : (
        <button
          className="group relative hover:text-shop_light_green hoverEffect border border-s-shop_light_green/85 hover:border-shop_light_green p-1.5 rounded-sm"
          onClick={handleFavorite}
        >
          {existingProduct ? (
            <Heart
              fill="#38b2ac"
              className="text-shop_light_green/75 group-hover:text-shop_light_green hoverEffect mt-1.5 w-5 h-5"
            />
          ) : (
            ""
          )}
          <Heart className="text-shop_light_green/75 group-hover:text-shop_light_green hoverEffect mt-1.5 w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default FavoriteButton;
