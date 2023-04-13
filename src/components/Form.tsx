import React from 'react';
import { GlobalData, MyState, Post } from '../core';
import { useNavigate } from 'react-router-dom';
import './componentsStyles.scss'


export const Form: React.FC = () => {

  const { state, createPost } = React.useContext<MyState>(GlobalData);
  const {posts} = state;

  const [pageLoaded, setPageLoaded] = React.useState(false);

  const navigate = useNavigate();

    let Id: number | undefined = state?.posts.length || 0;

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
    setPageLoaded(true);

  };

  
  React.useLayoutEffect(() => {
    sessionStorage.setItem("posts", JSON.stringify(state.posts));
    if (pageLoaded) {
      navigate("/list");
    };
  }, [state.posts]);

  console.log(pageLoaded)


  console.log("lenght", posts);
  
  return (
    <form id="myForm" onSubmit={handleSubmit}>
      <h1 className="text-center m-2">Create Post</h1>
      <label className="text-center" htmlFor="name">
        <b>Name: </b>
      </label>
      <input
        type="text"
        onChange={handleChange("name")}
        id="name"
        placeholder="Name.."
        required
      />{" "}
      <label className="text-center" htmlFor="email">
        <b>Email: </b>
      </label>
      <input
        type="email"
        onChange={handleChange("email")}
        id="email"
        placeholder="Email.."
        required
      />{" "}
      <label className="text-center" htmlFor="date">
        <b>Date: </b>
      </label>
      <input type="date" onChange={handleChange("date")} id="date" required />{" "}
      <label className="text-center" htmlFor="image">
        <b>Image: </b>
      </label>
      <textarea
        name="image"
        id="image"
        onChange={handleChange("image")}
        placeholder="Your Image.."
        required
      ></textarea>
      {/* <input 
      type="file" 
      onChange={handleChange("image")}
       id="image" 
       required />{" "} */}
      <label className="text-center" htmlFor="years">
        <b>Age: </b>
      </label>
      <input
        type="number"
        id="years"
        onChange={handleChange("years")}
        placeholder="Age.."
        required
      />{" "}
      <div>
        <label className="mx-2" htmlFor="terms">
          <b>Terms and Conditions </b>
        </label>{" "}
        <input
          type="checkbox"
          id="terms"
          required
          onChange={handleChange("terms")}
        />{" "}
      </div>
      <br />
      <button className="btn btn-sm btn-warning text-white" type="submit">
        <b>Submit</b>
      </button>
    </form>
  );
}
