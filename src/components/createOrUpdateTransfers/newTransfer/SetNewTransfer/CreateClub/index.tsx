import React from 'react'
import { useState } from 'react'
import { Pressable, Keyboard } from 'react-native'
import axios from 'axios'

import { Box, BoxInput, InputDescription, Input, BoxButton } from '../CreatePlayer/style'
import { Button, TextButton } from '../../ConfirmTransfer/style'

import { IClubCreate } from '../../../../../interfaces/IClubs'

import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../../navigations/mainNavigation'

type CreateScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CreateClub'>;

type Props = {
  navigation: CreateScreenNavigationProp
}

export default function CreateClub({ navigation }: Props) {
  const [clubName, setClubName] = useState<string>("")
  const [clubPhoto, setClubPhoto] = useState<string>("")
  
  const createNewClubObject: IClubCreate = {
    name: clubName,
    photo: clubPhoto
  }

  function createClub() {
    const URL = "https://a348-2804-d41-a777-8f00-c4c6-ef6-f16f-d26.sa.ngrok.io/create/club"
    const promise = axios.post(URL, createNewClubObject)
    promise.then(() => {
      console.log("Criou")
      navigation.navigate('NewTransfer')
    })
      .catch(err => {
        console.log(err)
      })
  }
  
  return (
    <Pressable onPress={Keyboard.dismiss} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
      <Box
        style={{ flex: 1, maxHeight: 180 }}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
        keyboardDismissMode={'none'}
      >
        <BoxInput style={{ marginTop: 7 }}>
          <InputDescription>Digite o nome do Clube:</InputDescription>
          <Input value={clubName} onChangeText={setClubName} />
        </BoxInput>

        <BoxInput>
          <InputDescription>Insira a foto do clube:</InputDescription>
          <Input value={clubPhoto} onChangeText={setClubPhoto} />
        </BoxInput>
      </Box>
      <BoxButton>
        <Button onPress={() => navigation.navigate('NewTransfer')} style={{ marginTop: 1, width: 100 }}>
          <TextButton>Voltar</TextButton>
        </Button>

        <Button onPress={() => createClub()} style={{ marginTop: 1, width: 100, alignItems: 'flex-end' }}>
          <TextButton>Salvar</TextButton>
        </Button>
      </BoxButton>
    </Pressable>
  )
}