import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppShell, MantineProvider, Header } from "@mantine/core";
import App from "./App";
import Doc from "./Doc";
import Practice from "./Practice";
import Test from "./Test";
import MyHeader from "./MyHeader";
import Presentation from "./Presentation";

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
  {
    path: "tests",
    element: <Test />,
  },
  {
    path: "kvd-prezentacija",
    element: <Presentation />,
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
      <AppShell
        header={
          <Header height={52} p="xs">
            <MyHeader></MyHeader>
          </Header>
        }
      >
        <RouterProvider router={router} />
      </AppShell>
    </MantineProvider>
  </React.StrictMode>
);
