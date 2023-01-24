import { removePost } from "../actionCreators/postActions";

export const deletePost = (postId) => {
    return async (dispatch, getstate) => {
        const res = await fetch(`http://localhost:5002/post/${postId}`, {
            method: 'DELETE',
        })

        const data = await res.json();

        if(data.acknowledged){
            dispatch(removePost(postId))
        }
    }


}