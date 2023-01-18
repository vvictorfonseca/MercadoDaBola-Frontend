import { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import Constants from 'expo-constants';

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
    const { manifest } = Constants
    let URL = `http:${manifest?.debuggerHost?.split(`:`).shift()?.concat(`:5000`)}/get/players/ge`
    
    const promise = axios.get(URL)
    promise.then(response => {
      console.log("entrou no then")
      const { data } = response
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