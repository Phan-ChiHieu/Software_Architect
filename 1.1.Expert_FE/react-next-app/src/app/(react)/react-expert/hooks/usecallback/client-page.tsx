"use client";

import React, { useCallback, useEffect, useState } from "react";
import ChildComponent from "./components/ChildComponent";
import SearchComponent from "./components/SearchComponent";
import FetchApi from "./components/FetchApi";
import ExpensiveComponent from "./components/ExpensiveComponent";

export default function ClientPage() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  console.log("ClientPage is re-render !!!", count);

  const handleSearch = useCallback((e: any) => {
    console.log("handleSearch in  ClientPage", e.target.value);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <ChildComponent onCount={increment} />
      <SearchComponent onSearch={handleSearch} />
      {/* Dùng useCallback + useEffect để fetch Api khi mount */}
      <FetchApi />
      <ExpensiveComponent value={count} />
    </div>
  );
}
