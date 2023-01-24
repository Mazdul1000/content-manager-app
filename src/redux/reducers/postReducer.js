
import { ADD_POST, ADD_TO_HISTORY, EDIT_POST, LOAD_POSTS, REMOVE_POST } from "../actionTypes/actionTypes";


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

        case EDIT_POST: 
            const newList = state.posts.filter((post) => post._id !== action.payload._id);
            return {
                ...state,
                posts: [...newList, action.payload]
            }    

        case REMOVE_POST: 
            return {
                ...state,
                posts: state.posts.filter((post) => post._id !== action.payload)
            }

        case ADD_TO_HISTORY:
            if(!doesExistsInHistory){
                return {
                    ...state,
                    readingHistory: [action.payload, ...state.readingHistory]
                }
            }else{
                const sortedList = state.readingHistory.filter((post) => post._id !== action.payload._id);

                return {
                    ...state,
                    readingHistory: [action.payload, ...sortedList]
                }
            }

            
            
    
        default:
            return state;
    }
}