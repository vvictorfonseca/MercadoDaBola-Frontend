import { useContext } from 'react'
import { Image } from 'react-native'

import { Box, Name, Styles } from '../../newTransfer/SetNewTransfer/PlayerAndClubBox/style'

import PlayersContext, {IPlayerContext} from '../../../../contexts/playersContext'

import { IPlayer } from '../../../../interfaces/IPlayers'

import PlayerIdContext, { IPlayerId} from '../../../../contexts/playerIdContext'

interface IProps {
  info: IPlayer,
  inputValue: (newState: string) => void,
  setPlayers: (newState: IPlayer[]) => void
}

export default function UpdatePlayerBox(props: IProps) {
  const { players } = useContext<IPlayerContext>(PlayersContext)
  const { setPlayerId } = useContext<IPlayerId>(PlayerIdContext)

  let lastPlayerId: number | null = null;
  players.forEach(item => {
    lastPlayerId = item.id
  })

  return (
    <Box onPress={() => {
      props.info.id !== null ? setPlayerId(props.info.id) : null
      props.inputValue("")
      props.setPlayers([])
    }}
      style={props.info.id == lastPlayerId ? { borderBottomLeftRadius: 15, borderBottomRightRadius: 15, width: '100%' } : { width: '100%' }}
    >
      <Image style={Styles.Image} source={{ uri: props.info.photo }} />
      <Name>{props.info.name}</Name>
    </Box>
  )
}