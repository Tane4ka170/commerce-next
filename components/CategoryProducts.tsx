"use client";
import { Category } from "@/sanity.types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "./ui/button";

interface Props {
  categories: Category[];
  slug: string;
}

const CategoryProducts = ({ categories, slug }: Props) => {
  const [currentSlug, setCurrentSlug] = useState(slug);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCategoryChange = (newSlug: string) => {
    if (newSlug === currentSlug) return;
    setCurrentSlug(newSlug);
    router.push(`/category/${newSlug}`, { scroll: false });
  };

  return (
    <div className="py-5 flex flex-col md:flex-row items-start gap-5">
      <div className="flex flex-col md:min-w-40">
        {categories.map((item) => (
          <Button
            key={item?._id}
            className={`bg-transparent border-0 p-0  rounded-none text-darkColor shadow-none hover:bg-shop_orange hover:text-white font-semibold hoverEffect border-b last:border-b-0 transition-colors capitalize ${item?.slug?.current === currentSlug && "bg-shop_orange text-white border-shop_orange"}`}
            onClick={() => handleCategoryChange(item?.slug?.current)}
          >
            <p className="w-full text-left px-2">{item?.title}</p>
          </Button>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default CategoryProducts;
