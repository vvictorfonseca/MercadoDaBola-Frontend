interface IStatus {
  fechado: string;
  negociando: string;
  melou: string
}

export interface INewTransfer {
  playerId: null | number;
  from: null | number;
  to: null | number;
  status: null | IStatus;
}