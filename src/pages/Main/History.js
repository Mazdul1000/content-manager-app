import React from 'react';
import { useSelector } from 'react-redux';
import PostListItem from '../../components/dashboard/PostListItem';

const History = () => {
    const {readingHistory:posts} = useSelector((state) => state.post)
    return (
       <>
       <div>
        <h1 className='text-2xl text-center pt-20'>History</h1>
       </div>
        <div className='flex flex-col space-y-12 px-10 pt-10'>
        {
            posts.reverse().map((post) => <PostListItem key={post._id} post={post} />) 
        }
        </div>
       </>
    );
};

export default History;