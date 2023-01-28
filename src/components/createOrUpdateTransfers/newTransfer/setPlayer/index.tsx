import { useContext, useState } from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'
import axios from 'axios'

import { Box, Description, Input, styles } from "../style"

import { IPlayer } from '../../../../interfaces/IPlayers'

import PlayerAndClubBox from '../PlayerAndClubBox'
import Separator from '../../../separator'
import CreatePlayerOrClub from '../CreatePlayerOrClub'

import PlayersContext, { IPlayerContext } from '../../../../contexts/playersContext'

export default function SetPlayer() {
  const [playerName, setPlayerName] = useState<string>("")
  const { players, setPlayers } = useContext<IPlayerContext>(PlayersContext)

  function getPlayerInitals(playerName: string) {
    playerName == "" ? setPlayers([]) : null
    let URL = `https://135f-2804-14d-2a21-92c7-45e-6bb3-fe2e-9.sa.ngrok.io/get/players/${playerName}`

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
    return <PlayerAndClubBox {...item} />
  }

  return (
    <>
      <Box style={players.length == 0 && playerName == "" ? { borderBottomLeftRadius: 15, borderBottomRightRadius: 15 } : null}>
        <Description>Digite o nome do jogador</Description>
        <Input placeholder="Nome" maxLength={20} value={playerName} onChangeText={onChangeFunction} />
      </Box>
      
      {
        playerName !== "" && players.length == 0 ? (
          <CreatePlayerOrClub />
        ) : (
          <FlatList
            contentContainerStyle={styles.FlatList}
            ItemSeparatorComponent={Separator}
            data={players}
            renderItem={renderPlayer}
            keyExtractor={(item) => `${item.id}`}
          />
        )
      }
    </>
  )
}