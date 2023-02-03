import { Box, Name } from "../PlayerAndClubBox/style"
import { StackNavigationProp } from "@react-navigation/stack"

import { Ionicons } from "@expo/vector-icons"

import { RootStackParamList } from "../../../../../navigations/mainNavigation"

import NewTransferContext, {INewTransferContext} from "../../../../../contexts/newTransferContext"
import { useContext } from "react"

type CreateScreenNavigationProp = StackNavigationProp<RootStackParamList, 'NewTransfer'>;

type Props = {
  navigation: CreateScreenNavigationProp
}

export default function CreatePlayerOrClub({ navigation }: Props) {
  const { transferData } = useContext<INewTransferContext>(NewTransferContext)
  
  function setName() {
    if (transferData.playerId == null) {
      return "Criar Jogador"
    } else {
      return "Criar Clube"
    }
  }
  return (
    <Box style={{borderBottomLeftRadius: 15, borderBottomRightRadius: 15}} onPress={() => {
      transferData.playerId == null ? navigation.navigate('CreatePlayer') : navigation.navigate('CreateClub')
    }}>
      <Name style={{marginLeft: 16}}>{ setName() }</Name>
      <Ionicons name='add-circle-outline' style={{ marginLeft: 127 }}  color={"#fff"} size={35}/>
    </Box>
  )
}