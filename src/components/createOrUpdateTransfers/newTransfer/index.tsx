import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

import axios from "axios";

import { Main } from "../main/style";
import { Box, Description, Input } from "./style";

import { IPlayer } from "../../../interfaces/IPlayers";
import { INewTransfer } from "../../../interfaces/ITransfers";

export default function NewTransfer() {
  const [transferData, setTransferData] = useState<INewTransfer>()
  const [players, setPlayers] = useState<IPlayer[]>()
  const [playerName, setPlayerName] = useState<string>("")

  useEffect(() => {
    getPlayerInitals()
  }, [playerName])

  function getPlayerInitals() {
    console.log("entrou na function")
    let URL = "http://add8-2804-14d-5083-8bca-c92-7012-e03e-3546.ngrok.io/get/players/ge"
    
    const promise = axios.get(URL)
    promise.then(response => {
      console.log("entrou no then")
      const { data } = response
      console.log(data)
      setPlayers(data)
    })
    .catch(error => {
      console.log("entrou")
    })
  }

  return (
    <Main onPress={Keyboard.dismiss}>
      <Box>
        <Description>Digite o nome do jogador</Description>
        <Input placeholder="Nome" maxLength={20} value={playerName} onChangeText={setPlayerName} />
      </Box>
    </Main>
  )
}