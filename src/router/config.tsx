import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import StrategyPage from "../pages/strategy/page";
import VipPage from "../pages/vip/page";
import BlogPage from "../pages/blog";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/guides/strategy",
    element: <StrategyPage />,
  },
  {
    path: "/strategy",
    element: <Navigate to="/guides/strategy" replace />,
  },
  {
    path: "/vip",
    element: <VipPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/members/vip",
    element: <VipPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
