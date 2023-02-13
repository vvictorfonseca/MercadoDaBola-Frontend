import { IPlayerFull } from "./IPlayers";
import { IClub } from "./IClubs";

export interface INewTransfer {
  playerId: null | number;
  from: null | number;
  to: null | number;
  status: null | string;
}

export interface IUpdateTransfer {
  id: number;
  playerId: null | number;
  from: null | number;
  to: null | number;
  status: undefined | null | string;
}

export interface IStatusData {
  name: string
}

export interface Transfers {
  id: number;
  status: string;
  transferDate: string;
  player: IPlayerFull;
  fromRelation: IClub;
  toRelation: IClub;
}