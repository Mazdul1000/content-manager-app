import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import blog1 from '../../assets/images/blog1.jpg'
import PostGridItem from '../../components/main/PostGridItem';
import { toggle_keyword } from '../../redux/actionCreators/filterActions';
import loadPostsData from '../../redux/thunk/fetchPosts';

const Home = () => {
    const dispatch = useDispatch()
    const {posts} = useSelector( (state) => state.post);
    const {tags} = useSelector((state) => state.filter.filters)
  
console.log(tags)
    const keywords = [
        {
            "id": 1,
            "title": "javascript"
        },
        {
            "id": 2,
            "title": "react"
        },
        {
            "id": 3,
            "title": "tips"
        },
        {
            "id": 4,
            "title": "vscode"
        },
        {
            "id": 5,
            "title": "tailwind"
        },
        {
            "id": 6,
            "title": "css"
        },
        {
            "id": 7,
            "title": "debounce"
        },
        {
            "id": 8,
            "title": "sass"
        },
        {
            "id": 9,
            "title": "ui"
        },
        {
            "id": 10,
            "title": "router"
        }
    ]

    useEffect(() => {
        dispatch(loadPostsData())
    },[])

    let content;

    if(posts.length){
        content = posts.map((post) => <PostGridItem post={post} key={post._id} />)
    }

    if(posts.length && tags.length){
        content = posts
        .filter((post) => {
            if(tags.length){
            
                return tags.some((item) => post.tags.includes(item))
            }else{
                return post;
            }
        })
        .map((post) => <PostGridItem post={post} key={post._id} />)
    }
    return (
     <div className='flex w-full  space-x-3'>
        <div className='grid grid-cols-12 gap-4 mx-auto px-5 lg:px-0 min-h-[300px] w-3/4 mt-24'>
     {content}
        </div>
        <div className='w-1/4 bg-gray-600'>
            <div className='flex w-full flex-wrap pr-10 space-x-3'>
                {
                    keywords.map((tag) => <button className={`btn px-3 py-2 ${tags.includes(tag.title) ? 'bg-indigo-700 text-white' : 'bg-white text-indigo-800'}  rounded font-semibold`} key={tag.id} onClick={() => dispatch(toggle_keyword(tag.title))}>{tag.title}</button>)
                    
                }
                <button className={`btn px-3 py-2 ${tags.includes('javascript') ? 'bg-indigo-700 text-white' : 'bg-white text-indigo-800'}  rounded font-semibold`} onClick={() => dispatch(toggle_keyword('javascript'))}>test</button>
            </div>
        </div>

     </div>
    );
};

export default Home;

