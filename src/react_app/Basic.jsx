import React, { useState } from "react";

const Basic = () => {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={addCount}>Add Count (React)</button>
    </>
  );
};

export default Basic;
