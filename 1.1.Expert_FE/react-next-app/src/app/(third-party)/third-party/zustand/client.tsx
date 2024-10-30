import React from "react";
import { useCountStore } from "./CountProvider";

export default function Client() {
  //
  const count = useCountStore((state) => state.count);
  console.log("count", count);

  return <div>{count}</div>;
}
