import { useContext, useState } from "react"
import { ListRenderItemInfo, FlatList, Pressable, Keyboard } from "react-native"
import axios from "axios"

import { Spinner } from "native-base"

import { IPlayer } from "../../../interfaces/IPlayers"
import { IClub } from "../../../interfaces/IClubs"

import { Box, Description, Input, styles } from "../newTransfer/style"

import PlayerAndClubBox from "../newTransfer/SetNewTransfer/PlayerAndClubBox"
import LoadingBox from "../newTransfer/SetNewTransfer/LoadingBox"
import NoPlayerBox from "./noPlayerBox"
import Separator from "../../separator"

import PlayersContext, { IPlayerContext } from "../../../contexts/playersContext"
import NgrokUrlContext, { INgrokContext } from "../../../contexts/ngrokUrlContext"
import PlayerIdContext, { IPlayerId } from "../../../contexts/playerIdContext"

import Update from "./update"

import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "../../../navigations/mainNavigation"

type CreateScreenNavigationProp = StackNavigationProp<RootStackParamList, 'UpdateTransfer'>;

type Props = {
  navigation: CreateScreenNavigationProp
}

export default function UpdateTransfer({ navigation }: Props) {
  const [inputValue, setInputValue] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const { players, setPlayers } = useContext<IPlayerContext>(PlayersContext)
  const { playerId } = useContext<IPlayerId>(PlayerIdContext)
  const { url } = useContext<INgrokContext>(NgrokUrlContext)

  function getPlayerInitals(inputValue: string) {
    inputValue == "" ? setLoading(false) : setLoading(true)
    inputValue == "" ? setPlayers([]) : null

    const URL = `${url}/get/players/${inputValue}`

    const promise = axios.get(URL)
    promise.then(response => {
      const { data } = response
      setPlayers(data)
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
    return <PlayerAndClubBox info={item} inputValue={setInputValue} setClubs={setPlayers} setPlayers={setPlayers} />
  }

  function ConditionToRenderPlayers() {
    return (
      loading ? (
        <LoadingBox />
      ) : players.length == 0 && inputValue !== "" ? (
        <NoPlayerBox />
      ) :
        <FlatList
          contentContainerStyle={styles.FlatList}
          ItemSeparatorComponent={Separator}
          data={players}
          renderItem={renderPlayersOrClubs}
          keyExtractor={(item) => `${item.id}`}
        />
    )
  }

  return (
    <>
      <Pressable onPress={Keyboard.dismiss} style={{ display: 'flex', alignItems: 'center' }}>
        {
          playerId == 0 ? (
            <>
              <Box style={players.length == 0 && inputValue == "" ? { borderBottomLeftRadius: 15, borderBottomRightRadius: 15 } : null}>
                <Description>Digite o nome do jogador para atualizar a transferência</Description>
                <Input placeholder="Nome" maxLength={20} value={inputValue} onChangeText={onChangeFunction} />
              </Box>

              <ConditionToRenderPlayers />
            </>
          ) : (
            <Update navigation={navigation} />
          )
        }
      </Pressable>
    </>
  )
}