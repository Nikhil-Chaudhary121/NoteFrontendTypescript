import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import  { Toaster } from "react-hot-toast";
import { useOtp } from "../Hooks/useOtp";
import { useAuth } from "../Hooks/useAuth";
import { Link } from "react-router-dom";
import GoogleLoginButton from "../components/Auth/GoogleLoginButton";
import Logo from "../components/Logo";
import RIghtSide from "../components/RIghtSide";

const SignUpForm = () => {
  const [name, setName] = useState("Jonas Khanwald");
  const [dob, setDob] = useState("11 December 1997");
  const [email, setEmail] = useState("jonas_kahnwald@gmail.com");
  const [showOtp, setShowOtp] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // OTP hook
  const {
    otp,
    setOtp,
    otpVisible,
    isVerified,
    step,
    handleGetOtp,
    handleVerifyOtp,
  } = useOtp(email);

  // Auth hook
  const { handleSignup } = useAuth(name, dob, email, otp, rememberMe, isVerified);

  // Unified Button
  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (step === "getOtp") handleGetOtp();
    else if (step === "verifyOtp") handleVerifyOtp();
    else if (step === "login") handleSignup();
  };

  return (
    <div className="min-h-screen p-4 flex">
      {/* Left Section */}
      <div className="flex flex-col justify-start lg:gap-0 gap-40 w-full lg:w-1/2 xl:w-1/3 px-8 ">
        {/* Logo */}
        <Logo/>

        {/* Form */}
        <Toaster />
        <div className="lg:flex-1 flex items-center justify-center px-2">
          <div className="w-full max-w-sm">
            <h2 className="text-3xl font-bold mb-2 text-center lg:text-left text-black">
              Sign up
            </h2>
            <p className="text-gray-400 mb-8 text-center lg:text-left text-base">
              Sign up to enjoy the feature of HD
            </p>
            <div className="space-y-6">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2 text-base text-black focus:outline-none focus:ring-0 focus:border-gray-400 peer bg-white"
                  placeholder=" "
                />
                <label
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    name ? "top-2 text-xs text-gray-500" : "top-4 text-base text-gray-400"
                  }`}
                >
                  Your Name
                </label>
              </div>

              {/* DOB */}
              <div className="relative">
                <input
                  type="text"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2 pr-12 text-base text-black focus:outline-none focus:ring-0 focus:border-gray-400 peer bg-white"
                  placeholder=" "
                />
                <label
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    dob ? "top-2 text-xs text-gray-500" : "top-4 text-base text-gray-400"
                  }`}
                >
                  Date of Birth
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2 text-base text-black focus:outline-none focus:ring-0 focus:border-gray-400 peer bg-white"
                  placeholder=" "
                />
                <label
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    email ? "top-2 text-xs text-gray-500" : "top-4 text-base text-gray-400"
                  }`}
                >
                  Email
                </label>
              </div>

              {/* OTP */}
              {otpVisible && (
                <div className="relative">
                  <input
                    type={showOtp ? "text" : "password"}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2 pr-12 text-base text-black focus:outline-none focus:ring-0 focus:border-gray-400 peer bg-white"
                    placeholder=" "
                  />
                  <label
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      otp ? "top-2 text-xs text-gray-500" : "top-4 text-base text-gray-400"
                    }`}
                  >
                    OTP
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowOtp(!showOtp)}
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                  >
                    {showOtp ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              )}

              {/* Remember Me */}
              {step === "login" && (
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                  />
                  <label htmlFor="rememberMe" className="text-sm text-gray-600">
                    Remember Me
                  </label>
                </div>
              )}

              {/* Button */}
              <button
                onClick={handleButtonClick}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3.5 text-base rounded-lg transition-colors duration-200"
              >
                {step === "getOtp" ? "Get OTP" : step === "verifyOtp" ? "Verify OTP" : "Login"}
              </button>
              <GoogleLoginButton/>
            </div>

            <p className="mt-6 text-center text-gray-400 text-sm">
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-500 hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <RIghtSide/>
    </div>
  );
};

export default SignUpForm;
