import { useContext } from "react";
import { Box, Name } from "../PlayerAndClubBox/style";

import { IStatusData } from "../../../../../interfaces/ITransfers";

import NewTransferContext, {INewTransferContext} from "../../../../../contexts/newTransferContext";

export default function StatusBox(props: IStatusData) {
  const { transferData, setTransferData } = useContext<INewTransferContext>(NewTransferContext)
  return (
    <Box onPress={() => {
      setTransferData({...transferData, status: props.name})
    }} 
      style={props.name == "Fechado" ? {display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15, width:'100%' } : {display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
    >
      <Name style={{fontWeight: 'bold'}}>{props.name}</Name>
    </Box>
  )
}