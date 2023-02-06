export interface IClub {
  id: number | null;
  name: string | null;
  photo: any;
}

export interface IClubCreate {
  name: string;
  photo: string
}