import { useContext, useEffect, useState } from "react"
import { ListRenderItemInfo, FlatList, View, Text } from "react-native"
import axios from "axios"

import { Spinner } from "native-base"
import { Ionicons } from "@expo/vector-icons"

import { BoxTransfer } from "../style"
import { Player, PlayerImage, PlayerNameBox, PlayerInfo, PlayerInfoBox, Infos, StatusInfo, TransferStatus, LikesBox, LikesPorcentage, Clubs, ClubBox, ClubImage, ClubName, Button, TextButton } from "../../newTransfer/ConfirmTransfer/style"
import { BoxStatusFlat, styles } from "./style"
import { BoxButton } from "../../newTransfer/SetNewTransfer/CreatePlayer/style"

import NgrokUrlContext, { INgrokContext } from "../../../../contexts/ngrokUrlContext"
import PlayerIdContext, { IPlayerId } from "../../../../contexts/playerIdContext"
import UpdateTransfersContext, { IUpdateTransfers } from "../../../../contexts/updateTransfersContext"
import { Transfers, IUpdateTransfer } from "../../../../interfaces/ITransfers"

import { transferInitialValue } from "../../../../initalValues"

import BoxStatus from "./boxStatus"
import UpdateTransferBox from "./updateTransferBox"

import { formatClubName, formatPosition } from "../../../../functionToReuse"

export interface IStatus {
  id: number;
  name: string
}

import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "../../../../navigations/mainNavigation"

type CreateScreenNavigationProp = StackNavigationProp<RootStackParamList, 'UpdateTransfer'>;

type Props = {
  navigation: CreateScreenNavigationProp
}

export default function Update({ navigation }: Props) {
  const [transfers, setTransfers] = useState<Transfers[]>()
  const [transfer, setTransfer] = useState<Transfers>(transferInitialValue)
  const [loading, setLoading] = useState<boolean>(true)
  const [selected, setSelected] = useState<number>(0)

  const { playerId, setPlayerId } = useContext<IPlayerId>(PlayerIdContext)
  const { url } = useContext<INgrokContext>(NgrokUrlContext)
  const { update, setUpdate } = useContext<IUpdateTransfers>(UpdateTransfersContext)

  useEffect(() => {
    getTransfersByPlayerId()
  }, [])

  function getTransfersByPlayerId() {
    setLoading(true)
    const URL = `${url}/get/transfer/by/${playerId}`

    const promise = axios.get(URL)
    promise.then(response => {
      const { data } = response
      setTransfers(data)
      setLoading(false)
    })
      .catch(err => {
        console.log(err)
      })
  }

  const status: IStatus[] = [
    { id: 1, name: "Negociando" },
    { id: 2, name: "Melou" },
    { id: 3, name: "Fechado" }
  ]

  function updateTrnasfer() {
    setLoading(true)
    const statusValue = status.find((item) => item.id == selected)

    const updateTransfer: IUpdateTransfer = {
      id: transfer.id,
      status: statusValue?.name,
      playerId: transfer.player.id,
      from: transfer.fromRelation.id,
      to: transfer.toRelation.id
    }

    const URL = `${url}/upsert/transfer`

    const promise = axios.post(URL, updateTransfer)
    promise.then(() => {
      update ? setUpdate(false) : setUpdate(true)
      setPlayerId(0)
      setSelected(0)
      setTransfer(transferInitialValue)
      navigation.navigate('CreateHome')
      setLoading(false)
    })
      .catch(err => {
        console.log(err)
      })
  }

  function renderTransfers({ item }: ListRenderItemInfo<Transfers>) {
    return <UpdateTransferBox info={item} setTransfer={setTransfer} setSelected={setSelected} />
  }

  function renderStatus({ item }: ListRenderItemInfo<IStatus>) {
    return <BoxStatus info={item} selected={selected} setSelected={setSelected} />
  }

  return (
    loading ? (
      <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '80%' }}>
        <Spinner size='lg' color={'#56bc31'} />
      </View>
    ) : transfer.status == "" ? (
      <View style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
        <Text style={{ marginTop: 5, fontSize: 20, color: '#007300', fontWeight: 'bold' }}>Selecione a Transferência pra atualizar:</Text>
        <FlatList
          data={transfers}
          renderItem={renderTransfers}
          contentContainerStyle={{
            display: 'flex',
            alignItems: 'center'
          }}
          style={{ width: '100%', maxHeight: '80%' }}
        />
      </View>
    ) : (
      <>
        <BoxTransfer style={{ marginTop: 15 }}>
          <Player>
            <PlayerImage source={{ uri: transfer.player.photo }}></PlayerImage>

            <PlayerNameBox>
              <PlayerInfo>{transfer.player.name}</PlayerInfo>
            </PlayerNameBox>

            <PlayerInfoBox>
              <PlayerInfo style={{ fontWeight: 'bold' }}>{transfer.player.position !== null ? formatPosition("", transfer.player.position) : ""}</PlayerInfo>
            </PlayerInfoBox>

            <PlayerInfoBox style={{ borderBottomWidth: 0 }}>
              <PlayerInfo>{transfer.player.nationality}</PlayerInfo>
            </PlayerInfoBox>
          </Player>

          <View style={{ display: 'flex', height: '80%', width: '67%' }}>
            <Infos>
              <StatusInfo>
                {
                  selected == 1 ? (
                    <Ionicons name='briefcase-sharp' color={"#fff"} size={35} />
                  ) : selected == 2 ? (
                    <Ionicons name='close' color={"#f04c3e"} size={40} />
                  ) : selected == 3 ? (
                    <Ionicons name='checkmark' color={"#007300"} size={40} />
                  ) : transfer.status == "Negociando" ? (
                    <Ionicons name='briefcase-sharp' color={"#fff"} size={35} />
                  ) : transfer.status == "Melou" ? (
                    <Ionicons name='close' color={"#f04c3e"} size={40} />
                  ) : (
                    <Ionicons name='checkmark' color={"#007300"} size={40} />
                  )
                }
                <TransferStatus>{selected == 1 ? "Negociando" : selected == 2 ? "Melou" : selected == 3 ? "Fechado" : transfer.status}</TransferStatus>
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
                <ClubImage source={{ uri: transfer?.fromRelation.photo }} />
                <ClubName>{transfer?.fromRelation.name !== null ? formatClubName("", transfer.fromRelation.name) : null}</ClubName>
              </ClubBox>

              <Ionicons name='arrow-forward' color={"#fff"} size={40} />

              <ClubBox>
                <ClubImage source={{ uri: transfer?.toRelation.photo }} />
                <ClubName>{transfer?.toRelation.name !== null ? formatClubName("", transfer.toRelation.name) : null}</ClubName>
              </ClubBox>
            </Clubs>
          </View>
        </BoxTransfer>

        <BoxStatusFlat>
          <FlatList
            contentContainerStyle={styles.FlatList}
            horizontal={true}
            data={status}
            renderItem={renderStatus}
            keyExtractor={(item) => `${item.id}`}
          />
        </BoxStatusFlat>

        <BoxButton style={{ width: '90%', marginTop: 50 }}>
          <Button onPress={() => {
            setPlayerId(0)
            setSelected(0)
            setTransfer(transferInitialValue)
          }} style={{ marginTop: 1, width: 150, height: 60 }}>
            <TextButton>Voltar</TextButton>
          </Button>

          <Button onPress={() => updateTrnasfer()} style={{ marginTop: 1, width: 150, alignItems: 'flex-end', height: 60 }}>
            <TextButton>Atualizar</TextButton>
          </Button>
        </BoxButton>
      </>
    )
  )
}