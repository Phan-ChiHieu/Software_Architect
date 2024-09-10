import React, { useState } from "react";
import BasicClient from "./basic-client";
import AdvanceClient from "./advance-client";

export default function WithChangeValue() {
  return (
    <React.Fragment>
      <h1>Basic onChange</h1>
      <BasicClient />
      <br />
      <hr />
      <br />
      <h1>Advance onChange</h1>
      <AdvanceClient />
    </React.Fragment>
  );
}
