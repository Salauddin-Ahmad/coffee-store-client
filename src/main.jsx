import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import AuthProviders from "./providers/AuthProviders.jsx";
import Usars from "./components/Usars.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () =>
      fetch(
        "https://coffee-store-server-cl.vercel.app/coffee"
      ),
  },
  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) =>
      fetch(
        `https://coffee-store-server-cl.vercel.app/coffee/${params.id}`
      ),
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/users",
    element: <Usars></Usars>,
    loader: () =>
      fetch(
        `https://coffee-store-server-cl.vercel.app/user`
      ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
