
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'


import SignUpPage from './pages/SignUp'
import SignInPage from './pages/SignIn'
import NotFound from './pages/NotFound'
import { useEffect } from 'react'
import AuthRedirect from './components/Auth/AuthRedirect'
import DashboardPage from './pages/DashboardPage'


function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    const userId = params.get("userId");

    if (token && userId) {
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      navigate("/"); // go to dashboard without redirecting to signup
    }
  }, [location, navigate]);
  


  return (
    <div>
      <Routes>
        <Route path='/' element={<DashboardPage/>}/>
        <Route path="/auth/success" element={<AuthRedirect />} />
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/signin" element={<SignInPage/>}/>
        <Route path="*" element={<NotFound />} />
 
      </Routes>
     
    </div>
  )
}

export default App
