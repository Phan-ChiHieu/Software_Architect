"use client";

import React from "react";
import { usePeristedState } from "./usePeristedState";

export default function PageClient() {
  const [count, setCount] = usePeristedState("count", 0);
  return (
    <div>
      <h1>PageClient</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
