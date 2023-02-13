import { useContext, useEffect, useState } from 'react'
import { Pressable, Keyboard, ListRenderItemInfo, FlatList, View } from 'react-native'
import axios from 'axios'

import { Spinner } from 'native-base'

import { Box, BoxInput, InputDescription, Input, BoxButton, styles } from './style'
import { Button, TextButton } from '../../ConfirmTransfer/style'

import { IPlayerCreate, IPositionData } from '../../../../../interfaces/IPlayers'

import PositionBox from './positionBox'

import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../../navigations/mainNavigation'

import NgrokUrlContext, { INgrokContext } from '../../../../../contexts/ngrokUrlContext'

type CreateScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CreatePlayer'>;

type Props = {
  navigation: CreateScreenNavigationProp
}

export default function CreatePlayer({ navigation }: Props) {
  const [playerName, setPlayerName] = useState<string>("")
  const [playerAge, setPlayerAge] = useState<string>("")
  const [playerNationality, setPlayerNationality] = useState<string>("")
  const [playerPosition, setPlayerPosition] = useState<string | undefined>("")
  const [playerPhoto, setPlayerPhoto] = useState<string>("")

  const { url } = useContext<INgrokContext>(NgrokUrlContext)

  const [selected, setSelected] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)

  const positions: IPositionData[] = [
    { id: 1, position: "Goleiro" },
    { id: 2, position: "Zagueiro" },
    { id: 3, position: "Lateral" },
    { id: 4, position: "Volante" },
    { id: 5, position: "Meia" },
    { id: 6, position: "Atacante" }
  ]

  useEffect(() => {
    if (selected !== 0) {
      let position: IPositionData | undefined = positions.find((item) => item.id == selected)
      setPlayerPosition(position?.position)
    }
  }, [selected])

  const createPlayerObject: IPlayerCreate = {
    name: playerName,
    age: parseInt(playerAge),
    nationality: playerNationality,
    position: playerPosition,
    photo: playerPhoto
  }

  function createPlayer() {
    setLoading(true)
    const URL = `${url}/create/player`

    const promise = axios.post(URL, createPlayerObject)
    promise.then(() => {
      navigation.navigate('NewTransfer')
      setLoading(false)
    })
      .catch(err => {
        console.log(err)
      })
  }

  function renderPositions({ item }: ListRenderItemInfo<IPositionData>) {
    return <PositionBox info={item} selected={selected} setSelected={setSelected} />
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
              style={{ flex: 1 }}
              contentContainerStyle={{
                flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
              keyboardDismissMode={'none'}
            >
              <BoxInput style={{ marginTop: 7 }}>
                <InputDescription>Digite o nome do jogador:</InputDescription>
                <Input value={playerName} onChangeText={setPlayerName} />
              </BoxInput>

              <BoxInput>
                <InputDescription>Digite a idade do jogador:</InputDescription>
                <Input keyboardType='numeric' value={playerAge} onChangeText={setPlayerAge} />
              </BoxInput>

              <BoxInput>
                <InputDescription>Digite a Nacionalidade do jogador:</InputDescription>
                <Input value={playerNationality} onChangeText={setPlayerNationality} />
              </BoxInput>

              <BoxInput>
                <InputDescription>Insira a foto do jogador:</InputDescription>
                <Input value={playerPhoto} onChangeText={setPlayerPhoto} />
              </BoxInput>

              <BoxInput style={{ marginBottom: 10 }}>
                <InputDescription>Selecione a posição do jogador:</InputDescription>
                <FlatList
                  contentContainerStyle={styles.FlatList}
                  horizontal={true}
                  data={positions}
                  renderItem={renderPositions}
                  keyExtractor={(item) => `${item.id}`}
                />
              </BoxInput>
            </Box>

            <BoxButton>
              <Button onPress={() => navigation.navigate('NewTransfer')} style={{ marginTop: 1, width: 100 }}>
                <TextButton>Voltar</TextButton>
              </Button>

              <Button onPress={() => createPlayer()} style={{ marginTop: 1, width: 100, alignItems: 'flex-end' }}>
                <TextButton>Salvar</TextButton>
              </Button>
            </BoxButton>
          </>
        )
      }
    </Pressable>
  )
}