import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

export default function FetchApi() {
  const [data, setData] = useState<any>([]);

  const getProduct = useCallback(async () => {
    const res = await fetch("https://fakestoreapi.com/products/1");
    const product = await res.json();
    setData(product);
  }, []);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  console.log("data", data);

  return (
    <div>
      <hr />
      <h1>FetchApi</h1>
      <div>
        <p>id:{data.id}</p>
        <p>title:{data.title}</p>
        <p>description:{data.description}</p>
        <p>
          image:
          <Image src={data.image} alt="..." width={100} height={100} />
        </p>
      </div>
    </div>
  );
}
