import React from "react";
import { Home } from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export enum RouterPaths {
  Default = "products",
  Home = "products",
  NotFound = "/*",
}
interface RouteObject {
  path: RouterPaths;
  element: JSX.Element;
  isPublic?: boolean;
}

const routeElements: RouteObject[] = [
  {
    path: RouterPaths.Default,
    element: <Home />,
  },
  {
    path: RouterPaths.Home,
    element: <Home />,
  },
  {
    path: RouterPaths.NotFound,
    element: <Home />,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routeElements.map(({ path, element, isPublic }) => (
          <Route key={path} path={path !== RouterPaths.NotFound ? path : RouterPaths.NotFound} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
