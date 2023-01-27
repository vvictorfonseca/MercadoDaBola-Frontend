import { useState, useContext } from "react";
import { Keyboard, Text } from "react-native";

import { Main } from "../main/style";

import { INewTransfer } from "../../../interfaces/ITransfers";
import { transferDataObject } from "../../../initalValues";

import NewTransferContext, { INewTransferContext } from "../../../contexts/newTransferContext";

import SetPlayer from "./setPlayer";

export default function NewTransfer() {
  const { transferData, setTransferData } = useContext<INewTransferContext>(NewTransferContext)
  console.log(transferData)
  return (
    <Main onPress={Keyboard.dismiss}>
      {
        transferData.playerId == null ? (
          <SetPlayer />
        ) : transferData.from == null ? (
          <Text>Opa, foi</Text>
        ) : (
          null
        )
      }
    </Main>
  )
}