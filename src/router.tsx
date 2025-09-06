import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import Layout from "./components/Layout";
import { Pages } from "./pages/pages";
import BlogPage from "./pages/BlogPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";

const routes = createRoutesFromElements(
  <>
    <Route Component={Layout}>
      <Route index Component={HomePage} />
      <Route path={Pages.Blog} Component={BlogPage} />
      <Route path={Pages.Projects} Component={ProjectsPage} />
      <Route path={Pages.Experience} Component={ExperiencePage} />
    </Route>
  </>
);

const router = createBrowserRouter(routes);

export default router;
