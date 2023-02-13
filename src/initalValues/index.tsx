import { INewTransfer } from "../interfaces/ITransfers"
import { IPlayer, IPlayerCreate, IPlayerFull } from "../interfaces/IPlayers"
import { IClub } from "../interfaces/IClubs"
import { Transfers } from "../interfaces/ITransfers"

export let transferDataObject: INewTransfer = {
  playerId: null,
  from: null,
  to: null,
  status: null
}

export let initalPlayerValue: IPlayerFull = {
  id: null,
  name: "",
  photo: "",
  position: "",
  age: null,
  nationality: ""
}

export let initalCreatePlayerValue: IPlayerCreate = {
  name: "",
  photo: "",
  position: "",
  age: 0,
  nationality: ""
}

export let initalClubValue: IClub = {
  id: null,
  name: "",
  photo: ""
}

export const transferInitialValue: Transfers = {
  id: 2,
  status: "",
  transferDate: "",
  player: {
    id: 0,
    name: "",
    age: 0,
    nationality: "",
    position: "",
    photo: ""
  },
  fromRelation: {
    id: 0,
    name: "",
    photo: "",
  },
  toRelation: {
    id: 0,
    name: "",
    photo: ""
  }
}