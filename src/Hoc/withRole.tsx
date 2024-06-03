import { useAuth } from '@/AuthContext';
import { UserRole } from '@/file';
import React from 'react';


interface WithRoleProps {
  children: React.ReactNode;
  roles: UserRole[];
}

const WithRole = ({ children, roles }: WithRoleProps) => {
  const { user } = useAuth();

  if (!user || !roles.includes(user.role)) {
    return <div>Access Denied</div>;
  }

  return <>{children}</>;
};

export default WithRole;
