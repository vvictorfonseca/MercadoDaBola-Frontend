import { useContext } from 'react'
import { Image } from 'react-native'

import { Box, Name, Styles } from "./style"

import PlayersContext, { IPlayerContext } from '../../../../contexts/playersContext'

import { IPlayer } from "../../../../interfaces/IPlayers"

export default function PlayerBox(props: IPlayer) {
  const { players } = useContext<IPlayerContext>(PlayersContext)
  let lastPlayerId: number | null = null;
  
  players.forEach(item => {
    lastPlayerId = item.id
  })

  return (
    <Box style={props.id == lastPlayerId ? {borderBottomLeftRadius: 15, borderBottomRightRadius: 15} : null}>
      <Image style={Styles.Image} source={{uri: props.photo}} />
      <Name>{props.name}</Name>
    </Box>
  )
}