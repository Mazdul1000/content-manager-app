import { TOGGLE_KEYWORD, TOGGLE_SORT } from "../actionTypes/actionTypes";

const initialState = {
    filters: {
        tags:[]
    },
    sort: "",
}

export const filterReducer = (state=initialState, action) => {
    switch (action.type) {
        case TOGGLE_KEYWORD:
            if(!state.filters.tags.includes(action.payload)){
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        tags: [...state.filters.tags, action.payload]
                    }
                }
            }else{
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        tags: state.filters.tags.filter((tag) => tag !== action.payload)
                    }
                }
            }

        case TOGGLE_SORT:
            return {
                ...state,
                sort: action.payload
            }
                          
        default:
            return state
    }
}