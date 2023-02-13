import { useState, useEffect, useContext } from "react";
import { FlatList, ListRenderItemInfo, View } from "react-native";
import axios from "axios";

import { Spinner } from "native-base";

import { Transfers } from "../../../interfaces/ITransfers";

import TransferBox from "../TransferBox";

import NgrokUrlContext, { INgrokContext } from "../../../contexts/ngrokUrlContext";
import UpdateTransfersContext, { IUpdateTransfers } from "../../../contexts/updateTransfersContext";

export default function DealingTransfers() {
  const { url } = useContext<INgrokContext>(NgrokUrlContext)
  const { update } = useContext<IUpdateTransfers>(UpdateTransfersContext)
  const [dealingTransfers, setDealingTranfers] = useState<Transfers[]>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    getDealingTransfer()
  }, [update])

  function getDealingTransfer() {
    setLoading(true)
    const URL = `${url}/get/transfers/Negociando`

    const promise = axios.get(URL)
    promise.then(response => {
      const { data } = response
      setDealingTranfers(data)
      setLoading(false)
    })
      .catch(err => {
        console.log(err)
      })
  }

  function renderTransfers({ item }: ListRenderItemInfo<Transfers>) {
    return <TransferBox {...item} />
  }

  return (
    loading ? (
      <View style={ {display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '80%' }}>
        <Spinner size='lg' color={'#56bc31'} />
      </View>
    ) : (
      <FlatList
        data={dealingTransfers}
        renderItem={renderTransfers}
        contentContainerStyle={{
          display: 'flex',
          alignItems: 'center'
        }}
        style={{ width: '100%', maxHeight: '80%' }}
      >
      </FlatList>
    )
  )
}