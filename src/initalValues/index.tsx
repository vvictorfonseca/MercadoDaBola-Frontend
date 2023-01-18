import { INewTransfer } from "../interfaces/ITransfers"
import { IPlayer } from "../interfaces/IPlayers"

export let transferDataObject: INewTransfer = {
  playerId: null,
  from: null,
  to: null,
  status: null
}

export let initalPlayerValue: IPlayer = {
  id: null,
  name: null,
  photo: null
}