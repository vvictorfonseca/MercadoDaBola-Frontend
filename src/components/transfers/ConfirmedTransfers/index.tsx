import { useEffect, useState, useContext } from "react";
import { ListRenderItemInfo, FlatList, View } from "react-native";
import axios from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Spinner } from "native-base";

import { Transfers } from "../../../interfaces/ITransfers";

import TransferBox from "../TransferBox";

import NgrokUrlContext, { INgrokContext } from "../../../contexts/ngrokUrlContext";
import UpdateTransfersContext, { IUpdateTransfers } from "../../../contexts/updateTransfersContext";

export default function ConfirmedTranfers() {
  const { url } = useContext<INgrokContext>(NgrokUrlContext)
  const { update } = useContext<IUpdateTransfers>(UpdateTransfersContext)
  const [confirmedTransfers, setConfirmedTranfers] = useState<Transfers[]>()
  const [loading, setLoading] = useState<boolean>(false)

  async function deleteAsyncStorage() {
    try {
      await AsyncStorage.removeItem("admIsLogged")
      return true
    } 
    catch(err) {
      return false
    }
  }

  useEffect(() => {
    deleteAsyncStorage()
    getConfirmedTransfer()
  }, [update])

  function getConfirmedTransfer() {
    setLoading(true)
    const URL = `${url}/get/transfers/Fechado`

    const promise = axios.get(URL)
    promise.then(response => {
      const { data } = response
      setConfirmedTranfers(data)
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
        data={confirmedTransfers}
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