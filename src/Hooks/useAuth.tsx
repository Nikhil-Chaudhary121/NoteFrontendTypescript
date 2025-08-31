import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;
// console.log(API);


export const useAuth = (
  name: string,
  dob: string,
  email: string,
  otp: string,
  rememberMe: boolean,
  isVerified: boolean
) => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!isVerified) {
      toast.error("Please verify OTP first");
      return;
    }
    try {
      const res = await axios.post(`https://note-app-backend-6dlx.onrender.com/api/auth/login`, {
        name,
        dob,
        email,
        otp,
        keepLoggedIn: rememberMe,
      });

      if (res.data.error) {
        toast.error(res.data.error);
      } else {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.user.id);
        if (rememberMe) localStorage.setItem("rememberMe", "true");
        toast.success("Signup successful!");
        navigate("/");
      }
    } catch (err: any) {
      toast.error(err.response?.data?.error || "Signup failed");
    }
  };
  const handleSignup = async () => {
    if (!isVerified) {
      toast.error("Please verify OTP first");
      return;
    }
    try {
      const res = await axios.post(`https://note-app-backend-6dlx.onrender.com/api/auth/signup`, {
        name,
        dob,
        email,
        otp,
        keepLoggedIn: rememberMe,
      });

      if (res.data.error) {
        toast.error(res.data.error);
      } else {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.user.id);
        if (rememberMe) localStorage.setItem("rememberMe", "true");
        toast.success("Signup successful!");
        navigate("/");
      }
    } catch (err: any) {
      toast.error(err.response?.data?.error || "Signup failed");
    }
  };

  return { handleLogin  , handleSignup};
};
