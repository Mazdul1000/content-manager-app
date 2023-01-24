import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./redux/store";
import loadPostsData from "./redux/thunk/fetchPosts";
import routes from "./routes/routes";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPostsData())
},[])

  return (
    <div className="App">
       <RouterProvider router={routes}/>   
    </div>
  );
}

export default App;
