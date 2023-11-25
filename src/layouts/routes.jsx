import { createBrowserRouter } from 'react-router-dom'

import Categories from "./../componentes/web/categories/Categories.jsx";
import Home from "./../componentes/web/home/Home.jsx";
import CategoriesDashBoard from "./../componentes/dashboard/categories/Categories.jsx";
import HomeDashboard from "./../componentes/dashboard/home/Home.jsx";
import Dashboardlayout from "./Dashboardlayout.jsx";
import Layout from "./Layout.jsx";
import Register from '../componentes/web/register/Register.jsx';


export const router= createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
path:"register",
element:<Register/>
        },
        {
          path:"home",
      element:<Home/>,
        },
        {
          path:"categories",
          element:<Categories/>
        },
        {
          path:'*',
          element: <h2>404 Web page not found</h2>
        },
      ]
    },
   
    {
      path:'dashboard',
      element:<Dashboardlayout/>,
      children:[
        {
          path:'home',
          element:<HomeDashboard/>
        },
        {
          path:'categories',
          element:<CategoriesDashBoard/>
        },
        {
          path:'*',
          element: <h2>404 dashboard page not found</h2>
        },
  
      ]
    }
  
  ])