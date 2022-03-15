import { useEffect, useLayoutEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addPost } from "store/actions/postActions";
import "./CreatePost.scss";

const CreatePost = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("isLoggedIn") !== "true" && navigate("/login");
  }, []);

  const dateNow = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleSubmit = (e: any) => {
    let post = {
      title: titleRef.current!.value,
      url: urlRef.current!.value,
      summary: summaryRef.current!.value,
      content: contentRef.current!.value,
      status: "unsolved",
      createdAt: `${
        monthNames[dateNow.getMonth()]
      } ${dateNow.getDate()}, ${dateNow.getFullYear()}`,
    };
    e.preventDefault();

    if (
      titleRef.current!.value &&
      urlRef.current!.value &&
      summaryRef.current!.value &&
      contentRef.current!.value
    ) {
      dispatch(addPost(post));
      navigate("/");
    }
  };

  return (
    <div className="create-post container">
      <form action="" className="create-post__form">
        <div className="input-wrapper">
          <label htmlFor="inputTitle" className="label">
            title
          </label>
          <input
            type="text"
            id="inputTitle"
            className="create-post__input"
            ref={titleRef}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="inputUrl" className="label">
            image url
          </label>
          <input
            type="text"
            id="inputUrl"
            className="create-post__input"
            ref={urlRef}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="inputSummary" className="label">
            Summary
          </label>
          <input
            type="text"
            id="inputSummary"
            className="create-post__input"
            ref={summaryRef}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="inputContent" className="label">
            content
          </label>
          <textarea
            name=""
            id="inputContent"
            className="create-post__input create-post__input--textarea"
            ref={contentRef}
          ></textarea>
        </div>

        <a className="create-post__button" onClick={(e) => handleSubmit(e)}>
          Create Post
        </a>
      </form>
    </div>
  );
};

export default CreatePost;
