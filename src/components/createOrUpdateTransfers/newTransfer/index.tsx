import { useState } from "react";

import { INewTransfer } from "../../../interfaces/ITransfers";
import { transferDataObject } from "../../../initalValues";

import { Main } from "../main/style";
import { Box, Description, Input } from "./style";

export default function NewTransfer() {
  const [transferData, setTransferData] = useState<INewTransfer>(transferDataObject)

  return (
    <Main>
      <Box>
        <Description>Digite o nome do jogador</Description>
        <Input />
      </Box>
    </Main>
  )
}