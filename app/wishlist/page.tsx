import NoAccess from "@/components/NoAccess";
import WistListProducts from "@/components/WistListProducts";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const WishListPage = async () => {
  const user = await currentUser();
  return (
    <>
      {user ? (
        <WistListProducts />
      ) : (
        <NoAccess details="Sign in to see your wishlist and complete your purchase before it’s too late!" />
      )}
    </>
  );
};

export default WishListPage;
