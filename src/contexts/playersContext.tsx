import { createContext, ReactNode, useState } from "react";
import { IPlayer } from "../interfaces/IPlayers";

export interface IPlayerContext {
  players: IPlayer[];
  setPlayers: (newState: IPlayer[]) => void
}

const initalValue: IPlayerContext = {
  players: [],
  setPlayers: () => {}
}

const PlayersContext = createContext<IPlayerContext>(initalValue);
export default PlayersContext

export interface IPlayerContextProps {
  children: ReactNode
}

export function PlayersProvider({ children }: IPlayerContextProps) {
  const [players, setPlayers] = useState<IPlayer[]>(initalValue.players)

  return (
    <PlayersContext.Provider value={{ players, setPlayers }}>
      { children }
    </PlayersContext.Provider>
  )
}