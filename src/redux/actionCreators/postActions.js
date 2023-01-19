import { ADD_POST, ADD_TO_HISTORY, LOAD_POSTS } from "../actionTypes/actionTypes"

export const loadPosts = (payload) => {
    return {
        type: LOAD_POSTS,
        payload: payload,
    }
}

export const addPost = (payload) => {
    return {
        type: ADD_POST,
        payload: payload,
    }
}

export const addToHistory = (payload) => {
    return {
        type: ADD_TO_HISTORY,
        payload: payload,
    }
}