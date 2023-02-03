import { useState } from 'react'
import { Pressable, Keyboard, ListRenderItemInfo, FlatList } from 'react-native'
import { IPositionData } from '../../../../../interfaces/IPlayers'

import { Box, BoxInput, InputDescription, Input, StatusBox, styles } from './style'
import { Button, TextButton } from '../../ConfirmTransfer/style'

import PositionBox from './positionBox'

export default function CreatePlayer() {
  const [playerName, setPlayerName] = useState<string>("")
  const [playerAge, setPlayerAge] = useState<string>()
  const [playerNationality, setPlayerNationality] = useState<string>("")
  const [playerPosition, setPlayerPosition] = useState<string>("")
  const [playerPhoto, setPlayerPhoto] = useState<string>("")

  const positions: IPositionData[] = [
    {id: 1, position: "GOL"},
    {id: 2, position: "ZAG"},
    {id: 3, position: "LD/LE"},
    {id: 4,position: "MEI"},
    {id: 5, position: "ATA"}
  ]

  function renderPositions({ item }: ListRenderItemInfo<IPositionData>) {
    return <PositionBox {...item} />
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={{width:'100%', height: '100%', display: 'flex', alignItems: 'center'}}>
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
          <Input value={playerName} onChangeText={setPlayerName}/>
        </BoxInput>

        <BoxInput>
          <InputDescription>Digite a idade do jogador:</InputDescription>
          <Input value={playerAge} onChangeText={setPlayerAge} />
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
          <InputDescription>Selecione a posição do jogador</InputDescription>
          <FlatList 
            contentContainerStyle={styles.FlatList}
            horizontal={true}
            data={positions}
            renderItem={renderPositions}
            keyExtractor={(item) => `${item.id}`}
          />
        </BoxInput>
      </Box>

      <Button style={{marginTop: 3}}>
        <TextButton>Salvar</TextButton>
      </Button>
    </Pressable>
  )
}