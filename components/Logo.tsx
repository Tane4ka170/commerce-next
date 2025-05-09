import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "text-2xl text_shop_dark_blue font-black tracking-wider uppercase hover:text-shop_light_green hoverEffect group font-sans",
          className
        )}
      >
        ShopCar
        <span className="text-shop_light_green hover:text-shop_dark_blue hoverEffect">
          t
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
