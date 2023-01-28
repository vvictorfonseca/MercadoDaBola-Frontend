import { FlatList, ListRenderItemInfo } from "react-native"
import { useContext, useState } from "react"
import axios from "axios"

import { Box, Description, Input, styles } from "../style"

import { IClub } from "../../../../interfaces/IClubs"
import ClubsContext, { IClubsContext } from "../../../../contexts/clubsContext"

import CreatePlayerOrClub from "../CreatePlayerOrClub"

import PlayerAndClubBox from "../PlayerAndClubBox"
import Separator from "../../../separator"

export default function SetClub() {
  const [clubName, setClubName] = useState<string>("")
  const {clubs, setClubs} = useContext<IClubsContext>(ClubsContext)

  function getClubInitals(clubName: string) {
    clubName == "" ? setClubs([]) : null
    const URL = `https://135f-2804-14d-2a21-92c7-45e-6bb3-fe2e-9.sa.ngrok.io/get/clubs/${ clubName }`

    const promise = axios.get(URL)
    promise.then(response => {
      const { data } = response
      setClubs(data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  function onChangeFunction(clubName: string) {
    setClubName(clubName)
    getClubInitals(clubName)
  }

  function renderClubs({ item }: ListRenderItemInfo<IClub>) {
    return <PlayerAndClubBox {...item} />
  }
  
  return (
    <>
      <Box style={clubs.length == 0 && clubName == "" ? { borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }: null}>
        <Description style={{textAlign: 'center'}}>Digite o nome do Clube atual do Jogador</Description>
        <Input placeholder="Nome" maxLength={20} value={clubName} onChangeText={onChangeFunction} />
      </Box>
      {
        clubName !== "" && clubs.length == 0 ? (
          <CreatePlayerOrClub />
        ) : (
          <FlatList 
            contentContainerStyle={styles.FlatList}
            ItemSeparatorComponent={Separator}
            data={clubs}
            renderItem={renderClubs}
            keyExtractor={(item) => `${item.id}`}
          />
        )
      }
    </>
  )
}