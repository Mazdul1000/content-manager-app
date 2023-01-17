import { TOGGLE_KEYWORD } from "../actionTypes/actionTypes"

export const toggle_keyword = (payload) => {

    return {
        type: TOGGLE_KEYWORD,
        payload: payload
    }
}