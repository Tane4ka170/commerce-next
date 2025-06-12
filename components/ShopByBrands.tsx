import React from "react";
import { Title } from "./ui/text";
import Link from "next/link";
import { getAllBrands } from "@/sanity/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const ShopByBrands = async () => {
  const brands = await getAllBrands();
  return (
    <div className="mb-10 lg:pb-20 bg-shop_light_bg p-5 lg:p-7 rounded-md">
      <div className="flex items-center gap-5 justify-between mb-10">
        <Title className="text-2xl">Browse by Brand</Title>
        <Link
          href={"/shop"}
          className="text-sm font-semibold tracking-wide hover:text-shop_btn_dark_blue hoverEffect"
        >
          View all
        </Link>
      </div>
      <div>
        {brands?.map((brand) => (
          <Link
            key={brand?._id}
            href={`/brand/${brand?.slug?.current}`}
            className="bg-white w-36 h-24 flex items-center justify-center rounded-md overflow-hidden hover:shadow-lg shadow-shop_dark_blue/20 hoverEffect"
          >
            {brand?.image && (
              <Image
                src={urlFor(brand?.image).url()}
                alt="Brand Image"
                width={250}
                height={250}
                className="w-32 h-20 object-contain"
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopByBrands;
