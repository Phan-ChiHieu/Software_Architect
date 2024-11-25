import Link from "next/link";
import React from "react";

export default function PageOptimization() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] justify-center items-center flex flex-col">
      <h1 className="text-red-800 text-3xl">PageOptimization</h1>
      <ul className="pt-8">
        <li>
          <Link href={"/optimization/with-images"} className="text-blue-300 transition duration-300 ease-in hover:text-blue-800">
            With Images
          </Link>
        </li>
      </ul>
    </div>
  );
}
