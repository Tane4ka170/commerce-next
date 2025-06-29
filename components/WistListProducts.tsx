"use client";

import useStore from "@/store";
import { useState } from "react";
import Container from "./Container";
import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const WistListProducts = () => {
  const { favoriteProduct, removeFromFavorite, resetFavorite } = useStore();
  const [visibleProducts, setVisibleProducts] = useState(7);

  const loadMore = () => {
    setVisibleProducts((prev) => Math.min(prev + 5, favoriteProduct.length));
  };
  return (
    <Container>
      {favoriteProduct?.length > 0 ? (
        <p>product available</p>
      ) : (
        <div className="flex min-h-[400px] flex-col items-center justify-center space-y-6 px-4 text-center">
          <div className="relative mb-4">
            <div className="absolute -top-1 -right-1 h-3.5 w-3.5 animate-bounce rounded-full bg-pink-400/30" />
            <Sparkles className="h-12 w-12 text-pink-400" strokeWidth={1.25} />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-800">
              No favorites yet
            </h2>
            <p className="text-sm text-gray-500">
              Mark items you love and they’ll live here for later 💖
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-full px-6 py-2 text-sm font-medium"
          >
            <Link href="/shop">Browse Products</Link>
          </Button>
        </div>
      )}
    </Container>
  );
};

export default WistListProducts;
