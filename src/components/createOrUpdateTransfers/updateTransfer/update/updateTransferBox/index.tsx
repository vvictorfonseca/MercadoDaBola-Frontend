import { View } from 'react-native'
import { Player, Infos, StatusInfo, TransferStatus, LikesBox, LikesPorcentage, Clubs, ClubBox, ClubImage, ClubName, Button, TextButton, PlayerImage, PlayerNameBox, PlayerInfo, PlayerInfoBox } from "../../../newTransfer/ConfirmTransfer/style"
import { BoxTouchable } from './style'

import { Ionicons } from "@expo/vector-icons"
import { Transfers } from "../../../../../interfaces/ITransfers"

import { formatClubName, formatPosition } from '../../../../../functionToReuse'

interface IUpdateTransferBoxProps {
  info: Transfers;
  setTransfer: (newState: Transfers) => void;
  setSelected: (newState: number) => void
}

export default function UpdateTransferBox(props: IUpdateTransferBoxProps) {
  return (
    <BoxTouchable
      onPress={() => {
        props.setTransfer(props.info)
        props.info.status == "Negociando" ? props.setSelected(1) :  props.info.status == "Melou" ? props.setSelected(2) : props.setSelected(3)
      }}
      style={{ marginTop: 15 }}
    >
      <Player>
        <PlayerImage source={{ uri: props.info.player.photo }}></PlayerImage>

        <PlayerNameBox>
          <PlayerInfo>{props.info.player.name}</PlayerInfo>
        </PlayerNameBox>

        <PlayerInfoBox>
          <PlayerInfo style={{ fontWeight: 'bold' }}>{props.info.player.position !== null ? formatPosition("", props.info.player.position) : null}</PlayerInfo>
        </PlayerInfoBox>

        <PlayerInfoBox style={{ borderBottomWidth: 0 }}>
          <PlayerInfo>{props.info.player.nationality}</PlayerInfo>
        </PlayerInfoBox>
      </Player>

      <View style={{ display: 'flex', height: '80%', width: '67%' }}>
        <Infos>
          <StatusInfo>
            {
              props.info.status == "Negociando" ? (
                <Ionicons name='briefcase-sharp' color={"#fff"} size={35} />
              ) : props.info.status == "Melou" ? (
                <Ionicons name='close' color={"#f04c3e"} size={40} />
              ) : (
                <Ionicons name='checkmark' color={"#007300"} size={40} />
              )
            }
            <TransferStatus>{props.info.status}</TransferStatus>
          </StatusInfo>

          <StatusInfo style={{ borderRightWidth: 0 }}>
            <LikesBox>
              <Ionicons name='thumbs-up-sharp' color={"#007300"} size={25} />
              <LikesPorcentage>0%</LikesPorcentage>
            </LikesBox>

            <LikesBox>
              <Ionicons name='thumbs-down-sharp' color={"#f04c3e"} size={25} />
              <LikesPorcentage>0%</LikesPorcentage>
            </LikesBox>
          </StatusInfo>
        </Infos>

        <Clubs>
          <ClubBox>
            <ClubImage source={{ uri: props.info.fromRelation.photo }} />
            <ClubName>{props.info.fromRelation.name !== null ? formatClubName("", props.info.fromRelation.name) : ""}</ClubName>
          </ClubBox>

          <Ionicons name='arrow-forward' color={"#fff"} size={40} />

          <ClubBox>
            <ClubImage source={{ uri: props.info.toRelation.photo }} />
            <ClubName>{props.info.toRelation.name !== null ? formatClubName("", props.info.toRelation.name): ""}</ClubName>
          </ClubBox>
        </Clubs>
      </View>
    </BoxTouchable>
  )
}