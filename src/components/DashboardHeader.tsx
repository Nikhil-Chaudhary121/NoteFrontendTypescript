import React from 'react';
import type { IUser } from '../types/user';

interface Props {
  user: IUser | null;
  
}

const DashboardHeader: React.FC<Props> = ({ user }) => {
  return (
    
    <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
          <h2 className="text-xl font-semibold text-black mb-2">
            Welcome, {user?.name}
          </h2>
          <p className="text-gray-500 text-base">Email: {user?.email}</p>
        </div>
  );
};

export default DashboardHeader;
