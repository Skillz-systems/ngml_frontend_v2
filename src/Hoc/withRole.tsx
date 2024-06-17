import { useAuth } from '@/AuthContext';
import { UserRole } from '@/type';
import React from 'react';


interface WithRoleProps {
    roles: UserRole[];
    children: React.ReactNode;
  }
  
  const WithRole: React.FC<WithRoleProps> = ({ roles, children }) => {
    const { user } = useAuth();
  
    if (!user || !roles.includes(user.role)) {
      return <div>Access Denied</div>;
    }
  
    return <>{children}</>;
  };
  
  export default WithRole;
