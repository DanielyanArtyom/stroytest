import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "../node_modules/react-router-dom/dist/index";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Router } from "./Router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  </React.StrictMode>
);
