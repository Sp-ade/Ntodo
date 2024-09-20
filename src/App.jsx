import React from "react"
import ReactDOM from "react-dom";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import PageNotFound from "./Pages/PageNotFound";
import BinPage from "./Pages/BinPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element= {<Home/>} />
      <Route path="*" element= {<PageNotFound/>} />
    </Route>)
  )
  return ( <RouterProvider router={router}/>
      )

}

export default App
