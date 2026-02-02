"use client"

import Link from "next/link"

export default function Footer() {
    return(
        <>
            <footer>
                <div className="footer-container">
                    <div className="footer-card">
                        <h1>Media etika platformasi</h1>
                        <p>Nazariya, amaliy holatlar va muhokamalar orqali ommaviy axborot vositalaridagi axloqiy muammolar va dilemmalarni o‘rganish.</p>
                    </div>
                    <div className="footer-card">
                        <h1>Pages</h1>
                        <Link href={'/'} className="footer-link">Biz haqimizda</Link>
                        <Link href={'/'} className="footer-link">Nazariya</Link>
                        <Link href={'/'} className="footer-link">Darsliklar</Link>
                        <Link href={'/'} className="footer-link">Muammolar</Link>
                    </div>
                    <div className="footer-card">
                        <h1>Resources</h1>
                        <Link href={'/'} className="footer-link">Atamalar lug‘ati</Link>
                        <Link href={'/'} className="footer-link">Dilemmalar</Link>
                    </div>
                    <div className="footer-card">
                        <h1>Contact</h1>
                        <p className="footer-link">email</p>
                        <p className="footer-link">phone</p>
                        <p className="footer-link">address</p>
                    </div>
                </div>
                <hr className="line" />
                <div className="platform-info">© 2026 Media Ethics. Barcha huquqlar himoyalangan.</div>
            </footer>
        </>
    )
}