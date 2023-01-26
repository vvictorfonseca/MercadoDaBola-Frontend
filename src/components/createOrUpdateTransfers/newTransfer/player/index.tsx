import { Box, Avatar, Name } from "./style"
import {Image} from 'react-native'

import { IPlayer } from "../../../../interfaces/IPlayers"

export default function Player(props: IPlayer) {
  return (
    <Box>
      <Avatar source={{uri: `${props.photo}`}} />
      <Name>{props.name}</Name>
    </Box>
  )
}