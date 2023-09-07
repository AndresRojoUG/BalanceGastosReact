

import {useGlobalState} from '../../context/GlobalState'
import {TransactionItem} from './TransactionItem'

export default function TransactionList() {

    const {transactions}=useGlobalState()
   
console.log('-------------TRANSACTIONS')
console.log(transactions)
  return (
    
    < >
        
        <h4 className=' w-full text-slate-300 text-lg font-bold block'> HISTORIAL DE TRANSACCIONES</h4>
        <ul>
        {
        transactions.map((transaction)=>(
           <TransactionItem transaction={transaction} key={transaction.id}/>
        ))
        }
        </ul>
      </>
  )
}
