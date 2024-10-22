import { FC, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../services";
import { useAuth } from "../context/auth";
import logo from "../assets/images/logo.png";

interface PhoneNumberSignupProps {
  setData: React.Dispatch<
    React.SetStateAction<{
      phone: string;
      isOtpSent: boolean;
    }>
  >;
}

const PhoneNumberSignup: FC<PhoneNumberSignupProps> = () => {
  const { signIn } = useAuth();
  const [phone, setPhone] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data.loginSuccessFlag === "Y") {
        signIn(data);
      }
    },
  });

  const _handlePhoneNumberChange = (value?: string) => {
    setPhone(value);
  };

  const _handleSentOTP = () => {
    if (!phone || !password) return;
    mutation.mutate({ phoneNumber: phone, secret: btoa(password) });
    // setData({ isOtpSent: true, phone })
  };

  return (
    <div className="flex flex-col items-start">
      <img className="w-24 h-24 m-auto" src={logo} />
      <h1 className="self-stretch text-center font-black text-3xl text-gray-800 mb-8">
        Sample Analysis
      </h1>
      <input
        placeholder="Phone number"
        value={phone}
        onChange={({ target: { value } }) => setPhone(value)}
        className="w-full bg-transparent border border-gray-300 text-gray-800 focus:ring-0 p-2 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        className="w-full bg-transparent border border-gray-300 text-gray-800 focus:ring-0 p-2 mt-3 rounded"
      />
      <div className="self-stretch flex mt-8 items-center justify-center">
        <button
          onClick={_handleSentOTP}
          type="button"
          disabled={mutation.isPending}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none w-40"
        >
          Login
        </button>
      </div>
      {mutation?.data?.loginSuccessFlag === "N" ? <p className="text-red-500 text-xs mt-3">{mutation.data.errorMsg}</p>:null}
    </div>
  );
};

export default PhoneNumberSignup;
