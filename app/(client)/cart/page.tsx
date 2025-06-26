"use client";

import { useState } from "react";

import useStore from "@/store";
import { Address } from "@/sanity.types";
import NoAccess from "@/components/NoAccess";
import Container from "@/components/Container";
import EmptyCart from "@/components/EmptyCart";
import { useAuth, useUser } from "@clerk/nextjs";

const CartPage = () => {
  const {
    deleteCartProduct,
    getTotalPrice,
    getItemCount,
    getSubTotalPrice,
    resetCart,
  } = useStore();
  const [loading, setLoading] = useState(false);
  const groupedItems = useStore((state) => state.getGroupedItems());
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const [addresses, setAddresses] = useState<Address[] | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  return (
    <div className="bg-gray-700 pb-52 md:pb-10">
      {isSignedIn ? (
        <Container>
          {groupedItems.length > 0 ? (
            <>
              <p>Products</p>
            </>
          ) : (
            <EmptyCart />
          )}
        </Container>
      ) : (
        <NoAccess></NoAccess>
      )}
    </div>
  );
};

export default CartPage;
