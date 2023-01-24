import { loadPosts } from "../actionCreators/postActions";

const loadPostsData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://content-manager-server-d6rkg8fj2-mazdul1000.vercel.app/posts");

        const data = await res.json();
        if(data.data.length){
            dispatch(loadPosts(data.data))
        }
    }
}

export default loadPostsData;