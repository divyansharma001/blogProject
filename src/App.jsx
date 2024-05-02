import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import MainPage from "./pages/mainPage/MainPage";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/posts/"); 
  return (
    <>
      <div className="lg:grid lg:grid-cols-12">
        <div className="lg:col-span-2"><Sidebar/></div>
        <div className="lg:col-span-10">
          {!hideNavbar && <Navbar/>}
          <Outlet/>
        </div>
      </div>
    </>
  );
}

export default App;
