import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import MainBody from "../components/MainBody";

const MainLayout = () => {
    return (
        <>
            <Header />
            <SideMenu />
            <MainBody />
            <Outlet />
        </>
    )
}

export default MainLayout;