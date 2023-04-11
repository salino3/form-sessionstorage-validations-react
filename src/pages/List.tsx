import React from 'react';
import { GlobalData, MyState, Post } from '../core';


export const List: React.FC = () => {

     const { state } = React.useContext<MyState>(GlobalData);
     const { posts } = state;

     console.log(state);

  return (
    <div>
      {posts?.map((post: Post) => (
        <p key={post?.id}>{post?.email}</p>
      ))}
    </div>
  );
}
