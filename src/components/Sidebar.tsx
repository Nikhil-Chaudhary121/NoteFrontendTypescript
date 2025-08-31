// src/components/Sidebar.tsx
import React from "react";

interface Props {
  length?: number;
}

const Sidebar: React.FC<Props> = ({ length = 0 }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">Overview</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Total notes</span>
          <strong>{length}</strong>
        </div>

        <a className="block text-sm text-blue-600 hover:underline" href="/profile">Profile</a>
        <a className="block text-sm text-blue-600 hover:underline" href="/settings">Settings</a>
      </div>
    </div>
  );
};

export default Sidebar;
