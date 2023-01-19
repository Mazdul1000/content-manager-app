import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import blog1 from '../../assets/images/blog1.jpg'
import PostGridItem from '../../components/main/PostGridItem';
import { toggleKeyword, toggleSort } from '../../redux/actionCreators/filterActions';
import loadPostsData from '../../redux/thunk/fetchPosts';

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

const Home = () => {
    const dispatch = useDispatch()
    const {posts} = useSelector( (state) => state.post);
    const {tags} = useSelector((state) => state.filter.filters);
    const {sort} = useSelector((state) => state.filter);

  
console.log()
  

    useEffect(() => {
        dispatch(loadPostsData())
    },[])

    let content;

    if(posts.length){
        content = posts
        .sort((a, b) => {
            return (b.created_timestamp < a.created_timestamp) ? -1 : ((b.created_timestamp > a.created_timestamp) ? 1 : 0);
        })
        .map((post) => <PostGridItem post={post} key={post._id} />)
    }

   if(posts.length && tags.length){
        content = posts
        .sort((a, b) => {
            return (b.created_timestamp < a.created_timestamp) ? -1 : ((b.created_timestamp > a.created_timestamp) ? 1 : 0);
        })
        .filter((post) => {
            if(tags.length){
                return tags.some((item) => post.tags.includes(item))
            }else{
                return post;
            }
        })
        .map((post) => <PostGridItem post={post} key={post._id} />)
    } 

    if(posts.length &&  sort === 'sortByFirst'){
        content = posts
        .sort((a, b) => {
            return (a.created_timestamp < b.created_timestamp) ? -1 : ((a.created_timestamp > b.created_timestamp) ? 1 : 0);
        })
        .filter((post) => {
            if(tags.length){
            
                return tags.some((item) => post.tags.includes(item))
            }else{
                return post;
            }
        })
        .map((post) => <PostGridItem post={post} key={post._id} />)
    }
    
    if(posts.length &&  sort === 'sortByLast'){
        content = posts
        .sort((a, b) => {
            return (b.created_timestamp < a.created_timestamp) ? -1 : ((b.created_timestamp > a.created_timestamp) ? 1 : 0);
        })
        .filter((post) => {
            if(tags.length){
            
                return tags.some((item) => post.tags.includes(item))
            }else{
                return post;
            }
        })
        .map((post) => <PostGridItem post={post} key={post._id} />)
    }
    if(posts.length && tags.length && sort === 'sortByFirst'){
        content = posts
        .sort((a, b) => {
            return (a.created_timestamp < b.created_timestamp) ? -1 : ((a.created_timestamp > b.created_timestamp) ? 1 : 0);
        })
        .filter((post) => {
            if(tags.length){
            
                return tags.some((item) => post.tags.includes(item))
            }else{
                return post;
            }
        })
        .map((post) => <PostGridItem post={post} key={post._id} />)
    }

    if(posts.length && tags.length && sort === 'sortByLast'){
        content = posts
        .sort((a, b) => {
            return (b.created_timestamp < a.created_timestamp) ? -1 : ((b.created_timestamp > a.created_timestamp) ? 1 : 0);
        })
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
            <div>
                <label htmlFor="sort">Sort</label>
                <select name="sort" id="" onChange={(e) => dispatch(toggleSort((e.target.value)))}>
                    <option value="sortByLast">Sort by Last upload</option>
                    <option value="sortByFirst">Sort by first upload</option>    
                </select>
            </div>

            <div className='flex w-full flex-wrap pr-10 space-x-3'>
                {
                    keywords.map((tag) => <button className={`btn px-3 py-2 ${tags.includes(tag.title) ? 'bg-indigo-700 text-white' : 'bg-white text-indigo-800'}  rounded font-semibold`} key={tag.id} onClick={() => dispatch(toggleKeyword(tag.title))}>{tag.title}</button>)
                    
                }
            </div>
        </div>

     </div>
    );
};

export default Home;

