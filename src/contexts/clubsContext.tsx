import { createContext, ReactNode, useState } from "react";
import { IClub } from "../interfaces/IClubs";

export interface IClubsContext {
  clubs: IClub[];
  setClubs: (newState: IClub[]) => void
}

const initialValue: IClubsContext = {
  clubs: [],
  setClubs: () => {}
}

const ClubsContext = createContext<IClubsContext>(initialValue)
export default ClubsContext

interface IClubsContextProps {
  children: ReactNode
}

export function ClubsProvider({ children }: IClubsContextProps) {
  const [clubs, setClubs] = useState<IClub[]>(initialValue.clubs)

  return (
    <ClubsContext.Provider value={{ clubs, setClubs }}>
      { children }
    </ClubsContext.Provider>
  )
}