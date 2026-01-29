import { useState, useMemo } from "react";

const UseMemoPage = () => {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <>
      <p>{number}</p>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => setNumber(2)}
        className="bg-black text-white rounded ml-2 px-1"
      >
        Incremento
      </button>
      <p>Textp: {text}</p>
    </>
  );
};

const slowFunction = (num) => {
  console.log("Slow function");
  for (let i = 0; i <= 10000; i++) {}
  return num * 2;
};

export default UseMemoPage;
