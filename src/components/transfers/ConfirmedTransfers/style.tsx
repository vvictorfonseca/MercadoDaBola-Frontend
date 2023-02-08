import { FlatList } from "react-native";
import { Transfers } from "../../../interfaces/ITransfers";
import styled from "styled-components/native";

export const TransferList = styled(FlatList as new() => FlatList<Transfers>)`
  width: 100%;
  height: 100%;
`