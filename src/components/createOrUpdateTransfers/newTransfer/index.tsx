import { useState } from "react";
import { Keyboard, FlatList, ListRenderItemInfo } from "react-native";

import axios from "axios";

import { Main } from "../main/style";
import { Box, Description, Input } from "./style";

import { IPlayer } from "../../../interfaces/IPlayers";
import { INewTransfer } from "../../../interfaces/ITransfers";

import Player from "./player";

export default function NewTransfer() {
  const [transferData, setTransferData] = useState<INewTransfer>()
  const [players, setPlayers] = useState<IPlayer[]>()
  console.log(players)
  const [playerName, setPlayerName] = useState<string>("")

  function getPlayerInitals(playerName: string) {
    let URL = `http://4738-2804-14d-2a21-92c7-ad8f-2d4e-359e-415a.ngrok.io/get/players/${playerName}`

    const promise = axios.get(URL)
    promise.then(response => {
      const { data } = response
      setPlayers(data)
    })
      .catch(error => {
        console.log(error)
      })
  }

  function playerValue(playerName: string) {
    console.log("na função", playerName)
    setPlayerName(playerName)
    getPlayerInitals(playerName)
  }

  function renderPlayer({ item }: ListRenderItemInfo<IPlayer>) {
    return <Player {...item} />
  }

  return (
    <Main onPress={Keyboard.dismiss}>
      <Box>
        <Description>Digite o nome do jogador</Description>
        <Input placeholder="Nome" maxLength={20} value={playerName} onChangeText={playerValue} />
        {
          players?.length !== undefined ? (
            <FlatList
              data={players}
              renderItem={renderPlayer}
            />
          ) : (
            null
          )
        }
      </Box>
    </Main>
  )
}