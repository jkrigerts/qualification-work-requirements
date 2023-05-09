import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import App from "./App";
import Doc from "./Doc";
import Practice from "./Practice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "dokumentacija",
    element: <Doc />,
  },
  {
    path: "prakses-aizstavesana",
    element: <Practice />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontSizes: {
          xs: "1rem",
          sm: "1.1rem",
          md: "1.2rem",
          lg: "1.8rem",
          xl: "1.2rem",
        },
        spacing: {
          xl: "3rem",
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
