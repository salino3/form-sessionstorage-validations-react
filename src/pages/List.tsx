import React from 'react';
import { GlobalData, MyState, Post } from '../core';
import { Link } from 'react-router-dom';


export const List: React.FC = () => {

     const { state } = React.useContext<MyState>(GlobalData);
     const { posts } = state;

     console.log(state);

  return (
    <div>
      <Link to={"/"}>Go Home</Link>
      {posts?.map((post: Post) => (
        <div key={post?.id}>
          <p>{post?.id}</p>
          <p>{post?.email}</p>
          <img src={`${post?.image}`} alt="photo.." />
          {/* {post?.image && <img src={URL.createObjectURL(post.image)} alt="" />} */}

          <hr />
        </div>
      ))}
    </div>
  );
}
