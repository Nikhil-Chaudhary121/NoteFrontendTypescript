// src/components/NotesList.tsx
import React from "react";
import type { INote } from "../types/note";
import Note from "./Note";

interface Props {
  notes: INote[];
  onDelete: (id: string) => void;
}

const NotesList: React.FC<Props> = ({ notes, onDelete }) => {
  const noteArray = Array.isArray(notes) ? notes : [];
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Notes</h2>
      {noteArray.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No notes yet. Create your first note!</p>
      ) : (
        <div className="space-y-4">
          {noteArray.map((note) => (
            <Note key={note._id ?? note.id} note={note} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesList;
