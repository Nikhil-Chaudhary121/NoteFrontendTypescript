
  
  const ErrorScreen: React.FC = () => (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-red-50 to-pink-100">
      <p className="text-red-600 font-semibold text-lg">
        { "User not found. Please login again."}
      </p>
    </div>
  );
  
  export default ErrorScreen;
  