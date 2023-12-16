import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import loadPostsData from "./redux/thunk/fetchPosts";
import routes from "./routes/routes";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPostsData())
},[dispatch])

  return (
    <div className="App">
       <RouterProvider router={routes}/>   
    </div>
  );
}

export default App;
