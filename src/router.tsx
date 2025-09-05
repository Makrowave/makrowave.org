import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import Layout from "./components/Layout";

const routes = createRoutesFromElements(
  <>
    <Route Component={Layout}>
      <Route index Component={HomePage} />
    </Route>
  </>
);

const router = createBrowserRouter(routes);

export default router;
