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
  name: string | null;
  photo: string | null;
  position: string | null;
  age: number | null;
  nationality: string | null;
}

export interface IPositionData {
  id: number
  position: string
}