import { useEffect, useState, useContext } from "react";
import { Main, MainBox, Box } from "./style"
import { StackNavigationProp } from "@react-navigation/stack"

import { Ionicons } from "@expo/vector-icons/"
import { RootStackParamList } from "../../../navigations/mainNavigation";

import AsyncStorage from "@react-native-async-storage/async-storage";

import LogAsAdmin from "./logAsAdmin";

import AdminContext, { IAdminContext } from "../../../contexts/adminContext";
import NgrokUrlContext, { INgrokContext } from "../../../contexts/ngrokUrlContext";

type CreateScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Create'>;

type Props = {
  navigation: CreateScreenNavigationProp
}

export default function CreateOrUpdate({ navigation }: Props) {
  const { admIsLogged, setAdmIsLogged } = useContext<IAdminContext>(AdminContext)
  const { url } = useContext<INgrokContext>(NgrokUrlContext)

  async function getInfo() {
    try {
      let adm = await AsyncStorage.getItem("admIsLogged")

      if (adm !== null) {
        setAdmIsLogged(true)
      } else {
        setAdmIsLogged(false)
      }

    } catch (err) {
      alert(err)
    }
  }

  useEffect(() => {
    getInfo()
  }, [])

  return (
    <Main>
      {
        !admIsLogged ? (
          <LogAsAdmin />
        ) : (
          <MainBox>
            <Box
              onPress={() => {
                navigation.navigate('NewTransferAndCreate')
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
        )
      }
    </Main>
  )
}