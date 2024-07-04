"use client";

import React from "react";
import Carousel from "./components/carousel";
import Image from "next/image";

interface Slide {
  id: number;
  imageUrl: string;
  caption: string;
}

const slides: Slide[] = [
  {
    id: 1,
    imageUrl: "https://example.com/slide1.jpg",
    caption: "Slide 1",
  },
  {
    id: 2,
    imageUrl: "https://example.com/slide2.jpg",
    caption: "Slide 2",
  },
  {
    id: 3,
    imageUrl: "https://example.com/slide3.jpg",
    caption: "Slide 3",
  },
];

// ==========================================================

interface Review {
  id: number;
  text: string;
  author: {
    imageUrl: string;
    caption: string;
  };
}

const reviews: Review[] = [
  {
    id: 1,
    text: "Hello 1",
    author: {
      imageUrl: "https://example.com/slide1.jpg",
      caption: "Slide 1",
    },
  },
  {
    id: 2,
    text: "Hello 2",
    author: {
      imageUrl: "https://example.com/slide2.jpg",
      caption: "Slide 2",
    },
  },
  {
    id: 3,
    text: "Hello 3",
    author: {
      imageUrl: "https://example.com/slide3.jpg",
      caption: "Slide 3",
    },
  },
];

export default function SolutionOnePage() {
  return (
    <div>
      <h1>Carousel Example</h1>
      <Carousel<Slide>
        items={slides}
        renderItem={(slide) => (
          <div key={slide.id}>
            <Image src={slide.imageUrl} alt={slide.caption} width={500} height={500} />
            <p>{slide.caption}</p>
          </div>
        )}
      />
      <Carousel<Review>
        items={reviews}
        renderItem={(review) => (
          <div key={review.id}>
            <p>{review.text}</p>
            <span>
              <Image src={review.author.imageUrl} alt={review.author.caption} width={500} height={500} />
              <p>{review.author.caption}</p>
            </span>
          </div>
        )}
      />
    </div>
  );
}
