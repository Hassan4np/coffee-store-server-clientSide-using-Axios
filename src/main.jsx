import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AddCoffees from './Pages/AddCoffees.jsx';
import UpdateCoffees from './Pages/UpdateCoffees.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('http://localhost:5000/coffees')
  },
  {
    path:"/coffees",
    element:<AddCoffees></AddCoffees>
  },
  {
    path:"/updatecoffees/:id",
    element:<UpdateCoffees></UpdateCoffees>,
    loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`)
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

