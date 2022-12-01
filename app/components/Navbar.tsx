import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="px-4 text-3xl text-black">
      <div className="max-w-7xl mx-auto py-3 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold">
          <span className="text-teal-600">7Amery</span> Crescent
        </Link>
        <nav className="flex items-center space-x-2">
          <Link href="/rooms" className="uppercase text-sm text-slate-700">Rooms</Link>
          <Link href="/attractions" className="uppercase text-sm text-slate-700">Attractions</Link>
          <Link href="/contact" className="uppercase text-sm text-slate-700">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar
