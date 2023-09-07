import React, { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState'

export default function TransactionForm() {

  const {addTransaction}=useGlobalState()
 
  //El useState se ocupa para guardar los valores cuando quiero cambiar algo y para poner los valores 
  //
  const[description,setDescription]=useState("")
  const[amount,setAmount]=useState(0)

  const onSubmit=(e)=>{
    e.preventDefault()
    addTransaction({
      id:window.crypto.randomUUID(),
      description,
      amount:+amount
    })

    setAmount(0)
    setDescription('')
  }
  return (
    <div>

    <form onSubmit={onSubmit}>
      <input className='rounded-lg py-2 block mb-2 w-full bg-slate-600  text-white px-3' type="text" placeholder='Ingresa una descricion' onChange={(e)=>setDescription(e.target.value)} value={description} />
      <input value={amount} className= ' rounded-lg py-2 block mb-2 w-full bg-slate-600  text-white px-3' type="number" placeholder='00.00' step={0.01} onChange={(e)=>setAmount(e.target.value)} />
      <button className='bg-red-700 text-white rounded-lg block py-2 mb-2 w-full'>Ingresa transaccion</button>
    </form>

    </div>
  )
}
