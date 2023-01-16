import Dashboard from "../layout/Dashboard/Dashboard";
import AddPost from "../pages/Dashboard/AddPost";
import Home from "../pages/Main/Home";

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
            }
        ]
    }
])

export default routes;