import { useState, useContext, useEffect } from "react"
import { Text, View } from "react-native"
import axios from "axios"

import { Box, Player, Infos, StatusInfo, TransferStatus, LikesBox, LikesPorcentage, Clubs, ClubBox, ClubImage, ClubName, Button, TextButton, PlayerImage, PlayerNameBox, PlayerInfo, PlayerInfoBox } from "./style"

import { IPlayerFull } from "../../../../interfaces/IPlayers"
import { IClub } from "../../../../interfaces/IClubs"
import { INewTransfer } from "../../../../interfaces/ITransfers"

import { initalPlayerValue, initalClubValue } from "../../../../initalValues"

import { Ionicons } from "@expo/vector-icons"

import NewTransferContext, { INewTransferContext } from "../../../../contexts/newTransferContext"

export default function ConfirmTransfer() {
  const { transferData, setTransferData } = useContext<INewTransferContext>(NewTransferContext)
  const [player, setPlayer] = useState<IPlayerFull>(initalPlayerValue)
  const [clubFrom, setClubFrom] = useState<IClub>(initalClubValue)
  const [clubTo, setClubTo] = useState<IClub>(initalClubValue)

  let playerPosition = ""
  let clubFromName = ""
  let clubToName = ""

  if (player.position) {
    for (let i = 0; i < 3; i++) {
      playerPosition += player.position[i].toUpperCase()
    }
  }
  if (clubFrom.name) {
    for (let i = 0; i < 3; i++) {
      clubFromName += clubFrom.name[i].toUpperCase()
    }
  }
  if (clubTo.name) {
    for (let i = 0; i < 3; i++) {
      clubToName += clubTo.name[i].toUpperCase()
    }
  }

  useEffect(() => {
    getPlayer()
    getClubFrom()
    getClubTo()
  }, [])

  function getPlayer() {
    const URL = `https://37fe-2804-d41-a777-8f00-d438-2f46-e052-58b3.sa.ngrok.io/get/player/${transferData.playerId}`

    const promise = axios.get(URL)
    promise.then(response => {
      const { data } = response
      setPlayer(data)
    })
      .catch(err => {
        console.log(err)
      })
  }

  function getClubFrom() {
    const URL = `https://37fe-2804-d41-a777-8f00-d438-2f46-e052-58b3.sa.ngrok.io/get/club/${transferData.from}`

    const promise = axios.get(URL)
    promise.then(response => {
      const { data } = response
      setClubFrom(data)
    })
      .catch(err => {
        console.log(err)
      })
  }

  function getClubTo() {
    const URL = `https://37fe-2804-d41-a777-8f00-d438-2f46-e052-58b3.sa.ngrok.io/get/club/${transferData.to}`

    const promise = axios.get(URL)
    promise.then(response => {
      const { data } = response
      setClubTo(data)
    })
      .catch(err => {
        console.log(err)
      })
  }

  const newTransferObject: INewTransfer = {
    playerId: transferData.playerId,
    to: transferData.to,
    from: transferData.from,
    status: transferData.status
  }

  function createNewTransfer() {
    const URL = "https://37fe-2804-d41-a777-8f00-d438-2f46-e052-58b3.sa.ngrok.io/upsert/transfer"

    const promise = axios.post(URL, newTransferObject)
    promise.then(() => {
      console.log("Criou")
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <Box>
        <Player>
          <PlayerImage source={{ uri: player?.photo }}></PlayerImage>

          <PlayerNameBox>
            <PlayerInfo>{player?.name}</PlayerInfo>
          </PlayerNameBox>

          <PlayerInfoBox>
            <PlayerInfo style={{ fontWeight: 'bold' }}>{playerPosition}</PlayerInfo>
          </PlayerInfoBox>

          <PlayerInfoBox style={{ borderBottomWidth: 0 }}>
            <PlayerInfo>{player.nationality}</PlayerInfo>
          </PlayerInfoBox>
        </Player>

        <View style={{ display: 'flex', height: '80%', width: '67%' }}>
          <Infos>
            <StatusInfo>
              {
                transferData.status == "Negociando" ? (
                  <Ionicons name='briefcase-sharp' color={"#fff"} size={35} />
                ) : transferData.status == "Melou" ? (
                  <Ionicons name='close' color={"#f04c3e"} size={35} />
                ) : (
                  <Ionicons name='checkmark' color={"#fff"} size={35} />
                )
              }
              <TransferStatus>{transferData.status}</TransferStatus>
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
              <ClubImage source={{ uri: clubFrom.photo }} />
              <ClubName>{clubFromName}</ClubName>
            </ClubBox>

            <Ionicons name='arrow-forward' color={"#fff"} size={40} />

            <ClubBox>
              <ClubImage source={{ uri: clubTo.photo }} />
              <ClubName>{clubToName}</ClubName>
            </ClubBox>
          </Clubs>
        </View>
      </Box>

      <Button onPress={() => createNewTransfer()}>
        <TextButton>Salvar</TextButton>
      </Button>
      
      <Button style={{ marginTop: 10 }} onPress={() => setTransferData({ playerId: null, from: null, to: null, status: null })}>
        <TextButton>Voltar</TextButton>
      </Button>
    </>
  )
}