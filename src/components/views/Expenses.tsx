import React from 'react'
import { Payment,columns } from '../custom/ExpensesTable/column'
import { DataTable } from '../custom/ExpensesTable/DataTable'

 function getData(): Payment[] {
  // Fetch data from your API here.

  // export type Payment = {
  //   id: string
  //   name:string
  //   amount: number
  //   account:string
  //   date: Date
  // }
  
  return [
    {
      id: "728ed52f",
      name:'Compra de ropa',
      amount: 100,
      account: "Cuenta de Ahorros",
      date: "2023-11-01T06:00:00.000Z",
    },
    {
      id: "728ed52f",
      name:'Compra de alimentos',
      amount: 200,
      account: "Cuenta de Ahorros",
      date: "2023-11-01T06:00:00.000Z",
    },
    // ...
  ]
}
export default  function Expenses() {
  const data =  getData()
 
  return (
    <div className="container mx-auto py-10 space-y-4">
      <h1 className='text-xl font-bold tracking-tight '>Gastos</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
