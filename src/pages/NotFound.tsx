// NotFound.tsx
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/"); // go back to home/login/dashboard as per your app
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-lg text-gray-600 mt-4">Oops! Page not found.</p>
      <button
        onClick={goHome}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
