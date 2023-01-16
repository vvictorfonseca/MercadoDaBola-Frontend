import { Main, MainBox, Box } from "./style"
import { StackNavigationProp } from "@react-navigation/stack"

import { Ionicons } from "@expo/vector-icons/"
import { RootStackParamList } from "../../../../App";

type CreateScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Create'
  >;

type Props = {
  navigation: CreateScreenNavigationProp
}

export default function CreateOrUpdate({ navigation }: Props ) {
  return (
    <Main>
      <MainBox>
        <Box 
          onPress={() => {
            navigation.navigate('NewTransfer')
          }}
        >
          <Ionicons name='add-circle' size={60} color="#fff" />
        </Box>

        <Box
          onPress={() => {
            navigation.navigate('UpdateTransfer')
          }}
        >
          <Ionicons name='swap-horizontal' size={60} color="#fff" />
        </Box>
      </MainBox>
    </Main>
  )
}