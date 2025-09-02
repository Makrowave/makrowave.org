import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import { GradientLayout } from "./components/GradientLayout";
import { HomePage } from "./pages/HomePage";

const routes = createRoutesFromElements(
  <>
    <Route Component={GradientLayout}>
      <Route index Component={HomePage} />
    </Route>
  </>
);

const router = createBrowserRouter(routes);

export default router;
