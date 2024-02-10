import PhoneInput from 'react-phone-number-input/input';
import { FC, useState } from 'react';

interface PhoneNumberSignupProps {
    setData: React.Dispatch<React.SetStateAction<{
        phone: string;
        isOtpSent: boolean;
    }>>
}

const PhoneNumberSignup: FC<PhoneNumberSignupProps> = ({ setData }) => {
    const [phone, setPhone] = useState<string | undefined>("");

    const _handlePhoneNumberChange = (value?: string) => {
        setPhone(value)
    }

    const _handleSentOTP = () => {
        if (!phone) return;
        setData({ isOtpSent: true, phone })
    }

    return (
        <div className="flex flex-col items-start">
            <h1 className="self-stretch text-center font-black text-3xl text-gray-800 mb-8">Sample Analysis</h1>
            <h1 className="font-black text-lg text-gray-800 mb-2">LOGIN</h1>
            <p className="font-normal text-base text-gray-800 mb-4">Enter your phone number to proceed</p>
            <PhoneInput
                country="IN"
                placeholder="Enter phone number"
                value={phone}
                onChange={_handlePhoneNumberChange}
                limitMaxLength
                className="w-full bg-transparent border border-gray-300 text-gray-800 focus:ring-0 p-2 rounded"
            />
            <div className="self-stretch flex mt-8 items-center justify-center">
                <button
                    onClick={_handleSentOTP}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none w-40"
                >Continue</button>
            </div>
        </div>
    )
}

export default PhoneNumberSignup;