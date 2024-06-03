export enum UserRole {
    Admin = 'admin',
    Staff = 'staff',
    Customer = 'customer',
    Supplier = 'supplier',
  }
  
  export interface User {
    username: string;
    role: UserRole;
  }
  