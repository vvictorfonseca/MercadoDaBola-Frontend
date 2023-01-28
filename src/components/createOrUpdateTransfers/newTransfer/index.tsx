import { useContext } from "react";
import { Keyboard, Text } from "react-native";

import { Main } from "../main/style";

import NewTransferContext, { INewTransferContext } from "../../../contexts/newTransferContext";

import SetPlayer from "./setPlayer";
import SetClub from "./setClub";

export default function NewTransfer() {
  const { transferData } = useContext<INewTransferContext>(NewTransferContext)
  console.log(transferData)
  return (
    <Main onPress={Keyboard.dismiss}>
      {
        transferData.playerId == null ? (
          <SetPlayer />
        ) : transferData.from == null ? (
          <SetClub />
        ) : transferData.to == null ? (
          <Text>Deu bom Paizão</Text>
        ) : (
          null
        )
      }
    </Main>
  )
}