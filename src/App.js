import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Profile from "./Pages/profile/Profile";
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
import './style.scss'
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
//import { AuthContext } from "./context/authContext";
//import { QueryClient, QueryClientProvider } from "@tanstack/react-query";




function App() {
  const { darkMode } = useContext(DarkModeContext);

  //const queryClient = new QueryClient();

  const Layout = () => {
    return (
      //<QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar />
          <div style={{ display: "flex" }}>
            <LeftBar />
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            <RightBar />
          </div>
        </div>
     // </QueryClientProvider>
    );
  };

  const currentUser = true

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
      <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
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
