import React, { useState, useContext } from 'react'
import uuid from 'uuid'
import { GlobalContext } from '../../context/globalstate'

export const AddTransection = () => {
  const [text, setText] = useState('')
  const [amount, setAount] = useState(0)

  const { addTransection } = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault()
    const newTransection = {
      id: uuid(),
      text,
      amount: +amount
    }
    addTransection(newTransection)
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={e => setAount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
