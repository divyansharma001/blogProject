import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage.jsx";
import Posts from "./pages/posts/Posts.jsx";
import Homepage from "./pages/Home/Homepage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path=""  element={<Homepage/>}/>
    <Route path="/posts" element={<Posts/>}/>
  </Route>)
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
