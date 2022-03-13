import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { getPostById } from "store/actions/postActions";
import "./PostDetail.scss";

const PostDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const ID = params && params.postId;
  const { post } = useSelector((state: any) => state.singlePost);

  useEffect(() => {
    dispatch(getPostById(ID));
  }, [dispatch, ID]);

  return (
    <div className="post-detail">
      <img src={post.url} alt="" className="post-detail__image" />
      <p className="post-detail__title">{post.title}</p>
      <p className="post-detail__created post-detail__created--time">
        {post.created} by
        <span className="post-detail__created post-detail__created--author">
          {""} admin
        </span>
      </p>
      <div className="post-detail__content-wrapper">
        <p className="post-detail__content">{post.content}</p>
      </div>
    </div>
  );
};

export default PostDetail;
