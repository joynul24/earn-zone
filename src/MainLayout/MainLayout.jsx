import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navber from "../components/shared/Navber";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Navber></Navber>
      </header>
     <div className="max-w-7xl mx-auto">
     <div className="min-h-[calc(100vh-285px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
     </div>
  );
};

export default MainLayout;
