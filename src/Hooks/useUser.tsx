import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { IUser } from "../types/user";  



export const useUser = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [userLoading, setUserLoading] = useState(true);
  const [userError, setUserError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      setUserLoading(false);
      navigate("/signup");
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await axios.get<IUser>(
          `https://note-app-backend-6dlx.onrender.com/api/auth/getuser/${userId}`
        );
        setUser(res.data);
      } catch (err: any) {
        setUserError(err.message);
      } finally {
        setUserLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  return { user, userLoading, userError };
};

// old code