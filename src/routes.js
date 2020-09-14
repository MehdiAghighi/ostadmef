import Index from "./pages/index"
import Blog from "./pages/blog/blog.component"
import Post from "./pages/post/post.component"
import Course from "./pages/course/course.component"
import Courses from "./pages/courses/courses.component"
import Video from "./pages/video/video.component"
import Payment from "./pages/payment/payment.component"
import Logout from "./pages/logout/logout.component"
import ProfileCourses from "./pages/profile-courses/profile-courses.component"
import NotFound from "./pages/not-found/not-found.component"
import Story from "./pages/story/story.component"
import Family from "./pages/family/family.component"
import Terms from "./pages/terms/terms.componen"
import FAQ from "./pages/faq/faq.component"
import Rights from "./pages/rights/rights.component"
import Contact from "./pages/contact/contact.component"

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
    path: "/courses/:category",
    component: Courses,
    exact: true,
  },
  {
    path: "/course/:slug",
    component: Course,
  },
  {
    path: "/video/:slug",
    component: Video,
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
    path: "/profile/courses",
    component: ProfileCourses,
  },
  {
    path: "/story",
    component: Story,
  },
  {
    path: "/family",
    component: Family,
  },
  {
    path: "/terms",
    component: Terms,
  },
  {
    path: "/faq",
    component: FAQ,
  },
  {
    path: "/rights",
    component: Rights,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    component: NotFound,
    status: 404,
  },
]

export default routes
