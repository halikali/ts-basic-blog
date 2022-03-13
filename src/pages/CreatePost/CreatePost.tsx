import "./CreatePost.scss";

const CreatePost = () => {
  return (
    <div className="create-post container">
      <form action="" className="create-post__form">
        <div className="input-wrapper">
          <label htmlFor="inputTitle" className="label">
            title
          </label>
          <input type="text" id="inputTitle" className="create-post__input" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="inputUrl" className="label">
            image url
          </label>
          <input type="text" id="inputUrl" className="create-post__input" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="inputSummary" className="label">
            Summary
          </label>
          <input type="text" id="inputSummary" className="create-post__input" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="inputContent" className="label">
            content
          </label>
          <textarea
            name=""
            id="inputContent"
            className="create-post__input create-post__input--textarea"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
