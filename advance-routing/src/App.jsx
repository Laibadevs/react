import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Route,Routes} from 'react-router-dom'
import About from "./Pages/About";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import NotFound from "./Pages/NotFound";
import Courses from "./Pages/Courses";
import CoursesDetials from "./Pages/CoursesDetials";
import Navigate from "./components/Navigate";


const App=()=>
{
  return(
    <div className="h-screen bg-black text-white">
      <Navbar/>
      <Navigate/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}/>
        //dynamic routing
        <Route path='/courses/:id' element={<CoursesDetials/>}/>  
        //nested routing
        <Route path='/product' element={<Product/>}>
        <Route path='men' element={<Men/>}/>
        <Route path='women' element={<Women/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
       </Routes>
      <Footer/>
    </div>
  )
}
export default App