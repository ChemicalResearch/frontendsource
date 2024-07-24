import { Outlet } from "react-router-dom";

const MainBody = () => {
    return (
        <div className="w-full pl-64 relative">
            <Outlet />
        </div>
    )
}

export default MainBody;