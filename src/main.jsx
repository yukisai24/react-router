import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ReactDOM from "react-dom/client";

import "./index.css";

import ErrorPage from "./error-page";
import Contact, { loader as contactLoader } from "./routes/contact";
import { action as destroyAction } from "./routes/destroy";
import EditContact, { action as editAction } from "./routes/edit";
import Index from "./routes/index";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },

      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,

      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
