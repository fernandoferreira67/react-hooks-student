import { useState, useRef } from "react";

const UseRefPage = () => {
  const [name, setName] = useState("");

  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="px-4 flex flex-col mb-4">
      <h1 className="font-extrabold text-5xl py-5">UseState</h1>
      <div classname="flex">
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Hello! My Name is: {name}</p>
        <button
          onClick={focusInput}
          className="bg-gray-800 text-white px-2 py-1 rounded mt-2 hover:bg-gray-700 cursor-pointer"
        >
          Focus no Input
        </button>
      </div>
    </div>
  );
};

export default UseRefPage;
