import React, { ReactNode, useState } from "react";

type CarouselProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
};

export default function Carousel<T>({ items, renderItem }: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };
  return (
    <div>
      <h1>Vao Source Xem Code Nhe</h1>
      <div>
        <button onClick={prevItem}>Previous</button>
        {renderItem(items[currentIndex])}
        <button onClick={nextItem}>Next</button>
      </div>
    </div>
  );
}
