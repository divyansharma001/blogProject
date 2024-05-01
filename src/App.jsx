import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import MainPage from "./pages/mainPage/MainPage"
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"



function App() {
  
  return (
  
    <>
    <div className=" lg:grid lg:grid-cols-12">
    <div className=" lg:col-span-2"><Sidebar/></div>
    <div className=" lg:col-span-10 ">
      <Navbar/>
      <Outlet/>
    </div>
  </div>
    </> 
  
  )
}

export default App
