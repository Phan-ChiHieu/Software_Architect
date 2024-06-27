import React, { memo } from "react";

type Props = {
  onCount?: () => void;
  count?: number;
};

const ChildComponent = ({ onCount }: Props) => {
  console.log("ChildComponent rendered");
  return (
    <div>
      <hr />
      <h1>ChildComponent</h1>
      <button onClick={onCount}>Count ở component CON</button>
    </div>
  );
};

export default memo(ChildComponent);
