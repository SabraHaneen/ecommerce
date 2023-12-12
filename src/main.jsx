import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import { UserContextProvider } from './context/UserContext.jsx'
import { CartContextProvider } from './context/CartContext.jsx'
  const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(

    <>
    <UserContextProvider>
    <CartContextProvider>

    <QueryClientProvider client={queryClient}>
 <ToastContainer />
<App />
    </QueryClientProvider>
    </CartContextProvider>

    </UserContextProvider>
 


    </>

)
