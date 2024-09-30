'use client'

import { useState, useEffect} from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <header className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? 'bg-[#020B2D] shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
            <Link href="/" className="flex items-center">
                <Image
                    src="/logo.png"
                    alt="UPEX Logo"
                    width={720}
                    height={240}
                    className="h-10 w-auto"
                />
                <span className="sr-only">UPEX</span>
            </Link>
            {/* <div className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2]">UPEX</div> */}
            <nav className="hidden md:block">
                <ul className="flex space-x-4 md:space-x-6">
                <li><Link href="#" className="hover:text-[#00FFFF]">Sandbox</Link></li>
                <li><Link href="#" className="hover:text-[#00FFFF]">Blackhole</Link></li>
                <li><Link href="#" className="hover:text-[#00FFFF]">Galaxy</Link></li>
                <li><Link href="#" className="hover:text-[#00FFFF]">Satellite</Link></li>
                <li><Link href="#" className="hover:text-[#00FFFF]">Community</Link></li>
                </ul>
            </nav>
            <div className="flex items-center space-x-4">
                <Button variant="outline" className="hidden md:inline-flex bg-[#8A2BE2] text-white hover:bg-[#6A1B9A]">Login</Button>
                <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#020B2D]">
                    <nav className="flex flex-col space-y-4 mt-8">
                    <Link href="#" className="text-lg hover:text-[#00FFFF]">Sandbox</Link>
                    <Link href="#" className="text-lg hover:text-[#00FFFF]">Blackhole</Link>
                    <Link href="#" className="text-lg hover:text-[#00FFFF]">Galaxy</Link>
                    <Link href="#" className="text-lg hover:text-[#00FFFF]">Satellite</Link>
                    <Link href="#" className="text-lg hover:text-[#00FFFF]">Community</Link>
                    <Button className="mt-4 bg-[#8A2BE2] text-white hover:bg-[#6A1B9A]">Sign In</Button>
                    </nav>
                </SheetContent>
                </Sheet>
            </div>
            </div>
        </header>
    );
};