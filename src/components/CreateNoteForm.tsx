// src/components/CreateNoteForm.tsx
import React from "react";

interface Props {
  title: string;
  setTitle: (v: string) => void;
  setIsCreating: (v: boolean) => void;
  onSave: () => void;

}

const CreateNoteForm: React.FC<Props> = ({ title:newNoteTitle, setTitle:setNewNoteTitle, onSave:handleCreateNote ,setIsCreating }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
            <input
              type="text"
              placeholder="Enter note title"
              value={newNoteTitle}
              onChange={(e) => setNewNoteTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 text-lg text-black"
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsCreating(false)}
                className="px-5 py-3 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300 text-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateNote}
                className="px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-lg"
              >
                Save
              </button>
            </div>
          </div>
  );
};

export default CreateNoteForm;
