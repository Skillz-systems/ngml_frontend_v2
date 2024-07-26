/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { AuthRoutes } from './AuthRoutes' 
import { AdminRoutes } from './AdminRoutes'
import { ClientRoutes } from './ClientRoutes'
import { StaffRoutes } from './StaffRoutes'
import { SupplierRoutes } from './SupplierRoutes'
import { CustomerRoutes } from './CustomerRoutes'

export const PrivateAdminRoute = ({ children }: { children: any }) => {
  return <> {children} </>
}

export const routes = {
  AuthRoutes,
  AdminRoutes,
  ClientRoutes,
  StaffRoutes,
  SupplierRoutes,
  CustomerRoutes,
  PrivateAdminRoute
}
