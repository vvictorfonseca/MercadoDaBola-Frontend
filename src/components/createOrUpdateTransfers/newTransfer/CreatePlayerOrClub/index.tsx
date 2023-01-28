import { Box, Name } from "../PlayerAndClubBox/style"

import { Ionicons } from "@expo/vector-icons"

import NewTransferContext, {INewTransferContext} from "../../../../contexts/newTransferContext"
import { useContext } from "react"

export default function CreatePlayerOrClub() {
  const { transferData } = useContext<INewTransferContext>(NewTransferContext)
  
  function setName() {
    if (transferData.playerId == null) {
      return "Criar Jogador"
    } else {
      return "Criar Clube"
    }
  }
  return (
    <Box style={{borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
      <Name style={{marginLeft: 16}}>{ setName() }</Name>
      <Ionicons name='add-circle-outline' style={{ marginLeft: 127 }}  color={"#fff"} size={35}/>
    </Box>
  )
}