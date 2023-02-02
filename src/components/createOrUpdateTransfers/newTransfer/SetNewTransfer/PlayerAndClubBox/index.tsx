import { useContext } from 'react'
import { Image } from 'react-native'

import { Box, Name, Styles } from './style'

import PlayersContext, { IPlayerContext } from '../../../../../contexts/playersContext'

import { IPlayer } from "../../../../../interfaces/IPlayers"
import { IClub } from '../../../../../interfaces/IClubs'

import NewTransferContext, { INewTransferContext } from '../../../../../contexts/newTransferContext'
import ClubsContext, { IClubsContext } from '../../../../../contexts/clubsContext'

interface IProps {
  info: IPlayer,
  inputValue: (newState: string) => void,
  setClubs: (newState: IClub[]) => void,
  setPlayers: (newState: IPlayer[]) => void
}

export default function PlayerAndClubBox(props: IProps) {
  const { clubs } = useContext<IClubsContext>(ClubsContext)
  const { players } = useContext<IPlayerContext>(PlayersContext)
  const { transferData, setTransferData } = useContext<INewTransferContext>(NewTransferContext)

  let lastPlayerId: number | null = null;
  players.forEach(item => {
    lastPlayerId = item.id
  })

  let lastClubId: number | null = null;
  clubs.forEach(item => {
    lastClubId = item.id
  })

  return (
    <Box onPress={() => {
      props.inputValue("")
      props.setPlayers([])
      props.setClubs([])

      transferData.playerId == null ?
        setTransferData({ ...transferData, playerId: props.info.id })
        : transferData.from == null ?
          setTransferData({ ...transferData, from: props.info.id })
          : transferData.to == null ?
            setTransferData({ ...transferData, to: props.info.id })
            :
            null
    }}
      style={props.info.id == lastPlayerId || props.info.id == lastClubId ? { borderBottomLeftRadius: 15, borderBottomRightRadius: 15 } : null}
    >
      <Image style={Styles.Image} source={{ uri: props.info.photo }} />
      <Name>{props.info.name}</Name>
    </Box>
  )
}