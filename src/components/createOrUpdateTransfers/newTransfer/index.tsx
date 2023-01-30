import { useContext } from "react";
import { Keyboard, Text } from "react-native";

import { Main } from "../main/style";

import NewTransferContext, { INewTransferContext } from "../../../contexts/newTransferContext";

import SetNewTransfer from "./SetNewTransfer";
import ConfirmTransfer from "./ConfirmTransfer";

export default function NewTransfer() {
  const { transferData } = useContext<INewTransferContext>(NewTransferContext)
  
  return (
    <Main onPress={Keyboard.dismiss}>
      {
        transferData.status == null ? (
          <SetNewTransfer />
        ) : (
          <ConfirmTransfer />
        )
      }
    </Main>
  )
}