import Card from "components/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "store/actions/postActions";
import { IPost } from "types/postTypes";
import { IRootState } from "types/reducerTypes";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state: IRootState) => state.allPosts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="container">
      {posts &&
        posts.map((post: IPost) => (
          <Card
            createdAt={post.createdAt}
            summary={post.summary}
            key={post.id}
            title={post.title}
            url={post.url}
            id={post.id as string}
          />
        ))}
    </div>
  );
};

export default Home;
