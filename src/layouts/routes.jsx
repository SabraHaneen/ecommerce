import { createBrowserRouter } from 'react-router-dom'

import Categories from "./../componentes/web/categories/Categories.jsx";
import Home from "./../componentes/web/home/Home.jsx";
import CategoriesDashBoard from "./../componentes/dashboard/categories/Categories.jsx";
import HomeDashboard from "./../componentes/dashboard/home/Home.jsx";
import Dashboardlayout from "./Dashboardlayout.jsx";
import Layout from "./Layout.jsx";
import Register from '../componentes/web/register/Register.jsx';
import Login from '../componentes/web/login/Login.jsx';
import CategoryDetails from '../componentes/web/categories/CategoryDetails.jsx';
import Product from '../componentes/web/product/Product.jsx';
import Cart from '../componentes/web/cart/Cart.jsx';
import ProtectedRoute from '../componentes/protectedRoute/ProtectedRoute.jsx';
import UserProfile from '../componentes/web/userProfile/UserProfile.jsx';
import SendCode from '../componentes/web/login/SendCode.jsx';
import ResetPassword from '../componentes/web/login/ResetPassword.jsx';
import UserContact from '../componentes/web/userProfile/UserContact.jsx';
import UserInfo from '../componentes/web/userProfile/UserInfo.jsx';
import Orders from '../componentes/web/orders/Orders.jsx';
import ShowOrder from '../componentes/web/orders/ShowOrder.jsx';
import ShowProduct from '../componentes/web/product/ShowProduct.jsx';
import Search from '../componentes/web/search/Search.jsx';


export   const router= createBrowserRouter([
  {
    path:"/",
    element:<Layout  />,
    children:[
      {
path:"register",
element:<Register/>
      },
      {
          path:"login",
          element:<Login />
                  },
                  {
                  path:"search",
                  element:<Search />
                          },
      {
index:true,
    element:<Home/>,
      },
      {
        path:"categories",
        element:<Categories/>
      },
      {
        path:'categoriesDetails/:categoryId',
        element:<CategoryDetails/>
                },
                {
                  path:'product/:productId',
                  element:<Product/>
                          },
                          {
                            path:'userProfile',
                            element:
                            <ProtectedRoute>
                            <UserProfile/>
                            </ProtectedRoute>,
                            children:[
                              {
                                index:true,
                            //    path:'info',
                                element:
                                <UserInfo/>
                              },
                              {
                                path:'contact',
                                element:
                                <UserContact/>
                              },
                              {
                                path:'myorder',
                                element:<ShowOrder/>
                                     },

                            ]
                                    },
                                    {
path:'showproduct',
element:<ShowProduct/>
                                    },
                                    {
                                      path:'sendcode',
                                      element:<SendCode/>
                                              },
                                              {
                                                path:'resetpass',
                                                element:<ResetPassword/>
                                                        },

                          {
                                                 path:'cart',
                                                  element:<ProtectedRoute><Cart/></ProtectedRoute>
                          },
                          {
                            path:'orders',
                             element:<Orders/>
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
