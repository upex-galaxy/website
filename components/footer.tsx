'use client'

import Link from "next/link"

export default function Header() {
  return (
    <footer className="bg-[#020B2D] py-6 px-4">
        <div className="container mx-auto text-center">
            <p className="mb-4 text-white">Experience the future of QA with our revolutionary Galaxy workspace</p>
            <div className="flex flex-wrap justify-center space-x-4">
            <Link href="#" className="text-white hover:text-[#00FFFF] mb-2">About Us</Link>
            <Link href="#" className="text-white hover:text-[#00FFFF] mb-2">Contact</Link>
            <Link href="#" className="text-white hover:text-[#00FFFF] mb-2">Privacy Policy</Link>
            <Link href="/terms-of-use" className="text-white hover:text-[#00FFFF] mb-2">Terms of Use</Link>
            </div>
        </div>
    </footer>
  );
}