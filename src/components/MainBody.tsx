import { Outlet } from "react-router-dom";

const MainBody = () => {
    return (
        <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
            <Outlet />
        </div>
    )
}

export default MainBody;