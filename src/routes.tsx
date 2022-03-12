import Home from "pages/Home";
import PostDetail from "pages/PostDetail";

const routes = [
  {
    path: "/",
    name: "Home",
    page: <Home />,
  },
  {
    path: "/details",
    name: "postDetail",
    page: <PostDetail />,
  },
];

export default routes;
