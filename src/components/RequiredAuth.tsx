import { FC, ReactNode } from "react";
import { useAuth } from "../context/auth"
import { Navigate } from "react-router-dom";

const RequiredAuth: FC<{ children: ReactNode }> = ({ children }) => {
    const { isAuth } = useAuth();
    if (isAuth) {
        return children;
    }
    return <Navigate to="/login" />
}

export default RequiredAuth;