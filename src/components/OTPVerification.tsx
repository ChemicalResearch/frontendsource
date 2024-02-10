import OtpInput from 'react-otp-input';
import { FC, useEffect, useState } from 'react';

const NUM_INPUTS = 4;

const OTPVerification: FC<{ phone: string }> = ({ phone }) => {
    const [otp, setOtp] = useState('');
    
    const checkOTP = (otp: string) => {
        alert(otp);
    }

    const resendOTP = () => {
        alert("Resend Otp")
    }

    useEffect(() => {
        if(otp.length === NUM_INPUTS) {
            checkOTP(otp);
        }
    },[otp, checkOTP])

    return (
        <div className="flex flex-col items-center">
            <h1 className="font-black text-lg text-gray-800 mb-4">OTP Verification</h1>
            <p className="font-normal text-base text-gray-800 mb-2">Enter the OTP you received at</p>
            <p className="font-bold text-base text-gray-800 mb-8">{phone}</p>
            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={NUM_INPUTS}
                renderInput={(props) => <input {...props} />}
                inputStyle="otp-input"
                renderSeparator={<span className="w-4" />}
            />
            <button onClick={resendOTP} className="mt-8">Resend OTP</button>
        </div>
    )
}

export default OTPVerification;