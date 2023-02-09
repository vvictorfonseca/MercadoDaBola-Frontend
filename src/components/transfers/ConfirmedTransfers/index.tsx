import { useEffect, useState, useContext } from "react";
import { ListRenderItemInfo, FlatList } from "react-native";
import axios from "axios";

import { Transfers } from "../../../interfaces/ITransfers";

import TransferBox from "../TransferBox";

import NgrokUrlContext, {INgrokContext} from "../../../contexts/ngrokUrlContext";
import UpdateTransfersContext, { IUpdateTransfers } from "../../../contexts/updateTransfersContext";

export default function ConfirmedTranfers() {
  const { url } = useContext<INgrokContext>(NgrokUrlContext)
  const { update } = useContext<IUpdateTransfers>(UpdateTransfersContext)
  const [confirmedTransfers, setConfirmedTranfers] = useState<Transfers[]>()

  useEffect(() => {
    getConfirmedTransfer()
  }, [update])

  function getConfirmedTransfer() {
    const URL = `${url}/get/transfers/Fechado`

    const promise = axios.get(URL)
    promise.then(response => {
      const { data } = response
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