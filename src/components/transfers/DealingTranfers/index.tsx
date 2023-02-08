import { useState, useEffect } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import axios from "axios";

import { Transfers } from "../../../interfaces/ITransfers";

import TransferBox from "../TransferBox";

export default function DealingTransfers() {
  const [dealingTransfers, setDealingTranfers] = useState<Transfers[]>()

  useEffect(() => {
    getDealingTransfer()
  }, [])

  function getDealingTransfer() {
    const URL = "https://7062-2804-d41-a777-8f00-9563-9ace-d072-cdb6.sa.ngrok.io/get/transfers/Negociando"

    const promise = axios.get(URL)
    promise.then(response => {
      const { data } = response
      console.log(data)
      setDealingTranfers(data)
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
      data={dealingTransfers}
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