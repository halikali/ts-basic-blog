import CreatePost from "pages/CreatePost/CreatePost";
import Home from "pages/Home";
import LoginCheck from "pages/LoginCheck";
import PostDetail from "pages/PostDetail/PostDetail";

const routes = [
  {
    path: "/details/:postId",
    name: "postDetail",
    page: <PostDetail />,
  },
  {
    path: "/create-post",
    name: "createPost",
    page: <CreatePost />,
  },
  {
    path: "/login",
    name: "login",
    page: <LoginCheck />,
  },
  {
    path: "/",
    name: "Home",
    page: <Home />,
  },
];

export default routes;
