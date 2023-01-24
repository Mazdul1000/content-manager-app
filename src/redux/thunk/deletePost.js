import { removePost } from "../actionCreators/postActions";

export const deletePost = (postId) => {
    return async (dispatch, getstate) => {
        const res = await fetch(`https://content-manager-server-d6rkg8fj2-mazdul1000.vercel.app/post/${postId}`, {
            method: 'DELETE',
        })

        const data = await res.json();

        if(data.acknowledged){
            dispatch(removePost(postId))
        }
    }


}