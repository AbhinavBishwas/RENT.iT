import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import About from "../components/About";
import Shop from "../shop/Shop";
import Blog from "../components/Blog";
import SingleBook from "../components/SingleBook";
import Dashboard from "../dashboard/Dashboard";
import DashboardLay from "../dashboard/DashboardLay";
import Upload1 from "../dashboard/Upload1";
import Upload2 from "../dashboard/Upload2";
import Manage from "../dashboard/Manage";
import Edit from "../dashboard/Edit";
import Manage2 from "../dashboard/Manage2";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/shop",
          element:<Shop/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/blog",
          element:<Blog/>
        },
        {
          path:"/book/:id",
          element:<SingleBook/>,
          loader:({params})=>fetch(`http://localhost:5000/book/${params.id}`)
        },

        {
          path:"/admin/dashboard",
          element:<DashboardLay/>,
          children:[
            {
              path:"/admin/dashboard",
              element:<Dashboard/>
            },
            {
              path:"/admin/dashboard/upload-book",
              element:<Upload1/>
            },
            {
              path:"/admin/dashboard/upload-product",
              element:<Upload2/>
            },
            {
              path:"/admin/dashboard/manage-book",
              element:<Manage/>
            },
            {
              path:"/admin/dashboard/manage-product",
              element:<Manage2/>
            },
            {
              path:"/admin/dashboard/edit/:id",
              element:<Edit/>,
              loader:({params})=>fetch(`http://localhost:5000/book/${params.id}`)
            }
            
          ]
        }
        
      ]
    },
  ]);
  export default router;