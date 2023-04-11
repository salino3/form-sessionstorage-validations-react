import React from 'react';
import { GlobalData, MyState, Post } from '../core';
import './componentsStyles.scss'


export const Form: React.FC = () => {

  const { state, createPost } = React.useContext<MyState>(GlobalData);
  const {posts} = state;

  let Id: number = posts.length;
  ++Id

  const [newPost, setNewPost] = React.useState<Post>({
    id: Id,
    name: "",
    email: "",
    date: "",
    image: null,
    years: null,
    terms: false,
  });

  const handleChange = (fields: keyof Post) => (event: any): void => {
    
     const {checked, value} = event.target;
     let fieldValue = fields === "terms" ? checked : value;

    setNewPost({ ...newPost, [fields]: fieldValue });
  } 

  const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (
    event: React.FormEvent<HTMLFormElement>) => {
     event.preventDefault();

    console.log(newPost);
    createPost(newPost);
  };

  React.useEffect(() => {
    sessionStorage.setItem("posts", JSON.stringify(state.posts));
  }, [state.posts]);


  console.log("lenght", posts);
  return (
    <form id="myForm" onSubmit={handleSubmit}>
      <h1>Create Post</h1>
      <label htmlFor="name">
        <b>Name: </b>
      </label>
      <input
        type="text"
        onChange={handleChange("name")}
        id="name"
        placeholder="Name.."
        required
      />{" "}
      <br />
      <label htmlFor="email">
        <b>Email: </b>
      </label>
      <input
        type="email"
        onChange={handleChange("email")}
        id="email"
        placeholder="Email.."
        required
      />{" "}
      <br />
      <label htmlFor="date">
        <b>Date: </b>
      </label>
      <input type="date" onChange={handleChange("date")} id="date" required />{" "}
      <br />
      <label htmlFor="image">
        <b>Image: </b>
      </label>
      <input type="file" onChange={handleChange("image")} id="image" required />{" "}
      <br />
      <label htmlFor="years">
        <b>Age: </b>
      </label>
      <input
        type="number"
        id="years"
        onChange={handleChange("years")}
        placeholder="Age.."
        required
      />{" "}
      <br />
      <label htmlFor="terms">
        <b>Terms and Conditions </b>
      </label>{" "}
      <br />
      <input
        type="checkbox"
        id="terms"
        required
        onChange={handleChange("terms")}
      />{" "}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
