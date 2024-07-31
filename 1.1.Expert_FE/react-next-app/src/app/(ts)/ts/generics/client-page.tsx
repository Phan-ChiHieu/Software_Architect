"use client";

import React from "react";
import Themes from "./components/themes";
import WithComponent from "./with_components";

export default function ClientPageGenerics() {
  return (
    <div>
      <h1>ClientPageGenerics</h1>
      <Themes />
      <br />
      <hr />
      <br />
      <h1>Đọc thêm ở file /func/script.ts</h1>
      <br />
      <h1>React Generic With Components</h1>
      <WithComponent />
    </div>
  );
}
