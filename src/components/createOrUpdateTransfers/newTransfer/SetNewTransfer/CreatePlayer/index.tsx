import { useState } from 'react'
import { Text } from 'react-native'
import { IPlayerCreate } from '../../../../../interfaces/IPlayers'

import { Box, BoxInput, InputDescription, Input } from './style'

export default function CreatePlayer() {
  const [player, setPlayer] = useState<IPlayerCreate>()

  return (
    <Box>
      <BoxInput style={{marginTop: 7}}>
        <InputDescription>Digite o nome do jogador:</InputDescription>
        <Input />
      </BoxInput>

      <BoxInput>
        <InputDescription>Digite a idade do jogador:</InputDescription>
        <Input />
      </BoxInput>

      <BoxInput>
        <InputDescription>Digite a Nacionalidade do jogador:</InputDescription>
        <Input />
      </BoxInput>

      <BoxInput>
        <InputDescription>Digite a idade do jogador</InputDescription>
        <Input />
      </BoxInput>

      <BoxInput style={{marginBottom: 10}}>
        <InputDescription>Insira a foto do jogador:</InputDescription>
        <Input />
      </BoxInput>
    </Box>
  )
}