import { useState } from "react";
import PhoneNumberSignup from "../components/PhoneNumberSignup";
import OTPVerification from "../components/OTPVerification";

const Login = () => {
    const [{ phone, isOtpSent }, setData] = useState<{ phone: string, isOtpSent: boolean }>({ phone: "", isOtpSent: false });

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="w-full max-w-md bg-white shadow rounded border border-gray-200 p-8">
                {isOtpSent ? <OTPVerification phone={phone} /> : <PhoneNumberSignup setData={setData} />}
            </div>
        </div>
    )
}

export default Login;