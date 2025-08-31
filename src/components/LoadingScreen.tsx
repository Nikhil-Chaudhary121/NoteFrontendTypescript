import { Loader2 } from "lucide-react"; // 👈 install lucide-react if not already: npm i lucide-react

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="flex flex-col items-center gap-4 p-6 bg-white shadow-lg rounded-2xl">
        {/* Spinner */}
        <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />

        {/* Text */}
        <h1 className="text-lg font-semibold text-gray-700">
          Loading your dashboard...
        </h1>
        <p className="text-sm text-gray-500">
          Please wait a moment.
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
