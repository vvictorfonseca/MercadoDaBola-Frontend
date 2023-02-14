import { useContext, useState } from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'
import axios from 'axios'

import { StackNavigationProp } from '@react-navigation/stack'

import { RootStackParamList } from '../../../../navigations/mainNavigation'

import { Box, Description, Input, styles } from "../style"

import { IPlayer } from '../../../../interfaces/IPlayers'
import { IStatusData } from '../../../../interfaces/ITransfers'
import { IClub } from '../../../../interfaces/IClubs'

import Separator from '../../../separator'
import CreatePlayerOrClub from './CreatePlayerOrClub'
import PlayerAndClubBox from './PlayerAndClubBox'
import StatusBox from './StatusBox'
import LoadingBox from './LoadingBox'

import NewTransferContext, { INewTransferContext } from '../../../../contexts/newTransferContext'
import PlayersContext, { IPlayerContext } from '../../../../contexts/playersContext'
import ClubsContext, { IClubsContext } from '../../../../contexts/clubsContext'
import NgrokUrlContext, { INgrokContext } from '../../../../contexts/ngrokUrlContext'

type CreateScreenNavigationProp = StackNavigationProp<RootStackParamList, 'NewTransfer'>;

type Props = {
  navigation: CreateScreenNavigationProp
}

export default function SetNewTransfer({ navigation }: Props) {
  const [inputValue, setInputValue] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  
  const { transferData } = useContext<INewTransferContext>(NewTransferContext)
  const { players, setPlayers } = useContext<IPlayerContext>(PlayersContext)
  const { clubs, setClubs } = useContext<IClubsContext>(ClubsContext)
  const { url } = useContext<INgrokContext>(NgrokUrlContext)

  const status: IStatusData[] = [
    { name: "Negociando" },
    { name: "Melou" },
    { name: "Fechado" }
  ]

  function getPlayerInitals(inputValue: string) {
    inputValue == "" ? setLoading(false) : setLoading(true)
    inputValue == "" && transferData.playerId == null ?
      setPlayers([])
      :
      inputValue == "" && transferData.from == null || transferData.to == null ?
        setClubs([])
        :
        null

    let URL: string = "";

    if (transferData.playerId == null) {
      URL = `${url}/get/players/${inputValue}`
    } else if (transferData.from == null || transferData.to == null) {
      URL = `${url}/get/clubs/${inputValue}`
    }

    const promise = axios.get(URL)
    promise.then(response => {
      const { data } = response
      transferData.playerId == null ? setPlayers(data) : setClubs(data)
      setLoading(false)
    })
      .catch(error => {
        console.log(error)
      })
  }

  function onChangeFunction(inputValue: string) {
    setInputValue(inputValue)
    getPlayerInitals(inputValue)
  }

  function renderPlayersOrClubs({ item }: ListRenderItemInfo<IPlayer | IClub>) {
    return <PlayerAndClubBox info={item} inputValue={setInputValue} setClubs={setClubs} setPlayers={setPlayers} />
  }

  function renderStatus({ item }: ListRenderItemInfo<IStatusData>) {
    return <StatusBox {...item} />
  }

  return (
    <>
      {
        transferData.to == null ? (
          <>
            <Box style={players.length == 0 && inputValue == "" || clubs.length == 0 && inputValue == "" ? { borderBottomLeftRadius: 15, borderBottomRightRadius: 15 } : null}>
              <Description>{transferData.playerId == null ? "Digite o nome do Jogador" : transferData.from == null ? "Digite o nome do Clube atual do Jogador" : "Digite o nome do Clube interessado no Jogador"}</Description>
              <Input placeholder="Nome" maxLength={20} value={inputValue} onChangeText={onChangeFunction} />
            </Box>
            {
              loading ? (
                <LoadingBox />
              ) : (
                transferData.playerId == null && inputValue !== "" && players.length == 0 || transferData.playerId !== null && transferData.from == null && inputValue !== "" && clubs.length == 0 || transferData.playerId !== null && transferData.from !== null && transferData.to == null && inputValue !== "" && clubs.length == 0 ? (
                  <CreatePlayerOrClub setInputValue={setInputValue} setClubs={setClubs} setPlayers={setPlayers} navigation={navigation} />
                ) : (
                  <FlatList
                    contentContainerStyle={styles.FlatList}
                    style={{width: '80%'}}
                    ItemSeparatorComponent={Separator}
                    data={transferData.playerId == null ? players : clubs}
                    renderItem={renderPlayersOrClubs}
                    keyExtractor={(item) => `${item.id}`}
                  />
                )
              )
            }
          </>
        ) : (
          <>
            <Box>
              <Description>Selecione o status da transferência</Description>
            </Box>
            <FlatList
              contentContainerStyle={styles.FlatList}
              style={{ width: '80%' }}
              ItemSeparatorComponent={Separator}
              data={status}
              renderItem={renderStatus}
              keyExtractor={(item) => `${item.name}`}
            />
          </>
        )
      }
    </>
  )
}