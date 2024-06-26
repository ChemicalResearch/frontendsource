import { useState } from "react";
import PhoneNumberSignup from "../components/PhoneNumberSignup";
import OTPVerification from "../components/OTPVerification";
import { useAuth } from "../context/auth";
import { Navigate } from "react-router-dom";
import image from "../assets/images/login-bg.jpg"

const Login = () => {
    const { isAuth } = useAuth();
    const [{ phone, isOtpSent }, setData] = useState<{ phone: string, isOtpSent: boolean }>({ phone: "", isOtpSent: false });
    if (isAuth)
        return <Navigate to="/" />
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-no-repeat bg-cover bg-fixed" style={{ backgroundImage:`url(${image})` }}>
            <div className="w-full max-w-md bg-white shadow rounded border border-gray-200 p-8">
                {isOtpSent ? <OTPVerification phone={phone} /> : <PhoneNumberSignup setData={setData} />}
            </div>
        </div>
    )
}

export default Login;