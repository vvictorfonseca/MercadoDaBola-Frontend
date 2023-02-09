import { createContext, ReactNode, useState } from "react";

const URL: string = "https://7062-2804-d41-a777-8f00-9563-9ace-d072-cdb6.sa.ngrok.io"

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