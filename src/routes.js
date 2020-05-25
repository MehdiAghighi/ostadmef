import Index from "./pages/index";
import Blog from "./pages/blog/blog.component";
import Post from "./pages/post/post.component";
import Course from "./pages/course/course.component";
import Courses from "./pages/courses/courses.component";
import Payment from "./pages/payment/payment.component";
import Logout from "./pages/logout/logout.component";
import NotFound from "./pages/not-found/not-found.component";

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
   {
      path: "/blog/:slug",
      component: Post,
   },
   {
      path: "/courses",
      component: Courses,
      exact: true,
   },
   {
      path: "/course/:slug",
      component: Course,
   },
   {
      path: "/payment",
      component: Payment,
   },
   {
      path: "/logout",
      component: Logout,
   },
   {
      component: NotFound,
      status: 404,
   },
];

export default routes;
