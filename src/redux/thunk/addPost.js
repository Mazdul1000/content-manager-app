import { addPost } from "../actionCreators/postActions";

export const addNewPost = (payload) => {
    return async (dispatch, getState) =>{
        const res = await fetch('http://localhost:5002/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        const data = await res.json();
        if(data.acknowledged){
            dispatch(addPost({...payload, _id: data.insertedId}))
        }
    }
}