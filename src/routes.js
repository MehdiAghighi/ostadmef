import Index from "./pages/index"
import Blog from "./pages/blog/blog.component"
import Post from "./pages/post/post.component"
import Course from "./pages/course/course.component"
import Courses from "./pages/courses/courses.component"
import Video from "./pages/video/video.component"
import { QuizWrapper } from "./pages/quiz/quiz.component"
import Payment from "./pages/payment/payment.component"
import Logout from "./pages/logout/logout.component"
import Profile from "./pages/profile/profile.component"
import NotFound from "./pages/not-found/not-found.component"
import Story from "./pages/story/story.component"
import Family from "./pages/family/family.component"
import Terms from "./pages/terms/terms.componen"
import FAQ from "./pages/faq/faq.component"
import Rights from "./pages/rights/rights.component"
import Contact from "./pages/contact/contact.component"
import Teacher from "./pages/teacher/teacher.component"

const routes = [
  {
    path: "/",
    component: Index,
    exact: true,
    protected: false,
  },
  {
    path: "/blog",
    component: Blog,
    exact: true,
    protected: false,
  },
  {
    path: "/blog/:slug",
    component: Post,
    protected: false,
  },
  {
    path: "/courses",
    component: Courses,
    exact: true,
    protected: false,
  },
  {
    path: "/courses/:category",
    component: Courses,
    exact: true,
    protected: false,
  },
  {
    path: "/course/:slug",
    component: Course,
    protected: false,
  },
  {
    path: "/video/:slug",
    component: Video,
    protected: false,
  },
  {
    path: "/quiz/:slug",
    component: QuizWrapper,
    protected: true,
  },
  {
    path: "/teacher/:slug",
    component: Teacher,
    protected: false,
  },
  {
    path: "/payment",
    component: Payment,
    protected: true,
  },
  {
    path: "/logout",
    component: Logout,
    protected: true,
  },
  {
    path: "/profile",
    component: Profile,
    protected: true,
  },
  {
    path: "/story",
    component: Story,
    protected: false,
  },
  {
    path: "/family",
    component: Family,
    protected: false,
  },
  {
    path: "/terms",
    component: Terms,
    protected: false,
  },
  {
    path: "/faq",
    component: FAQ,
    protected: false,
  },
  {
    path: "/rights",
    component: Rights,
    protected: false,
  },
  {
    path: "/contact",
    component: Contact,
    protected: false,
  },
  {
    component: NotFound,
    protected: false,
    status: 404,
  },
]

export default routes
