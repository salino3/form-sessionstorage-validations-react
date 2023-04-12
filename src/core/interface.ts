export type All_Actions = GET_POSTS | CREATE_POST;


interface GET_POSTS {
  type: "GET_POSTS";
  payload: Post[];
}

interface CREATE_POST {
  type: "CREATE_POST",
  payload: Post
}

//
export interface Post {
    
     id: number | null,
     name: string,
     email: string,
     date: string;
     image: string | File | null;
     years: number | null;
     terms: boolean;
}

export interface State {
  posts: Post[];
}


export interface MyState {
  dispatch: React.Dispatch<All_Actions>;
  state: State;
  getData: () => void;
  createPost: (post: Post) => void;
};