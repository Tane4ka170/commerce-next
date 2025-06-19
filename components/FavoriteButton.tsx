import React from "react";

import { Heart } from "lucide-react";

import Link from "next/link";
import { Product } from "@/sanity.types";

const FavoriteButton = ({
  showProduct = false,
  product,
}: {
  showProduct?: boolean;
  product?: Product | null | undefined;
}) => {
  return (
    <>
      {!showProduct ? (
        <Link href={"/wishlist"} className="group relative">
          <Heart className="w-5 h-5 hover:text-shop_light_green hoverEffect" />
          <span className="absolute -top-1 -right-1 bg-shop_dark_blue text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center group-hover:scale-105 transition-all duration-300 ease-in-out">
            0
          </span>
        </Link>
      ) : (
        <button className="group relative hover:text-shop_light_green hoverEffect border border-s-shop_light_green/85 hover:border-shop_light_green p-1.5 rounded-sm">
          <Heart className="text-shop_light_green/75 group-hover:text-shop_light_green hoverEffect mt-1.5 w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default FavoriteButton;
