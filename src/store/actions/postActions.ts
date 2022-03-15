import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";

import { IPost } from "types/postTypes";
import { db } from "../../firebase";

export const addPost = (post: IPost) => {
  return (dispatch: any) => {
    dispatch({ type: "ADD_POST_REQUEST" });

    try {
      addDoc(collection(db, "posts"), {
        title: post.title,
        url: post.url,
        content: post.content,
        summary: post.summary,
        status: post.status,
        created: post.createdAt,
        creator: post.creator,
      });

      dispatch({
        type: "ADD_POST_SUCCESS",
        payload: "Post başarıyla eklendi.",
      });
    } catch (error) {
      dispatch({
        type: "ADD_POST_FAILURE",
        error: error,
      });
    }
  };
};

export const getPosts = () => {
  return async (dispatch: any) => {
    dispatch({
      type: "GET_POSTS_REQUEST",
      isLoad: false,
    });

    try {
      let postsArray: IPost[] = [];

      const querySnapshot = await getDocs(collection(db, "posts"));
      querySnapshot.forEach((post) => {
        postsArray.push({
          title: post.data().title,
          url: post.data().url,
          content: post.data().content,
          summary: post.data().summary,
          status: post.data().status,
          createdAt: post.data().created,
          id: post.id,
          creator: post.data().creator,
        });
      });

      dispatch({
        type: "GET_POSTS_SUCCESS",
        payload: postsArray,
      });
    } catch (error) {
      dispatch({
        type: "GET_POSTS_FAILURE",
        error: error,
      });
    }
  };
};

export const getPostById = (id: any) => {
  return async (dispatch: any) => {
    dispatch({ type: "GET_POST_BY_ID_REQUEST" });
    try {
      const snapshot = await getDoc(doc(db, "posts", id));
      if (snapshot.exists()) {
        dispatch({ type: "GET_POST_BY_ID_SUCCESS", payload: snapshot.data() });
      }
    } catch (error) {
      dispatch({
        type: "GET_POST_BY_ID_FAILURE",
        error: "Aradığınız gönderi kaldırılmış olabilir.",
      });
    }
  };
};
