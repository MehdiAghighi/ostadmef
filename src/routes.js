import Index from "./pages/index";
import Blog from "./pages/blog/blog.component";
import Post from "./pages/post/post.component";
import Course from "./pages/course/course.component";
import Courses from "./pages/courses/courses.component";

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
    },
    {
        path: "/course/:slug",
        component: Course,
    },
];

export default routes;
