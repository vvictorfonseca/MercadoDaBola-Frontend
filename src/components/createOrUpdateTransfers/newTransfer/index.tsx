import { useContext, useState } from "react";
import { Keyboard, ListRenderItemInfo, FlatList } from "react-native";

import axios from "axios";

import { Main } from "../main/style";
import { Box, Description, Input, styles } from "./style";

import { IPlayer } from "../../../interfaces/IPlayers";
import { INewTransfer } from "../../../interfaces/ITransfers";

import { transferDataObject } from "../../../initalValues";

import PlayersContext, { IPlayerContext } from "../../../contexts/playersContext";

import Player from "./player";
import Separator from "../../separator";
import NewPlayerComponent from "./newPlayerComponent";

import SetPlayer from "./setPlayer";

export default function NewTransfer() {
  const [transferData, setTransferData] = useState<INewTransfer>(transferDataObject)
  
  return (
    <Main onPress={Keyboard.dismiss}>
      {
        transferData.playerId == null ? (
          <SetPlayer />
        ) : (
          null
        )
      }
    </Main>
  )
}