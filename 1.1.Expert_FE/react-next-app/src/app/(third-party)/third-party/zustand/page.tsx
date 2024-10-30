"use client";

import React from "react";
import CountProvider, { useCountStore } from "./CountProvider";
import Client from "./client";
import Component from "./component";

export default function PageZustand({ initialCount = 5 }) {
  return (
    <CountProvider initialCount={initialCount}>
      <Client />
      <Component />
    </CountProvider>
  );
}

// function Component() {
//   const count = useCountStore((state) => state.count);
//   console.log("count", count);
//   return null;
// }
