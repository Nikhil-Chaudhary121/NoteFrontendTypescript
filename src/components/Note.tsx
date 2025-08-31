// src/components/Note.tsx
import React from "react";

import type { INote } from "../types/note";

interface Props {
  note: INote;
  onDelete: (id: string) => void;
}

const Note: React.FC<Props> = ({ note, onDelete }) => {
  const id = note._id ?? String(note.id);
  return (
    <div
    key={note.id}
    className="flex justify-between items-center bg-white border border-gray-200 rounded-lg px-5 py-4 shadow-sm"
  >
    <span className="text-lg text-black">{note.title}</span>
    <button
      onClick={() => onDelete(id)}
      className="text-gray-400 hover:text-red-500"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </button>
  </div>
  );
};

export default Note;
