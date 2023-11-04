"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { CaretSortIcon } from '@radix-ui/react-icons'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
    id: string
    name: string
    amount: number
    account: string
    date: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "name",
        header: "Nombre",
    },
    {
        accessorKey: "amount",
        header: "Monto",
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className=" font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "account",
        // header: "Cuenta",
        header: ({ column }) => {
            return (
                <div className="flex"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <Button
                        variant="ghost"
                        
                    >
                        Cuenta
                       

                    </Button>
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </div>

            )
        },
    },
    {
        accessorKey: "date",
        header: "Fecha",
        cell: ({ row }) => {
            const rawDate: string = row.getValue("date");  // Asumiendo que "date" es el nombre de la columna
            const dateObject = new Date(rawDate);
            const formattedDate = dateObject.toLocaleDateString("es-ES", {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit'
            });

            return <div className="font-medium">{formattedDate}</div>
        },
    },
    {
        accessorKey: "opciones",
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.id)}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
