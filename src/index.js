import React from "react";
import ReactDOM from "react-dom/client";
import "animate.css/animate.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";

// import App from './App';
import Signup from "./component/Signup";
import Login from "./component/Login";
import Landing from "./component/Landing";
import TaskAdd from "./component/TaskAdd";
import ResetPassword from "./component/ResetPassword";
import ResetPasswordMessage from "./component/ResetPasswordMessage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/register",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/addtask",
    element: <TaskAdd />,
  },
  {
    path: "/reset",
    element: <ResetPassword />,
  },
  {
    path: "/reset-message",
    element: <ResetPasswordMessage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
