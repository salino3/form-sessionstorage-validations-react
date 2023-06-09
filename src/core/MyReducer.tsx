import { State, All_Actions } from "./interface";

export const MyReducer = (state: State, action: All_Actions) => {
  
    switch (action.type) {
      case "GET_POSTS":
        return {
          ...state,
          posts: action.payload,
        };
      case "CREATE_POST":
        return {
          ...state,
          posts: [...state.posts, action.payload],
        };

      default:
        return state;
    }

  
    
}
