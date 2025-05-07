import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <Container className="p-10 bg-shop_light_purple">
      <h2 className="text-xl font-semibold">Home</h2>
      <p>
        Spinning like a record in my dusty room, replaying all the nights we
        knew
      </p>
      <Button variant="destructive">Check out</Button>
    </Container>
  );
};

export default Home;
