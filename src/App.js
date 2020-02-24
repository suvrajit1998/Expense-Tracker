import React from 'react'
import './App.css'

import Header from './components/header/header.components'
import { Balence } from './components/balence/balence.component'
import { IcomeExpense } from './components/income-expense/income-expenses.component'
import { TransectionList } from './components/transection-list/transection-list.component'
import { AddTransection } from './components/add-transection/add-transection.component'
import { GlobalProviver } from './context/globalstate'

const App = () => {
  return (
    <GlobalProviver>
      <Header />
      <div className="container">
        <Balence />
        <IcomeExpense />
        <TransectionList />
        <AddTransection />
      </div>
    </GlobalProviver>
  )
}

export default App
