import { toggleSort } from "../actionCreators/filterActions";
import { loadPosts } from "../actionCreators/postActions";
import { TOGGLE_SORT } from "../actionTypes/actionTypes";

export const sortPosts = (store) => (next) => (action) => {
    const state = store.getState();
    const {dispatch} = store;
    const {posts} = state.post;
    
   /*  const sortlist = posts.sort((a, b) => (b.created_timestamp < a.created_timestamp) ? -1 : ((b.created_timestamp > a.created_timestamp) ? 1 : 0));
    console.log(sortlist) */


    if(action.type === TOGGLE_SORT){
        let sortedList;
        if(action.payload === 'sortByFirst'){
            console.log("I am in sort by first")
            sortedList = posts.sort((a, b) => {
                return (b.created_timestamp < a.created_timestamp) ? -1 : ((b.created_timestamp > a.created_timestamp) ? 1 : 0);
            })

            console.log("sorted",sortedList)
            dispatch(loadPosts(sortedList)); 
            return next(action)
        }

        if(action.payload === 'sortByLast'){
            console.log("posts", posts)
            sortedList = posts.sort((a, b) => {
                return (b.created_timestamp < a.created_timestamp) ? -1 : ((b.created_timestamp > a.created_timestamp) ? 1 : 0);
            })

            console.log("sorted",sortedList)
            dispatch(loadPosts(sortedList)); 
            return next(action)
        }
    }

    return next(action)
}