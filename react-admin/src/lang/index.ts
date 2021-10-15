import React, { useContext } from 'react'

const LangContext = React.createContext()

function useLang() {
  const ctx = useContext(LangContext)
  return ctx
}

const LangProvider = LangContext.Provider

export {
  useLang,
  LangProvider
}
