import React, { createContext, useContext, useState } from "react";

interface ContextHomeProviderProps {
  children: React.ReactNode
}

interface Notice {
  id: number,
  title: string,
}

export interface TypeOfContext {
  titleForAllSection: string
  articles: Notice[]
}

const INITIAL_CONTEXT: TypeOfContext = {
  titleForAllSection : "El mejor titulo",
  articles : [
    {
      id: 1,
      title: 'Noticia 1'
    },
    {
      id: 2,
      title: 'Noticia 1'
    },
    {
      id: 3,
      title: 'Noticia 1'
    }
  ]
}

export const ContextHome = createContext<{stateHome: TypeOfContext, setStateHome: React.Dispatch<TypeOfContext>}>({
  stateHome: INITIAL_CONTEXT,
  setStateHome: () => null
})

export const ContextHomeProvider: React.FC<ContextHomeProviderProps> = ({ children }) => {
  const [stateHome, setStateHome] = useState<TypeOfContext>(INITIAL_CONTEXT)
  const value = { stateHome, setStateHome }

  return (
    <ContextHome.Provider value={value}>
      {children}
    </ContextHome.Provider>
  )
}

export const useContextHomeProvider = () => {
  const context = useContext(ContextHome)
  if(context === undefined) {
    throw new Error('No puede usar este beta muy bacano')
  }

  return context
}