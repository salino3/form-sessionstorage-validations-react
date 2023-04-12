import React from "react";
import { GlobalData, MyReducer, Post } from ".";
import { posts } from "../api/FakeApi";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MyProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(MyReducer, { posts: [] });

  let oldPosts: Post[] = JSON.parse(sessionStorage.getItem("posts") || "[]");

    const getData = React.useCallback(() => {

      
      dispatch({
        type: "GET_POSTS",
        payload: oldPosts[0]?.id ? oldPosts : posts,
      });
      // sessionStorage.setItem("posts", JSON.stringify(posts));
    }, []);

  React.useEffect(() => {
    getData();
  }, []);

  const createPost = React.useCallback((post: Post) => {
    dispatch({
      type: "CREATE_POST",
      payload: post,
    });
  }, []);

  // const myState: MyState = { state, dispatch, getData, createPost };

  return (
    <GlobalData.Provider value={{ state, dispatch, getData, createPost }}>
      {children}
    </GlobalData.Provider>
  );
};
