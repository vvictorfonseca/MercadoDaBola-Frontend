import { createContext, ReactNode, useState } from "react";

export interface IUpdateTransfers {
  update: boolean;
  setUpdate: (newState: boolean) => void
}

const initialValue: IUpdateTransfers = {
  update: true,
  setUpdate: () => {}
}

const UpdateTransfersContext = createContext(initialValue)
export default UpdateTransfersContext

interface IUpdateTransfersProps {
  children: ReactNode
}

export function UpdateTransfersProvider({ children } : IUpdateTransfersProps) {
  const [update, setUpdate] = useState<boolean>(initialValue.update)

  return (
    <UpdateTransfersContext.Provider value={{ update, setUpdate }}>
      { children }
    </UpdateTransfersContext.Provider>
  )
}