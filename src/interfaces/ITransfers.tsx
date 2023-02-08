import { IPlayerFull } from "./IPlayers";
import { IClubCreate } from "./IClubs";

export interface INewTransfer {
  playerId: null | number;
  from: null | number;
  to: null | number;
  status: null | string;
}

export interface IStatusData {
  name: string
}

export interface Transfers {
  id: string;
  status: string;
  transferDate: string;
  player: IPlayerFull;
  fromRelation: IClubCreate;
  toRelation: IClubCreate;
}