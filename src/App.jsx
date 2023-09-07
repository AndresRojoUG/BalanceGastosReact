import React from 'react'
import { GlobalProvider } from './context/GlobalState'
import Header from './components/Header'
import Balance from './components/balance'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionList from './components/transactions/TransactionList'
import IncomeRxpenses from './components/IncomeRxpenses'
import ExpenseChart from './components/transactions/ExpenseChart'

export default function App() {
  return (
    <GlobalProvider>
      <div className='bg-violet-950 text-white min-h-screen flex justify-center m-auto items-center'>
        <div className='container mx-auto w-4/6 p-auto'>
          <div className='bg-violet-800 p-10 rounded-lg flex gap-x-4'>

            <div className=''>
              <Header />
              <IncomeRxpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className='flex flex-col flex-1'>
              <ExpenseChart/>
              <TransactionList />
            </div>

          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}
