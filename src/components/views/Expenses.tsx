import React from 'react'
import { Payment,columns } from '../custom/ExpensesTable/column'
import { DataTable } from '../custom/ExpensesTable/DataTable'

 function getData(): Payment[] {
  function generateId() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  
  const items = [];
  const categories = ['Compra de ropa', 'Compra de alimentos', 'Pago de servicios', 'Entretenimiento', 'Transporte'];
  const accounts = ['Cuenta de Ahorros', 'Cuenta Corriente'];
  
  for (let i = 0; i < 35; i++) {
    const item = {
      id: generateId(),
      name: categories[Math.floor(Math.random() * categories.length)],
      amount: Math.floor(Math.random() * 500) + 100,
      account: accounts[Math.floor(Math.random() * accounts.length)],
      date: new Date(2023, 10, Math.floor(Math.random() * 30) + 1).toISOString(),
    };
    items.push(item);
  }
  return items
  
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
