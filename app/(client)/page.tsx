import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import HomeCategories from "@/components/HomeCategories";
import ProductGrid from "@/components/ProductGrid";
import { getCategories } from "@/sanity/queries";
import React from "react";

const Home = async () => {
  const categories = await getCategories();
  return (
    <Container>
      <HomeBanner />
      <ProductGrid />
      <HomeCategories categories={categories} />
    </Container>
  );
};

export default Home;
