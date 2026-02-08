"use client"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Header() {

    const [open, setOpen] = useState(false);


    return(
        <header>
            <div className="logo-part">
                <img src="/logo.png" alt="" />
            </div>
            <div className="navigation">
                <Link className="header-link" href={'/'}>Bosh sahifa</Link>
                <Link className="header-link" href={'/about'}>Biz haqimizda</Link>
                <Link className="header-link" href={'/theory'}>Nazariya</Link>
                <Link className="header-link" href={'/cases'}>Keyslar</Link>
                <Link className="header-link" href={'/'}>Dilemmalar</Link>
                <Link className="header-link" href={'/education'}>Darsliklar</Link>
            </div>


            <button className={`burger ${open ? "open" : ""}`}  onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </button>


            <nav className={`mobileMenu ${open ? "show" : ""}`}>
                <Link className="header-link" href={'/'} onClick={() => setOpen(false)}>Bosh sahifa</Link>
                <Link className="header-link" href={'/about'} onClick={() => setOpen(false)}>Biz haqimizda</Link>
                <Link className="header-link" href={'/theory'} onClick={() => setOpen(false)}>Nazariya</Link>
                <Link className="header-link" href={'/cases'} onClick={() => setOpen(false)}>Keyslar</Link>
                <Link className="header-link" href={'/'} onClick={() => setOpen(false)}>Dilemmalar</Link>
                <Link className="header-link" href={'/education'} onClick={() => setOpen(false)}>Darsliklar</Link>
            </nav>
        </header>
    )
}
