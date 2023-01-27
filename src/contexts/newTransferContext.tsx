import { createContext, ReactNode, useState } from "react";
import { INewTransfer } from "../interfaces/ITransfers";
import { transferDataObject } from "../initalValues";

export interface INewTransferContext {
  transferData: INewTransfer
  setTransferData: (newState: INewTransfer) => void
}

const initialValue: INewTransferContext = {
  transferData: transferDataObject,
  setTransferData: () => {}
}

const NewTransferContext = createContext<INewTransferContext>(initialValue)
export default NewTransferContext

export interface INewTransferContextProps {
  children: ReactNode
}

export function NewTransferProvider({ children }: INewTransferContextProps) {
  const [transferData, setTransferData] = useState<INewTransfer>(initialValue.transferData)

  return (
    <NewTransferContext.Provider value={{ transferData, setTransferData }}>
      { children }
    </NewTransferContext.Provider>
  )
}