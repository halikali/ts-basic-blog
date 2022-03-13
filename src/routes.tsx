import CreatePost from "pages/CreatePost/CreatePost";
import Home from "pages/Home";
import PostDetail from "pages/PostDetail/PostDetail";

const routes = [
  {
    path: "/details",
    name: "postDetail",
    page: <PostDetail />,
  },
  {
    path: "/create-post",
    name: "createPost",
    page: <CreatePost />,
  },
  {
    path: "/",
    name: "Home",
    page: <Home />,
  },
];

export default routes;
