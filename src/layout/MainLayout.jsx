import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useAuth from "../hooks/UseAuth";
import Authentication from "../pages/Authentication/Authentication";
import toast, { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  const { showLogin } = useAuth();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar always on top */}
      <Navbar />
      <Toaster />
      {
        showLogin && < Authentication />
      }
      {/* Main content area should grow to fill space */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer always at the bottom */}
      <Footer />
    </div>
  );
};

export default MainLayout;
