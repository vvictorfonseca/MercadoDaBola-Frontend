import { Box, Avatar, Name } from "./style"

import { IPlayer } from "../../../../interfaces/IPlayers"

export default function Player(props: IPlayer) {
  return (
    <Box>
      {/* <Avatar>{props.photo}</Avatar> */}
      <Name>{props.name}</Name>
    </Box>
  )
}