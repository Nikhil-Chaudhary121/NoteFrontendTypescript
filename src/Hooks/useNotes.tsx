import { useState, useEffect } from "react";
import axios from "axios";
import type { INote } from "../types/note";
import { useNavigate } from "react-router-dom";



export const useNotes = () => {
  const [notes, setNotes] = useState<INote[]>([]);
  const [loadingNotes, setLoadingNotes] = useState(true);
  const [errorNotes, setErrorNotes] = useState<string | null>(null);
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  // fetch notes
  useEffect(() => {
    if (!userId || !token) {
      setLoadingNotes(false);
      navigate("/signup");
      return;
    }

    const fetchNotes = async () => {
      try {
        const res = await axios.get<INote[]>(`https://note-app-backend-6dlx.onrender.com/api/notes`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setNotes(res.data || []);
      } catch (err: any) {
        setErrorNotes(err.message || "Failed to fetch notes");
      } finally {
        setLoadingNotes(false);
      }
    };

    fetchNotes();
  }, [userId, token, navigate]);

  // add note
  const addNote = async (noteData: Omit<INote, "_id" | "createdAt">) => {
    try {
      const res = await axios.post(
        `https://note-app-backend-6dlx.onrender.com/api/notes/`,
        { title: noteData.title },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const newNote: INote = res.data.createdAt
        ? res.data
        : { ...res.data, createdAt: new Date().toISOString() };

      setNotes((prev) => [newNote, ...prev]);
    } catch (err: any) {
      setErrorNotes(err.message || "Failed to add note");
    }
  };

  // delete note
  const deleteNote = async (noteId: string | number) => {
    try {
      await axios.delete(`https://note-app-backend-6dlx.onrender.com/api/notes/${noteId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotes((prev) => prev.filter((note) => note._id !== noteId));
    } catch (err: any) {
      setErrorNotes(err.message || "Failed to delete note");
    }
  };

  return { notes, loadingNotes, errorNotes, addNote, deleteNote };
};
