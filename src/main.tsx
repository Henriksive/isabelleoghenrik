import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Bryllupshelgen } from "./features/bryllupshelgen/Bryllupshelgen.tsx";
import { Root } from "./features/root/Root.tsx";
import { RootPage } from "./features/root/RootPage.tsx";
import { Lokasjon } from "./features/lokasjon/Lokasjon.tsx";
import { Overnatting } from "./features/overnatting/Overnatting.tsx";
import { PraktiskInforsmasjon } from "./features/praktisk/PraktiskInformasjon.tsx";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement as HTMLElement);

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "", element: <RootPage /> },
        { path: "bryllupshelgen", element: <Bryllupshelgen /> },
        { path: "lokasjon", element: <Lokasjon /> },
        { path: "overnatting", element: <Overnatting /> },
        { path: "praktisk", element: <PraktiskInforsmasjon /> },
      ],
    },
  ],
  {
    basename: "/isabelleoghenrik", // 👈 legg til denne linjen
  }
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
