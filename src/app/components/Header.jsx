"use client"
import Link from "next/link"

export default function Header() {
    return(
        <header>
            <div className="logo-part">
                <img src="/logo.png" alt="" />
            </div>
            <div className="navigation">
                <Link className="header-link" href={'/'}>Bosh sahifa</Link>
                <Link className="header-link" href={'/about'}>Biz haqimizda</Link>
                <Link className="header-link" href={'/theory'}>Nazariya</Link>
                <Link className="header-link" href={'/'}>Muammolar</Link>
                <Link className="header-link" href={'/'}>Dilemmalar</Link>
                <Link className="header-link" href={'/'}>Darsliklar</Link>
            </div>
        </header>
    )
}
