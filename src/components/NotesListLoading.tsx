// src/components/NotesListLoading.tsx
import React from "react";

const NotesListLoading: React.FC = () => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Notes</h2>
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="border border-gray-200 rounded-lg p-4 animate-pulse">
          <div className="h-5 bg-gray-300 rounded w-1/3 mb-2" />
          <div className="h-4 bg-gray-200 rounded w-full mb-1" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
        </div>
      ))}
    </div>
  </div>
);

export default NotesListLoading;
