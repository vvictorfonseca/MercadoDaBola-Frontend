import { createContext, ReactNode, useState } from "react";

export interface IPlayerId {
  playerId: number;
  setPlayerId: (newState: number) => void
}

const initialValue: IPlayerId = {
  playerId: 0,
  setPlayerId: () => {}
}

const PlayerIdContext = createContext(initialValue)
export default PlayerIdContext

interface IPlayerIdContextProps {
  children: ReactNode
}

export function PlayerIdProvider({ children }: IPlayerIdContextProps) {
  const [playerId, setPlayerId] = useState<number>(initialValue.playerId)

  return (
    <PlayerIdContext.Provider value={{ playerId, setPlayerId }}>
      { children }
    </PlayerIdContext.Provider>
  )
}