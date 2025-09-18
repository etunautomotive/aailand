"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel.jsx";

const AppleCards = ({ items = [] }) => {
  const cards = items.map((item, index) => (
    <Card key={index} card={item} index={index} layout />
  ));

  return (
    <div className="w-full">
      <Carousel items={cards} />
    </div>
  );
};

export default AppleCards;
