import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNewPost } from "../../redux/thunk/addPost";
import 'quill/dist/quill.snow.css';
import TextEditor from "../../components/addPost/TextEditor";

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

const AddPost = () => {
  const dispatch = useDispatch()
  const [tags, setTags] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const [description, setDescription] = useState('');


  const onSubmit = (data) => {
    const created_timestamp = new Date().toISOString();
    const dataset = {
      ...data,
      created_timestamp,
      likes: 0,
      unlikes: 0,
      tags,
      des: description

    }

    dispatch(addNewPost(dataset))
    console.log(dataset)
    reset();
    setTags([])
  };


  const handleTags = (tag) => {
    console.log('got the hit')
    if (!tags.includes(tag)) {
      return [...tags, tag]
    } else {
      return tags.filter((item) => item !== tag)
    }
  }

  return (
    <>
      <form
        className={"w-full p-10 flex flex-col space-y-5 mt-20 border"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl font-sans font-bold text-center text-indigo-800">Add new post</h1>
        <div className="w-full">
          <label htmlFor="title">Title</label>
          <input
            className="border w-full h-10 px-3"
            name="title"
            {...register("title", { required: true, minLength: 2 })}
          />
        </div>
        <div className="flex w-full space-x-9">
          <div className="w-full">
            <label htmlFor="author">Author:</label>
            <input
              className="border w-full h-10 px-3"
              name="author"
              {...register("author", { minLength: 2 })}
            />
          </div>
          <div className="w-full">
            <label htmlFor="avatar">Author image:</label>
            <input
              className="border w-full h-10 px-3"
              name="avatar"
              {...register("avatar", {})}
            />
          </div>

          <div className="w-full">
            <label htmlFor="thumbnail">Thumbnail</label>
            <input
              className="border w-full h-10 px-3"
              name="thumbnail"
              {...register("thumbnail", {})}
            />
          </div>
        </div>
       
       <div>
        <h3>Content:</h3>
         <TextEditor description={description} setDescription={setDescription} />
       </div>
       

        <div>
          <p>Add keyword</p>
          <div className="flex flex-wrap w-full justify-around bg-gray-300 space-x-3 py-2 px-3 cursor-pointer ">
            {
              keywords.map((tag) => <span className={`btn px-3 py-2 ${tags.includes(tag.title) ? 'bg-indigo-700 text-white' : 'bg-white text-indigo-800'}  rounded font-semibold`} key={tag.id} onClick={() => setTags(handleTags(tag.title))}>{tag.title}</span>)

            }
          </div>
        </div>

        <button
          className={` ${tags.length ? 'btn-submit' : 'btn-disabled'} text-white font-bold px-3 py-2`}
          type="submit"
          disabled={!tags.length}
        >
          Add Post
        </button>

      </form>
      

    </>
  );
};

export default AddPost;
