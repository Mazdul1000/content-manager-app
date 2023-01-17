import { LOAD_POSTS } from "../actionTypes/actionTypes"

export const loadPosts = (payload) => {
    return {
        type: LOAD_POSTS,
        payload: payload,
    }
}