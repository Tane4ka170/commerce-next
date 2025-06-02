import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";
import React from "react";

const Home = () => {
  return (
    <Container className="p-10 bg-shop_light_purple">
      <HomeBanner />
      <div className="py-10">
        <ProductGrid />
      </div>
    </Container>
  );
};

export default Home;
