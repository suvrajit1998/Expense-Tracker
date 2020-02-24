import React, { useContext } from 'react'
import { GlobalContext } from '../../context/globalstate'
import { Transection } from '../transction/transection.componennt'

export const TransectionList = () => {
  const { transections } = useContext(GlobalContext)

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transections.map(transection => (
          <Transection key={transection.id} transection={transection} />
        ))}
      </ul>
    </div>
  )
}
