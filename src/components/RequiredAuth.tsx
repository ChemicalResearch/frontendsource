import { FC, ReactNode } from "react";
import { useAuth } from "../context/auth"
import { Navigate } from "react-router-dom";

const RequiredAuth: FC<{ children: ReactNode }> = ({ children }) => {
    const { isAuth, isLoading } = useAuth();
    if(isLoading) return <p>Loading...</p>
    if (isAuth) {
        return children;
    }
    return <Navigate to="/login" />
}

export default RequiredAuth;