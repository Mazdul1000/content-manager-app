
import { ADD_POST, ADD_TO_HISTORY, LOAD_POSTS } from "../actionTypes/actionTypes";


const initialState = {
    posts: [],
    readingHistory: []
}

export const  postReducer = (state=initialState, action) => {

    const doesExistsInHistory = state.readingHistory.find((post) => post._id === action.payload._id);

    switch (action.type) {
        
        case LOAD_POSTS:
            return {
                ...state,
                posts: action.payload
            }

        case ADD_POST: 
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }

        case ADD_TO_HISTORY:
            if(!doesExistsInHistory){
                return {
                    ...state,
                    readingHistory: [...state.readingHistory, action.payload]
                }
            }else{
                return state
            }

            
            
    
        default:
            return state;
    }
}