import { Box, Name } from "../playerBox/style"

import { Ionicons } from "@expo/vector-icons"

export default function NewPlayerComponent() {
  return (
    <Box style={{borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
      <Name style={{marginLeft: 16}} >Criar jogador</Name>
      <Ionicons name='add-circle-outline' style={{ marginLeft: 127 }}  color={"#fff"} size={35}/>
    </Box>
  )
}