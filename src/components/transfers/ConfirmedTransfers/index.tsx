import { useEffect, useState } from "react";
import { ListRenderItemInfo, FlatList, Text } from "react-native";
import axios from "axios";

import { Transfers } from "../../../interfaces/ITransfers";

import TransferBox from "../TransferBox";

export default function ConfirmedTranfers() {
  const [confirmedTransfers, setConfirmedTranfers] = useState<Transfers[]>()

  useEffect(() => {
    getConfirmedTransfer()
  }, [])

  function getConfirmedTransfer() {
    const URL = "https://7062-2804-d41-a777-8f00-9563-9ace-d072-cdb6.sa.ngrok.io/get/transfers/Fechado"

    const promise = axios.get(URL)
    promise.then(response => {
      const { data } = response
      console.log(data)
      setConfirmedTranfers(data)
    })
      .catch(err => {
        console.log(err)
      })
  }

  function renderTransfers({ item }: ListRenderItemInfo<Transfers>) {
    return <TransferBox {...item} />
  }
  
  return (
    <FlatList
      data={confirmedTransfers}
      renderItem={renderTransfers}
      contentContainerStyle={{
        display: 'flex',
        alignItems: 'center'
      }}
      style={{width: '100%', maxHeight: '80%'}}
    >
    </FlatList>
  )
}