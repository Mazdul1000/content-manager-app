import Dashboard from "../layout/Dashboard/Dashboard";
import AddPost from "../pages/Dashboard/AddPost";
import EditPost from "../pages/Dashboard/EditPost";
import PostList from "../pages/Dashboard/PostList";
import Home from "../pages/Main/Home";
import Post from "../pages/Main/Post";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main/Main");
const { default: History } = require("../pages/Main/History");

 const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/history',
                element: <History />
            },
            {
                path: '/post/:postId',
                element: <Post />
            }
        ]

    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'add-post',
                element: <AddPost />
            },
            {
                path:'/dashboard',
                element: <PostList />
            },
            {
                path: 'edit-post/:postId',
                element: <EditPost />
            }
        ]
    }
])

export default routes;