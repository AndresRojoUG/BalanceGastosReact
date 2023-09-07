import React from 'react'
import { useGlobalState } from '../context/GlobalState'


export default function Balance() {
  

    const {transactions}=useGlobalState()
   const amount= transactions.map(transaction=>transaction.amount)

   const total= amount.reduce((acc,item)=>(acc+=item),0).toFixed(2) 

  return (
    <div className='flex justify-between'><h1>Tu balance:</h1>
    
    <h2 className='text-2xl font-bold'>${total}</h2>
    </div>

  )
}
