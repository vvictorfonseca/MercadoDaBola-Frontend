import { useEffect, useState, useContext } from "react";
import { View } from "react-native"
import { Box, Player, PlayerImage, PlayerNameBox, PlayerInfo, PlayerInfoBox, Infos, StatusInfo, TransferStatus, LikesBox, LikesPorcentage, Clubs, ClubBox, ClubImage, ClubName } from "../../createOrUpdateTransfers/newTransfer/ConfirmTransfer/style"
import axios from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Ionicons } from "@expo/vector-icons";

import { Transfers } from "../../../interfaces/ITransfers";

import NgrokUrlContext, { INgrokContext } from "../../../contexts/ngrokUrlContext";

interface ILikes {
  likesResult: number;
  dislikesResult: number;
}

export default function TransferBox(props: Transfers) {
  const { url } = useContext<INgrokContext>(NgrokUrlContext)
  const [liked, setLiked] = useState<boolean>(false)
  const [transferLikes, setTransferLikes] = useState<ILikes>()

  let clubFromName = ""
  for (let i = 0; i < 3; i++) {
    clubFromName += props.fromRelation.name[i].toUpperCase()
  }
  let clubToName = ""
  for (let i = 0; i < 3; i++) {
    clubToName += props.toRelation.name[i].toUpperCase()
  }

  useEffect(() => {
    getTransferLikes()
  }, [liked])

  function getTransferLikes() {
    const URL = `${url}/getLikes/${props.id}`
    const promise = axios.get(URL)
    promise.then(response => {
      const { data } = response
      setTransferLikes(data)
    })
      .catch(err => {
        console.log(err)
      })
  }

  async function likePost() {
    let transferId = await AsyncStorage.getItem(`${props.id}`)

    if (transferId == null) {
      const URL = `${url}/postLike`
      const promise = axios.post(URL, { transferId: props.id, liked: true })
      promise.then(() => {
        AsyncStorage.setItem(`${props.id}`, "true")
        liked ? setLiked(false) : setLiked(true)
      })
        .catch(err => {
          console.log(err)
        })
    } else {
      alert("já votou nessa transferência")
    }
  }

  async function dislikePost() {
    let transferId = await AsyncStorage.getItem(`${props.id}`)

    if (transferId == null) {
      const URL = `${url}/postLike`
      const promise = axios.post(URL, { transferId: props.id, liked: false })
      promise.then(() => {
        AsyncStorage.setItem(`${props.id}`, "true")
        liked ? setLiked(false) : setLiked(true)
      })
        .catch(err => {
          console.log(err)
        })
    } else {
      alert("já votou nessa transferência")
    }
  }


  return (
    <Box style={{ marginTop: 15 }}>
      <Player>
        <PlayerImage source={{ uri: props.player.photo }}></PlayerImage>

        <PlayerNameBox>
          <PlayerInfo>{props.player.name}</PlayerInfo>
        </PlayerNameBox>

        <PlayerInfoBox>
          <PlayerInfo style={{ fontWeight: 'bold' }}>{props.player.position}</PlayerInfo>
        </PlayerInfoBox>

        <PlayerInfoBox style={{ borderBottomWidth: 0 }}>
          <PlayerInfo>{props.player.nationality}</PlayerInfo>
        </PlayerInfoBox>
      </Player>

      <View style={{ display: 'flex', height: '80%', width: '67%' }}>
        <Infos>
          <StatusInfo>
            {
              props.status == "Negociando" ? (
                <Ionicons name='briefcase-sharp' color={"#fff"} size={35} />
              ) : props.status == "Melou" ? (
                <Ionicons name='close' color={"#f04c3e"} size={40} />
              ) : (
                <Ionicons name='checkmark' color={"#fff"} size={40} />
              )
            }
            <TransferStatus>{props.status}</TransferStatus>
          </StatusInfo>

          <StatusInfo style={{ borderRightWidth: 0 }}>
            <LikesBox>
              <Ionicons onPress={() => likePost()} name='thumbs-up-sharp' color={"#007300"} size={25} />
              <LikesPorcentage>{transferLikes?.likesResult !== null ? transferLikes?.likesResult : 0}%</LikesPorcentage>
            </LikesBox>

            <LikesBox>
              <Ionicons onPress={() => dislikePost()} name='thumbs-down-sharp' color={"#f04c3e"} size={25} />
              <LikesPorcentage>{transferLikes?.dislikesResult !== null ? transferLikes?.dislikesResult : 0}%</LikesPorcentage>
            </LikesBox>
          </StatusInfo>
        </Infos>

        <Clubs>
          <ClubBox>
            <ClubImage source={{ uri: props.fromRelation.photo }} />
            <ClubName>{clubFromName}</ClubName>
          </ClubBox>

          <Ionicons name='arrow-forward' color={"#fff"} size={40} />

          <ClubBox>
            <ClubImage source={{ uri: props.toRelation.photo }} />
            <ClubName>{clubToName}</ClubName>
          </ClubBox>
        </Clubs>
      </View>
    </Box>
  )
}