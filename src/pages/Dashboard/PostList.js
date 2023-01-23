import React from 'react';
import { useSelector } from 'react-redux';
import PostListItem from '../../components/dashboard/PostListItem';

const PostList = () => {
    const {posts} = useSelector((state) => state.post);
    return (
        <div className='flex flex-col space-y-12 p-3'>
        {
            posts.map((post) => <PostListItem key={post._id} post={post} />) 
        }
        </div>
    );
};

export default PostList;