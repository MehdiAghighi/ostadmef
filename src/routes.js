import Index from "./pages/index";
import Blog from "./pages/blog/blog.component";

const routes = [
   {
      path: "/",
      component: Index,
      exact: true,
   },
   {
      path: "/blog",
      component: Blog,
      exact: true,
   },
];

export default routes;
