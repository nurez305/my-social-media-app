//import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
//import Profile from "./Pages/profile/Profile";
import Register from "./Pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import LeftBar from './components/leftBar/LeftBar'
import RightBar from './components/rightBar/RightBar'

const Layout = () => {
  return (
    <div>
       <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
            <Outlet />
          <RightBar />
        </div>
    </div>   
    
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
