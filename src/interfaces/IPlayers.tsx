export interface IPlayer {
  id: number | null;
  name: string | null;
  photo: any;
}

export interface IPlayerFull {
  id: number | null;
  name: string | null;
  photo: any;
  position: string | null;
  age: number | null;
  nationality: string | null;
}

export interface IPlayerCreate {
  name: string
  photo: string
  position: string
  age: number
  nationality: string
}

export interface IPositionData {
  id: number
  position: string
}