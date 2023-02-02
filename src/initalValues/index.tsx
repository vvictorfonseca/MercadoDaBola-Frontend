import { INewTransfer } from "../interfaces/ITransfers"
import { IPlayer, IPlayerFull } from "../interfaces/IPlayers"
import { IClub } from "../interfaces/IClubs"

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

export let initalClubValue: IClub = {
  id: null,
  name: "",
  photo: ""
}