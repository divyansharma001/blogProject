import Sidebar from "./components/Sidebar/Sidebar"
import MainPage from "./pages/mainPage/MainPage"


function App() {
  
  return (
    <>
      <div className=" lg:grid lg:grid-cols-12">
    <div className=" lg:col-span-2"><Sidebar/></div>
    <div className=" lg:col-span-10 "><MainPage/></div>
  </div>
    </> 
  )
}

export default App
