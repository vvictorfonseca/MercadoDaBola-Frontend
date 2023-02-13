import React, { useContext, useState } from 'react'
import { Pressable, Keyboard, View } from 'react-native'
import axios from 'axios'

import { Spinner } from 'native-base'

import { Box, BoxInput, InputDescription, Input, BoxButton } from '../CreatePlayer/style'
import { Button, TextButton } from '../../ConfirmTransfer/style'

import { IClubCreate } from '../../../../../interfaces/IClubs'

import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../../navigations/mainNavigation'

import NgrokUrlContext, { INgrokContext } from '../../../../../contexts/ngrokUrlContext'

type CreateScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CreateClub'>;

type Props = {
  navigation: CreateScreenNavigationProp
}

export default function CreateClub({ navigation }: Props) {
  const { url } = useContext<INgrokContext>(NgrokUrlContext)
  const [clubName, setClubName] = useState<string>("")
  const [clubPhoto, setClubPhoto] = useState<string>("")

  const [loading, setLoading] = useState<boolean>(false)

  const createNewClubObject: IClubCreate = {
    name: clubName,
    photo: clubPhoto
  }

  function createClub() {
    setLoading(true)
    const URL = `${url}/create/club`

    const promise = axios.post(URL, createNewClubObject)
    promise.then(() => {
      navigation.navigate('NewTransfer')
      setLoading(false)
    })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
      {
        loading ? (
          <View style={ {display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '80%' }}>
            <Spinner size='lg' color={'#56bc31'} />
          </View>
        ) : (
          <>
            <Box
              style={{ flex: 1, maxHeight: 180 }}
              contentContainerStyle={{
                flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
              keyboardDismissMode={'none'}
            >
              <BoxInput>
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
          </>
        )
      }
    </Pressable>
  )
}