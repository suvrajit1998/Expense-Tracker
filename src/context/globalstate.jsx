import React, { createContext, useReducer } from 'react'

import { Appreducer } from './app.reducer'

const initialState = {
  transections: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ]
}

export const GlobalContext = createContext(initialState)

export const GlobalProviver = ({ children }) => {
  const [state, dispatch] = useReducer(Appreducer, initialState)

  const removeTransection = id => {
    dispatch({
      type: 'REMOVE_TRANSECTION',
      payload: id
    })
  }

  const addTransection = transection => {
    dispatch({
      type: 'ADD_TRANSECTION',
      payload: transection
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        transections: state.transections,
        removeTransection,
        addTransection
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
