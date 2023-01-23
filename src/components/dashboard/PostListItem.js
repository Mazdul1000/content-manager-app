import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import loadPostsData from "../../redux/thunk/fetchPosts";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const PostListItem = ({ post }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostsData());
  }, []);

  const { avatar, title, thumbnail, created_timestamp, author } = post || {};
  return (
    <div className="flex w-full bg-gray-200 py-5 px-2 rounded relative">
      <div className="rounded">
        <img className="h-44 w-72 rounded" src={thumbnail} alt="" />
      </div>
      <div className="flex flex-col justify-between w-full pr-10 pl-5 py-3">
        <div className="flex w-full ">
          <h3 className="text-2xl font-semibold w-2/3">{title}</h3>
          <div className="flex justify-end absolute right-0 top-0 p-3 space-x-3">
            <button className="text-xl bg-indigo-700 text-white px-2 py-2 rounded-md">
              <FaEdit />
            </button>
            <button className="text-xl bg-indigo-700 text-white px-2 py-2 rounded-md">
              <RiDeleteBin6Line />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img className="h-10 w-10" src={avatar} alt="" />
            <p>{author}</p>
          </div>
          <div>
            <p>{moment(created_timestamp).fromNow()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostListItem;
