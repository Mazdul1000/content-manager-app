import React from 'react';
import styles from './post.module.css'
import 'react-quill/dist/quill.bubble.css'
import ReactQuill from 'react-quill';

const PostDescription = ({content}) => {
    return (
        <ReactQuill
   value={content}
   readOnly={true}
   theme={"bubble"}
/>
    );
};

export default PostDescription;