import { editPost } from "../actionCreators/postActions";

export const editPostData = (postData) => {
    return async (dispatch) => {
        const {_id, data:dataset} = postData;
        const payload = {...dataset, _id};
        const res = await fetch(`http://localhost:5002/post/${_id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataset)
        })

        const data = await res.json();
        if(data.modifiedCount){
            dispatch(editPost(payload))
        }
    }
}