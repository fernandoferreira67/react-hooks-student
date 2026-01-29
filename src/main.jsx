import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/Home.jsx";
import UseStatePage from "./pages/UseState.jsx";
import UseEffectPage from "./pages/UseEffect.jsx";
import UseRefPage from "./pages/UseRef.jsx";
import UseReducerPage from "./pages/UseReducer.jsx";
import UseMemoPage from "./pages/UseMemo.jsx";
import UseCallbackPage from "./pages/UseCallback.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/useState",
    element: <UseStatePage />,
  },
  {
    path: "/useEffect",
    element: <UseEffectPage />,
  },
  {
    path: "/useRef",
    element: <UseRefPage />,
  },
  {
    path: "/useReducer",
    element: <UseReducerPage />,
  },
  {
    path: "/useMemo",
    element: <UseMemoPage />,
  },
  {
    path: "/useCallback",
    element: <UseCallbackPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
