import { createContext, ReactNode, useState } from "react";

export interface IAdminContext {
  admIsLogged: boolean;
  setAdmIsLogged: (newState: boolean) => void
}

const initialValue: IAdminContext = {
  admIsLogged: false,
  setAdmIsLogged: () => {}
}

const AdminContext = createContext(initialValue)
export default AdminContext

interface IAdminContextProps {
  children: ReactNode
}

export function AdminProvider({ children }: IAdminContextProps) {
  const [admIsLogged, setAdmIsLogged] = useState<boolean>(initialValue.admIsLogged)

  return (
    <AdminContext.Provider value={{ admIsLogged, setAdmIsLogged }}>
      { children }
    </AdminContext.Provider>
  )
}