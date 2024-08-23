import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1>About</h1>
      <Link href={"/login"} passHref>
        Click
      </Link>
    </div>
  );
}
