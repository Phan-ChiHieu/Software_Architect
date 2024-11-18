"use client";

import React, { useEffect, useRef, useState } from "react";

export default function PageClient() {
  const [fibSync, setFibSync]: any = useState([]);
  const [fibAsync, setFibAsync]: any = useState([]);
  const [timeSync, setTimeSync]: any = useState([]);
  const [timeAsync, setTimeAsync]: any = useState([]);
  const [showMessage, setShowMessage]: any = useState(false); // New state
  const [syncLoadings, setSyncLoadings]: any = useState([]); // Changed state
  const [asyncLoadings, setAsyncLoadings]: any = useState([]); // Changed state
  const workerRef: any = useRef(null);

  const NUMBER = 40;

  useEffect(() => {
    workerRef.current = new Worker(new URL("./fibWorker.ts", import.meta.url));
    workerRef.current.onmessage = (e: any) => {
      const { result, time } = e.data;
      setFibAsync((prev: any) => [...prev, result]);
      setTimeAsync((prev: any) => [...prev, time]);
      setAsyncLoadings((prev: any) => prev.slice(1)); // Remove loading
    };
    return () => {
      workerRef.current.terminate();
    };
  }, []);

  const calculateSync = async () => {
    await setSyncLoadings((prev: any) => [...prev, true]); // Add loading
    const start = performance.now();
    const result = fibonacci(NUMBER);
    const end = performance.now();
    setFibSync((prev: any) => [...prev, result]);
    setTimeSync((prev: any) => [...prev, end - start]);
    setSyncLoadings((prev: any) => prev.slice(1)); // Remove loading
  };

  const calculateAsync = () => {
    setAsyncLoadings((prev: any) => [...prev, true]); // Add loading
    workerRef.current.postMessage(NUMBER);
  };

  const fibonacci = (n: number): number => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  const handleNewButtonClick = () => {
    // alert("Button clicked!");
    setShowMessage(true);
  };

  console.log(">>>>>asyncLoadings>>>>", asyncLoadings);

  return (
    <div>
      <h1>PageClient</h1>
      <div style={{ padding: "50px" }}>
        <button onClick={handleNewButtonClick}>Show Message</button>
        {showMessage && <p style={{ color: "green" }}>Button clicked!</p>}
        <div style={{ display: "flex", gap: "20px" }}>
          <div>
            <button onClick={calculateSync}>Calculate Fibonacci Sync</button>
            {syncLoadings.map((_: any, index: any) => (
              <p key={index} style={{ color: "orange" }}>
                Calculating synchronously...
              </p>
            ))}
            {fibSync.length > 0 && (
              <ul>
                {fibSync.map((result: any, index: any) => (
                  <li key={index}>
                    Result: {result} (Time: {timeSync[index].toFixed(2)} ms)
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <button onClick={calculateAsync}>Calculate Fibonacci Async with Web Worker</button>
            {asyncLoadings.map((_: any, index: any) => (
              <p key={index} style={{ color: "purple" }}>
                Calculating asynchronously...
              </p>
            ))}
            {fibAsync.length > 0 && (
              <ul>
                {fibAsync.map((result: any, index: any) => (
                  <li key={index}>
                    Result: {result} (Time: {timeAsync[index].toFixed(2)} ms)
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
