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
                        <h1>Sahifalar</h1>
                        <Link href={'/'} className="footer-link">Biz haqimizda</Link>
                        <Link href={'/theory'} className="footer-link">Nazariya</Link>
                        <Link href={'/education'} className="footer-link">Darsliklar</Link>
                        <Link href={'/problems'} className="footer-link">Muammolar</Link>
                    </div>
                    <div className="footer-card">
                        <h1>Resurslar</h1>
                        <Link href={'/glossary'} className="footer-link">Atamalar lug‘ati</Link>
                        <Link href={'/dillemas'} className="footer-link">Dilemmalar</Link>
                    </div>
                    <div className="footer-card">
                        <h1>Aloqa</h1>
                        <p className="footer-link">xilola08051982@gmail.com, n.qosimova2012@yandex.com</p>
                        <p className="footer-link">phone</p>
                        <p className="footer-link">100017, O'zbekiston Respublikasi, Toshkent shahri, Markaz-5, 88-uy</p>
                    </div>
                </div>
                <hr className="line" />
                <div className="platform-info">© 2026 Media Ethics. Barcha huquqlar himoyalangan.</div>
            </footer>
        </>
    )
}