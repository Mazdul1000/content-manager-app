import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import blog1 from '../../assets/images/blog1.jpg'
import PostGridItem from '../../components/main/PostGridItem';
import { decrease, increase } from '../../redux/actionCreators/counterActions';
import loadPostsData from '../../redux/thunk/fetchPosts';

const Home = () => {
    const dispatch = useDispatch()
    const {posts} = useSelector( (state) => state.post)
    console.log(posts)

    useEffect(() => {
        dispatch(loadPostsData())
    },[])
    return (
     <div className='flex w-full  space-x-3'>
        <div className='grid grid-cols-12 gap-4 mx-auto px-5 lg:px-0 min-h-[300px] w-3/4 mt-24'>
     {
        posts.map((post) => <PostGridItem post={post} key={post._id} />)
     }
        </div>
        <div className='w-1/4 bg-gray-600'>
            <div className='flex w-full flex-wrap pr-10 space-x-3'>
                <button className='btn bg-indigo-700 px-3 py-2 text-white rounded font-semibold '>React</button>
                <button className='btn bg-indigo-700 px-3 py-2 text-white rounded font-semibold '>Angular</button>
                <button className='btn bg-indigo-700 px-3 py-2 text-white rounded font-semibold '>OOP</button>
                <button className='btn bg-indigo-700 px-3 py-2 text-white rounded font-semibold '>class</button>
                <button className='btn bg-indigo-700 px-3 py-2 text-white rounded font-semibold '>Object</button>
                <button className='btn bg-indigo-700 px-3 py-2 text-white rounded font-semibold '>Redux</button>
                <button className='btn bg-indigo-700 px-3 py-2 text-white rounded font-semibold '>Tailwind</button>

            </div>
        </div>

     </div>
    );
};

export default Home;

