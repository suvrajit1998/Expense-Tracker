import React, { useContext } from 'react'
import { GlobalContext } from '../../context/globalstate'

export const Balence = () => {
  const { transections } = useContext(GlobalContext)

  const amounts = transections.map(transection => transection.amount)

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">{total}</h1>
    </>
  )
}
