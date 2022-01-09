import { createContext, useContext, useState } from 'react'

// Crear el contexto
const CheckContext = createContext()
// eslint-disable-next-line import/prefer-default-export
export const CheckProvider = ({ children }) => {
  const [checkAll, setCheckAll] = useState()
  return (
    <CheckContext.Provider value={{ checkAll, setCheckAll }}>
      {children}
    </CheckContext.Provider>
  )
}

export const useStateCheck = () => {
  const context = useContext(CheckContext)
  if (context === undefined) {
    throw new Error('useStateAuth must be used within a AuthProvider')
  }

  return context
}
