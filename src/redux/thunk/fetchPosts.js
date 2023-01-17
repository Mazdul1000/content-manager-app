import { loadPosts } from "../actionCreators/postActions";

const loadPostsData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5002/posts");

        const data = await res.json();
     console.log(data)
        if(data.data.length){
            dispatch(loadPosts(data.data))
        }
    }
}

export default loadPostsData;