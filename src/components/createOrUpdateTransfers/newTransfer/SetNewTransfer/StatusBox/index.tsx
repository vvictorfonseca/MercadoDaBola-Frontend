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
      style={props.name == "Fechado" ? {borderBottomLeftRadius: 15, borderBottomRightRadius: 15} : null}
    >
      <Name>{props.name}</Name>
    </Box>
  )
}