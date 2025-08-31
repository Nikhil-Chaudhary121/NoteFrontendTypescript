import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";




export const useOtp = (email: string) => {
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("getOtp");
  const [isVerified, setIsVerified] = useState(false);
  const [otpVisible, setOtpVisible] = useState(false);

  const handleGetOtp = async () => {
    try {
      const res = await axios.post(`https://note-app-backend-6dlx.onrender.com/api/otp/sendotp`, { email });
      if (res.data.success) {
        toast.success("OTP sent to your email");
        setOtpVisible(true);
        setStep("verifyOtp");
      } else {
        toast.error(res.data.error || "Failed to send OTP");
      }
    } catch (err: any) {
      toast.error(err.response?.data?.error || "Error sending OTP");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const res = await axios.post(`https://note-app-backend-6dlx.onrender.com/api/otp/verifyotp`, { email, otp });
      if (res.data.success) {
        toast.success("OTP verified");
        setIsVerified(true);
        setStep("login");
      } else {
        toast.error(res.data.error || "Invalid OTP");
      }
    } catch (err: any) {
      toast.error(err.response?.data?.error || "Error verifying OTP");
    }
  };

  const handleResendOtp = async () => {
    handleGetOtp();
  };

  return {
    otp,
    setOtp,
    otpVisible,   // ✅ return this
    step,
    isVerified,
    handleGetOtp,
    handleVerifyOtp,
    handleResendOtp,
  };
};
