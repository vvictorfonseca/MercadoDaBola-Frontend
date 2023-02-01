import { useState, useContext, useEffect } from "react"
import axios from "axios"

import { Box, Player, Infos, Clubs, Button, TextButton } from "./style"

import { IPlayer } from "../../../../interfaces/IPlayers"
import { IClub } from "../../../../interfaces/IClubs"

import NewTransferContext, { INewTransferContext } from "../../../../contexts/newTransferContext"
import { Text, View } from "react-native"

export default function ConfirmTransfer() {
  const { transferData } = useContext<INewTransferContext>(NewTransferContext)
  const [player, setPlayer] = useState<IPlayer>()
  const [clubFrom, setClubFrom] = useState<IClub>()
  const [clubTo, setClubTo] = useState<IClub>()

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

  return (
    <>
      <Box>
        <Player>

        </Player>
        <View style={{ display: 'flex', height: '80%', width: '67%' }}>
          <Infos></Infos>
          <Clubs></Clubs>
        </View>

      </Box>

      <Button>
        <TextButton>Salvar</TextButton>
      </Button>
      <Button style={{marginTop: 10}}>
        <TextButton>Voltar</TextButton>
      </Button>
    </>
  )
}