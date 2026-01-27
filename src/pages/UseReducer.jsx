import { useState, useEffect, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add-task":
      return {
        ...state,
        tasks: [...state.tasks, { name: action.payload, isCompleted: false }],
        tasksCount: state.tasksCount + 1,
      };
    case "toggle-task":
      return {
        ...state,
        tasks: state.tasks.map((item, index) =>
          index === action.payload
            ? { ...item, isCompleted: !item.isCompleted }
            : item,
        ),
      };
    default:
      return state;
  }
};

const UseReducerPage = () => {
  const [state, dispatch] = useReducer(reducer, { tasks: [], tasksCount: 0 });

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="mt-4">
      <h1 className="font-extrabold text-5xl py-5">UseReduce</h1>

      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button
        onClick={() => {
          dispatch({ type: "add-task", payload: inputValue });
          setInputValue("");
        }}
        className="bg-slate-700 text-white px-3 py-2 rounded ml-3"
      >
        Adiconar
      </button>

      <div className="flex flex-col">
        {state.tasks.map((task, index) => (
          <p
            onClick={() => dispatch({ type: "toggle-task", payload: index })}
            style={{
              textDecoration: task.isCompleted ? "line-through" : "none",
            }}
          >
            {task.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default UseReducerPage;
