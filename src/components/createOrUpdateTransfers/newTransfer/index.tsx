import { useContext } from "react";
import { Keyboard } from "react-native";

import { Main } from "../main/style";

import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../../../navigations/mainNavigation";

import NewTransferContext, { INewTransferContext } from "../../../contexts/newTransferContext";

import SetNewTransfer from "./SetNewTransfer";
import ConfirmTransfer from "./ConfirmTransfer";

type CreateScreenNavigationProp = StackNavigationProp<RootStackParamList, 'NewTransfer'>;

type Props = {
  navigation: CreateScreenNavigationProp
}

export default function NewTransfer({ navigation }: Props) {
  const { transferData } = useContext<INewTransferContext>(NewTransferContext)
  
  return (
    <Main onPress={Keyboard.dismiss}>
      {
        transferData.status == null ? (
          <SetNewTransfer navigation={navigation} />
        ) : (
          <ConfirmTransfer navigation={navigation} />
        )
      }
    </Main>
  )
}