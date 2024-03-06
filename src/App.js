import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from  "./component/Layout/Layout"
import Home from  "./component/Home/Home"
import Cart from "./component/Cart/Cart"
import Login from "./component/Login/Login"
import Signup from "./component/Signup/Signup"
import Brands from "./component/Brands/Brands"
import Notfound from "./component/Notfound/Notfound"
import Category from "./component/Category/Category"
import Products from "./component/Products/Products"
import TokenContext from "./component/Context/tokenContext"
import PtotectedRout from './component/PtotectedRout/PtotectedRout';
import Details from './component/Details/Details';
import CartContextProvider from './component/Context/Cartcontext';
import { ToastContainer, toast } from 'react-toastify';







const router=createBrowserRouter([{
  path:"",element:<Layout/>,children:[
   {path:"",element:<PtotectedRout><Home/></PtotectedRout>},
   {path:"home",element:<PtotectedRout><Home/></PtotectedRout>},
   {path:"products",element:<PtotectedRout><Products/></PtotectedRout> },
   {path:"login",element: <Login/>},
   {path:"signup",element:<Signup/>},
   {path:"cart",element:<PtotectedRout><Cart/></PtotectedRout> },
   {path:"brands",element:<PtotectedRout> <Brands/></PtotectedRout>},
   {path:"details/:id",element:<PtotectedRout> <Details/></PtotectedRout>},
   {path:"*",element:<Notfound/>},
   {path:"category",element: <PtotectedRout><Category/></PtotectedRout> },
  ]
}])

function App() {
  return (
      <CartContextProvider>
        <TokenContext>
   <RouterProvider router={router}/>
   <ToastContainer/>
   </TokenContext>
   </CartContextProvider>
  
  
  
  );
}

export default App;
