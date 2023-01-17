
import { LOAD_POSTS } from "../actionTypes/actionTypes";

const initialState = {
    posts: []
}

export const  postReducer = (state=initialState, action) => {
console.log(action.payload)
    switch (action.type) {
        
        case LOAD_POSTS:
            return {
                ...state,
                posts: action.payload
            }

            
            
    
        default:
            return state;
    }
}