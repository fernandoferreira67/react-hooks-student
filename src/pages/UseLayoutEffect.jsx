import { useState, useEffect, useLayoutEffect } from "react";

const UseLayoutEffectPage = () => {
  const [number, setNumber] = useState(1);

  useLayoutEffect(() => {
    console.log(number);
  }, [number]);

  return (
    <>
      <h1 className="text-4xl font-semibold ml-3">{number}</h1>
      <button
        onClick={(prev) => setNumber((prev) => prev + 1)}
        className="bg-gray-500 text-white rounded px-4 font-semibold"
      >
        Incremento
      </button>
    </>
  );
};

export default UseLayoutEffectPage;
