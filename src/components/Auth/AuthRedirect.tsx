import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthRedirect: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    const userId = params.get("userId");

    if (token && userId) {
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      navigate("/"); // redirect to dashboard
    } else {
      navigate("/signup");
    }
  }, [location, navigate]);

  return <div>Logging in...</div>;
};

export default AuthRedirect;
