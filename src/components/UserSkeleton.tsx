// src/components/UserSkeleton.tsx
import React from "react";

const UserSkeleton: React.FC = () => (
  <div className="bg-white rounded-xl shadow-sm p-6 mb-4 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-gray-300 animate-pulse" />
      <div>
        <div className="h-4 bg-gray-300 rounded w-40 mb-2 animate-pulse" />
        <div className="h-3 bg-gray-200 rounded w-32 animate-pulse" />
      </div>
    </div>
    <div className="h-10 w-28 bg-gray-300 rounded animate-pulse" />
  </div>
);

export default UserSkeleton;
