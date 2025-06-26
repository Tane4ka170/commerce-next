"use client";

import React from "react";

import { ShoppingBag } from "lucide-react";

import Link from "next/link";
import useStore from "@/store";

const CartIcon = () => {
  const { items } = useStore();
  return (
    <Link href={"/cart"} className="group relative">
      <ShoppingBag className="w-5 h-5 hover:text-shop_light_green hoverEffect" />
      <span className="absolute -top-1 -right-1 bg-shop_dark_blue text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center group-hover:scale-105 transition-all duration-300 ease-in-out">
        {items?.length ? items?.length : 0}
      </span>
    </Link>
  );
};

export default CartIcon;
