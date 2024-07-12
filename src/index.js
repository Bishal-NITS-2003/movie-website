import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App";
import Details from "./pages/Details";
import Movie from "./pages/movie";
import Series from "./pages/series";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "details/:title/:year",
    element: <Details />,
  },
  {
    path: "movies",
    element: <Movie />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "series",
    element: <Series />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
