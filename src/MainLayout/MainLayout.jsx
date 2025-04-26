import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navber from "../components/shared/Navber";

const MainLayout = () => {
    return (
        <div>
            <header>
                <Navber></Navber>
            </header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;