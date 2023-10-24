import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Orders from './components/Orders/Orders.jsx';
import Login from './components/Login/Login.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import productLoader from './Loaders/productLoader.js';
import cartProductLoader from './Loaders/cartProductLoader.js';
import CheckOut from './components/CheckOut/CheckOut.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:'/',
        element:<Home/>,
        loader:productLoader
      },
      {
        path:'/orders',
        element:<PrivateRoutes><Orders /></PrivateRoutes>,
        loader:cartProductLoader
      },
      {
        path:'/login',
        element:<Login />
      },
      {
        path:'/inventory',
        element:<Inventory />
      },
      {
        path:'/signUp',
        element:<SignUp />
      },
      {
        path:'/checkout',
        element:<CheckOut />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
       <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
