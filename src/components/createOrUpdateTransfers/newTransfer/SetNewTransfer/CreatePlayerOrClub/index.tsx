import { Box, Name } from "../PlayerAndClubBox/style"
import { StackNavigationProp } from "@react-navigation/stack"

import { Ionicons } from "@expo/vector-icons"

import { RootStackParamList } from "../../../../../navigations/mainNavigation"

import NewTransferContext, {INewTransferContext} from "../../../../../contexts/newTransferContext"
import { useContext } from "react"
import { IClub } from "../../../../../interfaces/IClubs"
import { IPlayer } from "../../../../../interfaces/IPlayers"

type CreateScreenNavigationProp = StackNavigationProp<RootStackParamList, 'NewTransfer'>;

type Props = {
  setClubs: (newState: IClub[]) => void
  setPlayers: (newState: IPlayer[]) => void
  setInputValue: (newState: string) => void
  navigation: CreateScreenNavigationProp
}

export default function CreatePlayerOrClub(props: Props) {
  const { transferData } = useContext<INewTransferContext>(NewTransferContext)
  
  function setName() {
    if (transferData.playerId == null) {
      return "Criar Jogador"
    } else {
      return "Criar Clube"
    }
  }

  function createPlayer() {
    props.navigation.navigate('CreatePlayer')
    props.setPlayers([])
    props.setInputValue("")
  }
  function createClub() {
    props.navigation.navigate('CreateClub')
    props.setClubs([])
    props.setInputValue("")
  }
  
  return (
    <Box style={{borderBottomLeftRadius: 15, borderBottomRightRadius: 15}} onPress={() => {
      transferData.playerId == null ? createPlayer() : createClub()
    }}>
      <Name style={{marginLeft: 16}}>{ setName() }</Name>
      <Ionicons name='add-circle-outline' style={{ marginLeft: 127 }}  color={"#fff"} size={35}/>
    </Box>
  )
}