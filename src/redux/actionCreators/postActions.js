import { ADD_POST, ADD_TO_HISTORY, EDIT_POST, LOAD_POSTS, REMOVE_POST } from "../actionTypes/actionTypes"

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

export const removePost = (payload) => {
    return {
        type: REMOVE_POST,
        payload: payload,
    }
}

export const editPost = (payload) => {
    return {
        type: EDIT_POST,
        payload: payload,
    }
}

export const addToHistory = (payload) => {
    return {
        type: ADD_TO_HISTORY,
        payload: payload,
    }
}