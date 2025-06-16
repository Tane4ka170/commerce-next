import { getProductBySlug } from "@/sanity/queries";
import React from "react";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug();
  return <div>SingleProductPage</div>;
};

export default SingleProductPage;
