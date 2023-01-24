import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToHistory } from "../../redux/actionCreators/postActions";



const Post = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {

    fetch(`https://content-manager-server-d6rkg8fj2-mazdul1000.vercel.app/post/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));

  }, []);

  if(post){
    dispatch(addToHistory(post))
  }

  const {
    created_timestamp,
    title,
    thumbnail,
    description,
    author,
    avatar,
    tags,
  } = post || {};
  const date = new Date(created_timestamp);
  return (
    <div className="flex flex-col space-y-12 w-full min-h-[100vh-80px] py-10 px-48">
      <div className="flex flex-col space-x-1">
        <p className="pl-1">{date.toDateString()}</p>
        <h1 className="text-2xl lg:text-5xl font-semibold text-gray-800">{title}</h1>
      </div>

    <div className="flex flex-col space-y-5">
    <div className="flex items-center space-x-2">
        <img src={avatar} alt="user_avatar" className="rounded h-16 w-16" />
        <p className="font-semibold">{author}</p>
      </div>

      <div>
        <img className="w-100 h-100" src={thumbnail} alt="post_thumbnail" />
      </div>
    </div>

      <div>
        <p className="text-2xl text-gray-800">{description}</p>
      </div>
    </div>
  );
};

export default Post;
