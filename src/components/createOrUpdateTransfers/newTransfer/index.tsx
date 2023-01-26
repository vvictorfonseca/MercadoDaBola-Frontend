import { useState } from "react";
import { Keyboard, ListRenderItemInfo, FlatList } from "react-native";

import axios from "axios";

import { Main } from "../main/style";
import { Box, Description, Input, styles } from "./style";

import { IPlayer } from "../../../interfaces/IPlayers";
import { INewTransfer } from "../../../interfaces/ITransfers";

import Player from "./player";

export default function NewTransfer() {
  const [transferData, setTransferData] = useState<INewTransfer>()
  const [players, setPlayers] = useState<IPlayer[]>([])
  const [playerName, setPlayerName] = useState<string>("")

  function getPlayerInitals(playerName: string) {
    playerName == "" ? setPlayers([]) : null
    let URL = `https://486b-2804-14d-2a21-92c7-45e-6bb3-fe2e-9.sa.ngrok.io/get/players/${playerName}`

    const promise = axios.get(URL)
    promise.then(response => {
      const { data } = response
      setPlayers(data)
    })
      .catch(error => {
        console.log(error)
      })
  }

  function onChangeFunction(playerName: string) {
    setPlayerName(playerName)
    getPlayerInitals(playerName)
  }

  function renderPlayer({ item }: ListRenderItemInfo<IPlayer>) {
    return <Player {...item} />
  }

  return (
    <Main onPress={Keyboard.dismiss}>
      <>
      <Box>
        <Description>Digite o nome do jogador</Description>
        <Input placeholder="Nome" maxLength={20} value={playerName} onChangeText={onChangeFunction} />
      </Box>
      <FlatList
          contentContainerStyle={styles.FlatList}
          data={players}
          renderItem={renderPlayer}
          //keyExtractor={(item) => `${item.id}`}
        />
      </>
    </Main>
  )
}