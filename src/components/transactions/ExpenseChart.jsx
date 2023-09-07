import {VictoryPie,VictoryLabel,VictoryChart} from 'victory'
import { useGlobalState } from '../../context/GlobalState'

function ExpenseChart() {

    const {transactions}=useGlobalState()

   

    const totalIngresos=transactions.filter(item=>item.amount>0)
    .reduce((acc,item)=>(acc+=item.amount),0)
    const totalGastos=transactions.filter(item=>item.amount<0)
    .reduce((acc,item)=>(acc+=item.amount),0)*-1

    const porcetanjeGstos= Math.round(totalGastos/(totalGastos+totalIngresos)*100)
    console.log('-----------------PORCENTAJE GASTOS?------------------')
    console.log(porcetanjeGstos)
    const porcetanjeIngresos=100-porcetanjeGstos 

    console.log('-----------------PORCENTAJE ingresos?------------------')
    console.log(porcetanjeIngresos)
    const def=0
  return (
   <VictoryPie
   colorScale={[" rgb(173, 26, 26)","rgb(79, 201, 79)"]}
   data={[
     { x: "Gastos", y:isNaN(porcetanjeGstos)?0:porcetanjeGstos},
     { x: "Ingresos", y:isNaN(porcetanjeIngresos)?0:porcetanjeIngresos},
    
   ]}
   animate={{duration:3000}}
   labels={({datum})=> `${datum.y}%`}
   labelComponent={<VictoryLabel angle={-70} style={{fill:"white"}}/>}
 />
  )
}

export default ExpenseChart