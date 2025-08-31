export interface UseOtpProps {
    email: string;
  }
  
  export interface UseOtpReturn {
    otpSent: boolean;
    isVerified: boolean;
    handleGetOtp: () => Promise<void>;
    handleVerifyOtp: (otp: string) => Promise<void>;
    handleResendOtp: () => Promise<void>;
    setIsVerified: React.Dispatch<React.SetStateAction<boolean>>;
  }
  