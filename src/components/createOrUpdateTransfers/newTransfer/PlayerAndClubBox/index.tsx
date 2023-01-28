import { useContext } from 'react'
import { Image } from 'react-native'

import { Box, Name, Styles } from './style'

import PlayersContext, { IPlayerContext } from '../../../../contexts/playersContext'

import { IPlayer } from "../../../../interfaces/IPlayers"

import NewTransferContext, {INewTransferContext} from '../../../../contexts/newTransferContext'
import ClubsContext, { IClubsContext } from '../../../../contexts/clubsContext'

export default function PlayerAndClubBox(props: IPlayer) {
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
      transferData.playerId == null ?
      setTransferData({...transferData, playerId: props.id}) 
      : transferData.from == null ?
      setTransferData({...transferData, from: props.id})
      :
      null
    }} 
      style={props.id == lastPlayerId || props.id == lastClubId ? {borderBottomLeftRadius: 15, borderBottomRightRadius: 15} : null} 
    >
      <Image style={Styles.Image} source={{uri: props.photo}} />
      <Name>{props.name}</Name>
    </Box>
  )
}