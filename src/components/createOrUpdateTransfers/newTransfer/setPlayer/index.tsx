import { useContext, useState } from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'
import axios from 'axios'

import { Box, Description, Input, styles } from "../style"

import { IPlayer } from '../../../../interfaces/IPlayers'

import PlayerAndClubBox from '../PlayerAndClubBox'
import Separator from '../../../separator'
import CreatePlayerOrClub from '../CreatePlayerOrClub'

import NewTransferContext, { INewTransferContext } from '../../../../contexts/newTransferContext'
import PlayersContext, { IPlayerContext } from '../../../../contexts/playersContext'
import ClubsContext, { IClubsContext } from '../../../../contexts/clubsContext'

export default function SetPlayer() {
  const [inputValue, setInputValue] = useState<string>("")
  const { transferData } = useContext<INewTransferContext>(NewTransferContext)
  const { players, setPlayers } = useContext<IPlayerContext>(PlayersContext)
  console.log(players)
  const { clubs, setClubs } = useContext<IClubsContext>(ClubsContext)

  function getPlayerInitals(inputValue: string) {
    inputValue == "" && transferData.playerId == null ? setPlayers([]) : inputValue == "" && transferData.from == null || transferData.to == null ? setClubs([]) : null

    let URL: string = "";

    if (transferData.playerId == null) {
      URL = `https://2da3-179-66-249-119.sa.ngrok.io/get/players/${inputValue}`
    } else if (transferData.from == null || transferData.to == null) {
      URL = `https://2da3-179-66-249-119.sa.ngrok.io/get/clubs/${inputValue}`
    }

    const promise = axios.get(URL)
    promise.then(response => {
      const { data } = response
      transferData.playerId == null ? setPlayers(data) : setClubs(data)
    })
      .catch(error => {
        console.log(error)
      })
  }

  function onChangeFunction(inputValue: string) {
    setInputValue(inputValue)
    getPlayerInitals(inputValue)
  }

  function renderPlayer({ item }: ListRenderItemInfo<IPlayer>) {
    return <PlayerAndClubBox info={item} inputValue={setInputValue} setClubs={setClubs} />
  }

  return (
    <>
      <Box style={players.length == 0 && inputValue == "" || clubs.length == 0 && inputValue == "" ? { borderBottomLeftRadius: 15, borderBottomRightRadius: 15 } : null}>
        <Description>{transferData.playerId == null ? "Digite o nome do Jogador" : transferData.from == null ? "Digite o nome do Clube atual do Jogador" : transferData.to == null ? "Digite o nome do Clube interessado no Jogador" : "Digite o status da transferência"}</Description>
        <Input placeholder="Nome" maxLength={20} value={inputValue} onChangeText={onChangeFunction} />
      </Box>

      {
        transferData.playerId == null && inputValue !== "" && players.length == 0 || transferData.playerId !== null && transferData.from == null && inputValue !== "" && clubs.length == 0 ? (
          <CreatePlayerOrClub />
        ) : (
          <FlatList
            contentContainerStyle={styles.FlatList}
            ItemSeparatorComponent={Separator}
            data={transferData.playerId == null ? players : clubs}
            renderItem={renderPlayer}
            keyExtractor={(item) => `${item.id}`}
          />
        )
      }
    </>
  )
}