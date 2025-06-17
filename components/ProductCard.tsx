import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { Flame, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToWishlistButton from "./AddToWishlistButton";
import { Title } from "./ui/text";
import PriceView from "./PriceView";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="text-sm border border-darkColor/20 rounded-md bg-white group overflow-hidden">
      <div className="relative bg-shop_light_bg aspect-square">
        {product?.images?.[0] && (
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={urlFor(product.images[0])
                .width(600)
                .height(600)
                .fit("crop")
                .url()}
              alt={product?.name || "Product Image"}
              fill
              className={`object-contain transition-transform duration-500 w-full h-64 overflow-hidden bg-shop_light_bg ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </Link>
        )}
        <AddToWishlistButton product={product} />
        {product?.status === "sale" && (
          <p className="absolute top-2 left-2 z-10 text-xs border border-darkColor/50 px-2 rounded-full group-hover:border-shop_light_green hover:text-shop_dark_blue hoverEffect">
            Sale!
          </p>
        )}
        {product?.status === "hot" && (
          <Link
            href={"/deal"}
            className="absolute top-2 left-2 z-10 border border-shop_orange/50 p-1 rounded-full group-hover:border-shop_orange hover:text-shop_dark_green hoverEffect"
          >
            <Flame
              size={18}
              fill="#95530b"
              className="text-shop_orange/50 group-hover:text-shop_orange hoverEffect"
            />
          </Link>
        )}
      </div>
      <div className="p-3 flex flex-col gap-2">
        {product?.categories && (
          <p className="uppercase line-clamp-1 text-xs font-medium text-lightColor">
            {product?.categories?.map((cat) => cat).join(", ")}
          </p>
        )}
        <Title className="text-sm line-clamp-1">{product?.name}</Title>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                size={13}
                key={index}
                className={
                  index < 4 ? "text-shop_light_green" : "text-lightColor"
                }
                fill={index < 4 ? "#00bfa5" : "#d9d9d9"}
              />
            ))}
          </div>
          <p className="text-lightColor text-xs tracking-wide">5 reviews</p>
        </div>
        <div className="flex items-center gap-2.5">
          <p className="font-medium">In Stock</p>
          <p
            className={`${product?.stock === 0 ? "text-red-800" : "text-shop_light_green font-semibold "}`}
          >
            {(product?.stock as number) > 0 ? product?.stock : "Out of stock"}
          </p>
        </div>
        <PriceView
          price={product?.price}
          discount={product?.discount}
          className="text-sm"
        />
        <AddToCartButton product={product} className="w-36 rounded-full" />
      </div>
    </div>
  );
};

export default ProductCard;
