import { useGlobalState } from "../context/GlobalState"


export default function IncomeRxpenses() {

   const{transactions} =useGlobalState()

   const amount=transactions.map(transactions=>transactions.amount)

   const income=amount.filter(item=>item>0)
                    .reduce((acc,item)=>(acc+=item),0).toFixed(2)

 const expense=amount.filter(item=>item<0)
                    .reduce((acc,item)=>(acc+=item),0).toFixed(2) * -1
  return (
  <>
  <div className="flex justify-between my-2">
    <h4>Ingresos</h4>

  <p>${income}</p>
  </div>
  
  <div className="flex justify-between my-2">
    
    <h4>Gastos</h4>

  <p>${expense}</p>
  </div>
  </>
  )
}
