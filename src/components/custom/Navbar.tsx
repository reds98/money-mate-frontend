import React from 'react'
import Container from '../ui/container'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Menu, Moon, Sun } from 'lucide-react';
import { ModeToggle } from './ModeToggle';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
export default function Navbar() {
    const routes = [
        {
            href: "/",
            label: "Dashboard",
        },
        {
            href: "accounts",
            label: "Accounts",
        },
        {
            href: "categories",
            label: "Categories",
        },
    ];
    return (
        <header className=' sm:flex sm:justify-between py-3 px-4 border-b'>
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
                    <div className="flex items-center">
                        <Sheet>
                            <SheetTrigger>
                                <Menu className='h-6 md:hidden' />
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                                <nav className="flex flex-col gap-4">
                                    {routes.map((route, i) => (
                                        <SheetClose asChild>
                                            <Button asChild variant="ghost">
                                                <Link
                                                    key={i}
                                                    to={route.href}
                                                    className="text-sm font-medium transition-colors"
                                                >
                                                    {route.label}
                                                </Link>
                                            </Button>
                                        </SheetClose>
                                    ))}
                                </nav>
                            </SheetContent>

                        </Sheet>
                        <Link to={"/"} className='ml-4 lg:ml-0'>
                            <h1 className='text-2xl font-bold'>Money Mate</h1>
                        </Link>
                    </div>
                    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
                        {routes.map((route, i) => (
                            <Button asChild variant="ghost">
                                <Link
                                    key={i}
                                    to={route.href}
                                    className="text-sm font-medium transition-colors"
                                >
                                    {route.label}
                                </Link>
                            </Button>
                        ))}
                    </nav>
                    <div className="flex items-center">
                        <ModeToggle />
                    </div>
                </div>


            </Container>
        </header>
    )
}
