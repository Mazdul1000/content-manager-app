import { TOGGLE_KEYWORD, TOGGLE_SORT } from "../actionTypes/actionTypes"

export const toggleKeyword = (payload) => {

    return {
        type: TOGGLE_KEYWORD,
        payload: payload
    }
}

export const toggleSort = (payload) => {
    return {
        type: TOGGLE_SORT,
        payload: payload,
    }
}