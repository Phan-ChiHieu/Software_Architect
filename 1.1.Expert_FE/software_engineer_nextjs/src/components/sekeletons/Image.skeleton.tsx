import React from "react";

export default function ImageSkeletonLoader({ width = "800px", height = "400px" }) {
  return (
    <div style={{ width, height }} className={`bg-gray-300 rounded-lg animate-pulse`}>
      <div className="w-full h-full bg-gradient-to-r from-gray-300 to-gray-400 animate-pulse"></div>
    </div>
  );
}
