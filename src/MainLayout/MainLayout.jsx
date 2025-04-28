import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navber from "../components/shared/Navber/Navber";

const MainLayout = () => {

  const location = useLocation()

  const isHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')

  return (
    <div>
      <header>
        {isHeaderFooter || <Navber></Navber>}
      </header>
     <div className="max-w-7xl mx-auto">
     <div className="min-h-[calc(100vh-285px)]">
        <Outlet></Outlet>
      </div>
      {isHeaderFooter || <Footer></Footer>}
    </div>
     </div>

  );
};

export default MainLayout;
