// // src/pages/DashboardPage.tsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import NotesList from "../components/NotesList";
import NotesListLoading from "../components/NotesListLoading";
import UserSkeleton from "../components/UserSkeleton";
import LoadingScreen from "../components/LoadingScreen";
import ErrorScreen from "../components/ErrorScreen";


import { useNavigate } from "react-router-dom";
import { useUser } from "../Hooks/useUser";
import { useNotes } from "../Hooks/useNotes";
import CreateNoteForm from "../components/CreateNoteForm";
import DashboardHeader from "../components/DashboardHeader";


const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  const [isCreating, setIsCreating] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState("");


  // hooks (always at top)
  const { user,  userLoading,  userError } = useUser();
  const { notes, loadingNotes, errorNotes, addNote, deleteNote } = useNotes ();

  // redirect if no token (still a hook but after other hooks — order is stable)
  useEffect(() => {   
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const userId = params.get("userId");
  
    if (token && userId) {
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      window.history.replaceState({}, document.title, "/"); // remove query params
    }
  
    const storedToken = localStorage.getItem("token");
    if (!storedToken) navigate("/signup");
  }, [navigate]);

  if (userLoading) return <LoadingScreen />;
  if (userError) return <ErrorScreen  />;

  const handleCreateNote = async () => {
    if (!newNoteTitle.trim()) return;

    try {
      await addNote({
        title: newNoteTitle,
        user: user?._id ?? ""
      });
      setNewNoteTitle("");
      
      setIsCreating(false);
    } catch {
      // addNote throws on error — you can show a toast here
    }
  };

  const handleDeleteNote = async (id: string) => {
    try {
      await deleteNote(id);
    } catch {
      // show a toast or set local UI error
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
       <div className="max-w-5xl mx-auto px-6 py-8">
   
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col lg:flex-row gap-8">
        <aside className=" hidden  w-full lg:w-1/4">
          <Sidebar length={notes.length} />
        </aside>

        <main className="flex-1">
          {/* header: skeleton while user loads */}
          {user ? (
            <>
             <DashboardHeader user={user}/>

        {/* Create Note Section */}
        {isCreating ? (
          <CreateNoteForm title={newNoteTitle} setTitle={setNewNoteTitle} onSave={handleCreateNote} setIsCreating={setIsCreating}/>
        ) : (
          <button
            onClick={() => setIsCreating(true)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 text-lg rounded-xl mb-8 shadow-sm"
          >
            Create Note
          </button>
        )}

            </>
          ) : (
            <UserSkeleton />
          )}

          

          {/* notes */}
          <section>
            {loadingNotes ? (
              <NotesListLoading />
            ) : errorNotes ? (
              <div className="bg-white p-6 rounded-xl text-red-600">{errorNotes}</div>
            ) : (
              <NotesList notes={notes} onDelete={handleDeleteNote} />
              
              
            )}
          </section>
        </main>
      </div>
    </div>
    </div>
  );
};

export default DashboardPage;
