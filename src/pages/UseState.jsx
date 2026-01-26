import {useState} from "react"

const UseStatePage = () => {
  const [count, setCount] = useState(2);

  const incrementCount = () => {
    setCount((prevState) => prevState + 1)
  }

  const decrementCount = () => {
    setCount((prevState) => prevState - 1)
  }

  return (
    <div className="px-4 flex flex-col mb-4">
      <h1 className="font-extrabold text-5xl py-5">UseState</h1>
      <div className="flex px-4">
        <span className="font-bold text-2xl px-4 py-5 bg-yellow-100 mr-3">{count}</span>
        <div className="flex gap-2">
          <button className="bg-gray-600 text-white px-4 mt-4" onClick={incrementCount}>Increment</button>
          <button className="bg-gray-600 text-white px-4 mt-4" onClick={decrementCount}>Decrement</button>
        </div>
      </div>
    </div>
  )

}

export default UseStatePage