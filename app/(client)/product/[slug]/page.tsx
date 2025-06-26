import React from "react";

import { CornerDownLeft, StarIcon, Truck } from "lucide-react";

import { notFound } from "next/navigation";
import Container from "@/components/Container";
import ImageView from "@/components/ImageView";
import PriceView from "@/components/PriceView";
import { FaCodeCompare } from "react-icons/fa6";
import { getProductBySlug } from "@/sanity/queries";
import FavoriteButton from "@/components/FavoriteButton";
import AddToCartButton from "@/components/AddToCartButton";
import ProductCharacteristics from "@/components/ProductCharacteristics";
import { CiCircleQuestion, CiDeliveryTruck, CiShare1 } from "react-icons/ci";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col md:flex-row gap-10 pb-10">
      {product?.images && (
        <ImageView images={product?.images} isStock={product?.stock} />
      )}
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">{product?.name}</h2>
          <p className="text-sm text-gray-500 tracking-wide">
            {product?.description}
          </p>
          <div className="flex items-center gap-0.5 text-xs">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                size={12}
                className="text-shop_light_green"
                fill="#00bfa5"
              />
            ))}
            <p className="font-semibold">{`(120)`}</p>
          </div>
        </div>
        <div className="space-y-2 border-t border-b border-gray-300 py-5">
          <PriceView
            price={product?.price}
            discount={product?.discount}
            className="text-lg font-bold"
          />
          <p
            className={`px-6 py-1.5 text-sm text-center inline-block font-semibold rounded-lg ${product?.stock === 0 ? "bg-red-400 text-red-500" : "text-green-800 bg-green-200"}`}
          >
            {(product?.stock as number) > 0 ? "In Stock" : "Out of Stock"}
          </p>
        </div>
        <div className="flex items-center gap-2.5 lg:gap-3">
          <AddToCartButton product={product} />
          <FavoriteButton showProduct={true} product={product} />
        </div>
        <ProductCharacteristics product={product} />
        <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-b-gray-50 py-5 -mt-2">
          <div className="flex items-center gap-2 text-sm text-black hover:text-red-900 hoverEffect">
            <FaCodeCompare className="text-lg" />
            <p>Check colors</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-black hover:text-red-900 hoverEffect">
            <CiCircleQuestion className="text-lg" />
            <p>Inquire</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-black hover:text-red-900 hoverEffect">
            <CiDeliveryTruck className="text-lg" />
            <p>Shipping & Returns</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-black hover:text-red-900 hoverEffect">
            <CiShare1 className="text-lg" />
            <p>Share with friends</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="border border-lightColor/80 border-b-0 p-3 flex items-center gap-2.5">
            <Truck size={30} className="text-shop_orange" />
            <div>
              <p className="text-base font-semibold text-black">
                Free Delivery
              </p>
              <p className="text-sm text-gray-400 underline underline-offset-2">
                Enter your postal code to check availability
              </p>
            </div>
          </div>
          <div className="border border-lightColor/80 p-3 flex items-center gap-2.5">
            <CornerDownLeft size={30} className="text-shop_orange" />
            <div>
              <p className="text-base font-semibold text-black">Returns</p>
              <p className="text-sm text-gray-400 ">
                Enjoy free returns within 30 days.{" "}
                <span className="underline underline-offset-2">Learn more</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleProductPage;
