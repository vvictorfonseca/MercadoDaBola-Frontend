import { useState, useEffect, useContext } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import axios from "axios";

import { Transfers } from "../../../interfaces/ITransfers";

import TransferBox from "../TransferBox";

import NgrokUrlContext, {INgrokContext} from "../../../contexts/ngrokUrlContext";
import UpdateTransfersContext, { IUpdateTransfers } from "../../../contexts/updateTransfersContext";

export default function DealingTransfers() {
  const { url } = useContext<INgrokContext>(NgrokUrlContext)
  const { update } = useContext<IUpdateTransfers>(UpdateTransfersContext)
  const [dealingTransfers, setDealingTranfers] = useState<Transfers[]>()

  useEffect(() => {
    getDealingTransfer()
  }, [update])

  function getDealingTransfer() {
    const URL = `${url}/get/transfers/Negociando`

    const promise = axios.get(URL)
    promise.then(response => {
      const { data } = response
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