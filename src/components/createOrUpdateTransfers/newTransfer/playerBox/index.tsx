import { useContext } from 'react'
import { Image } from 'react-native'

import { Box, Name, Styles } from "./style"

import PlayersContext, { IPlayerContext } from '../../../../contexts/playersContext'

import { IPlayer } from "../../../../interfaces/IPlayers"

import NewTransferContext, {INewTransferContext} from '../../../../contexts/newTransferContext'

export default function PlayerBox(props: IPlayer) {
  const { players } = useContext<IPlayerContext>(PlayersContext)
  const { transferData, setTransferData } = useContext<INewTransferContext>(NewTransferContext)
  
  let lastPlayerId: number | null = null;
  players.forEach(item => {
    lastPlayerId = item.id
  })

  return (
    <Box onPress={() => setTransferData({...transferData, playerId: props.id})} style={props.id == lastPlayerId ? {borderBottomLeftRadius: 15, borderBottomRightRadius: 15} : null}>
      <Image style={Styles.Image} source={{uri: props.photo}} />
      <Name>{props.name}</Name>
    </Box>
  )
}