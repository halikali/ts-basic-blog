import Home from "pages/Home";
import PostDetail from "pages/PostDetail";

const routes = [
  {
    path: "/details",
    name: "postDetail",
    page: <PostDetail />,
  },
  {
    path: "/",
    name: "Home",
    page: <Home />,
  },
];

export default routes;
