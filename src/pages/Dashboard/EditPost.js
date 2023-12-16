import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editPostData } from '../../redux/thunk/editPost';

const EditPost = () => {
    const {postId} = useParams();
    const dispatch = useDispatch()
  /* const [tags, setTags] = useState([]); */
    const post = useSelector((state) => state.post.posts.find((post) => post._id === postId))

    const {title, author, avatar, thumbnail, likes, unlikes, description, created_timestamp, tags, _id, des} = post || {}
    const preDefaultValues = {
      title,
      author,
      avatar,
      thumbnail,
      likes,
      unlikes,
      tags,
      created_timestamp,
      des

    }

    const { register, handleSubmit, reset } = useForm({defaultValues: preDefaultValues});
    const onSubmit = (data) => {
      console.log(data)
      dispatch(editPostData({data, _id}))
    }

    return !post ? <div>Loading...</div> : (
        <>  
      <form
        className={"w-full p-10 flex flex-col space-y-5 mt-20 border"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl font-sans font-bold text-center text-indigo-800">Edit post</h1>
        <div className="w-full">
          <label htmlFor="title">Title</label>
          <input
            className="border w-full h-10 px-3"
            name="title"
            {...register("title", {  })}
          />
        </div>
        <div className="flex w-full space-x-9">
          <div className="w-full">
            <label htmlFor="author">Author:</label>
            <input
              className="border w-full h-10 px-3"
              name="author"
              {...register("author", { })}
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
              name= "thumbnail"
              {...register("thumbnail", {})}
            />
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="description">Content</label>
          <textarea
            rows={6}
            className="border w-full p-3"
            name="des"
            {...register("des", { min: 500 })}
          />
        </div>
      
      <div> 
        <p>Add keyword</p>
        {/* <div className="flex flex-wrap w-full justify-around bg-gray-300 space-x-3 py-2 px-3 cursor-pointer ">
               {
                    keywords.map((tag) => <span className={`btn px-3 py-2 ${tags.includes(tag.title) ? 'bg-indigo-700 text-white' : 'bg-white text-indigo-800'}  rounded font-semibold`} key={tag.id} onClick={() => setTags(handleTags(tag.title))}>{tag.title}</span> )
                    
                }
        </div> */}
        </div>

        <button
          className={`bg-indigo-700 text-white font-bold px-3 py-2`}
          type="submit"
        >
          Update Post
        </button>
        
      </form>
      
    </>
    )
};

export default EditPost;