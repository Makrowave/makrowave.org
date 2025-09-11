import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router';
import { HomePage } from './pages/HomePage';
import Layout from './common/components/Layout';
import { Pages } from './pages/pages';
import BlogPage from './pages/BlogPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import { posts } from './blog/blogPosts';
import PostWrapper from './blog/components/PostWrapper';

const routes = createRoutesFromElements(
  <>
    <Route Component={Layout}>
      <Route index Component={HomePage} />
      <Route path={Pages.Blog}>
        <Route index Component={BlogPage} />
        <Route Component={PostWrapper}>
          {posts.map((p) => (
            <Route path={p.href} element={p.element} key={p.href} />
          ))}
        </Route>
      </Route>
      <Route path={Pages.Projects} Component={ProjectsPage} />
      <Route path={Pages.Experience} Component={ExperiencePage} />
    </Route>
  </>,
);

const router = createBrowserRouter(routes);

export default router;
