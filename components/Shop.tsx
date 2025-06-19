"use client";

import { BRANDS_QUERYResult, Category } from "@/sanity.types";
import React from "react";
import Container from "./Container";
import { Title } from "@radix-ui/react-dialog";

interface Props {
  categories: Category[];
  brands: BRANDS_QUERYResult;
}

const Shop = ({ categories, brands }: Props) => {
  return (
    <div className="border-t">
      <Container className="mt-5">
        <div className="sticky top-0 z-10 mb-5">
          <div className="flex justify-between items-center">
            <Title className="text-lg uppercase tracking-wide">
              Find products that fit your needs
            </Title>
            <button className="text-shop_dark_blue underline text-sm mt-2 font-medium hover:text-red-300 hoverEffect">
              Clear Filters
            </button>
          </div>
        </div>
        <div></div>
      </Container>
    </div>
  );
};

export default Shop;
