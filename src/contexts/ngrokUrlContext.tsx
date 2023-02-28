import { createContext, ReactNode, useState } from "react";

const URL: string = "https://26aa-2804-14d-5083-92f6-c4d5-8d73-1a1d-4ce8.sa.ngrok.io"

export interface INgrokContext {
  url: string
  setUrl: (newState: string) => void
}

const initialValue: INgrokContext = {
  url: URL,
  setUrl: () => {}
}

const NgrokUrlContext = createContext(initialValue)
export default NgrokUrlContext

interface INgrokContextProps {
  children: ReactNode
}

export function NgrokUrlProvider({ children }: INgrokContextProps) {
  const [url, setUrl] = useState<string>(initialValue.url)
  
  return (
    <NgrokUrlContext.Provider value={{ url, setUrl }}>
      { children }
    </NgrokUrlContext.Provider>
  )
}