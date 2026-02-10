"use client"

import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"

export default function Case() {
    return(
        <>
            <Header></Header>
                <section className="case-explanation">
                    <h1>XALQARO TAJRIBA. AQSH, TEXAS SHTATI. LAREDONING KRIMINALIST  BLOGERI (2025)</h1>
                    <p>Jurnalist maxfiy axborotni oshkor qilmaslik, rasmiy ma’lumotdan mas’uliyat bilan foydalanish, zarar yetkazmaslik va kasbiy etikaga rioya qilish tamoyillarini buzgan.</p>
                    <iframe src="/case-3.pdf" className="pdf-viewer" frameBorder={0}></iframe>
                    <p><strong>Tavsiyalar:</strong> <br /> -Jurnalist har qanday yoʻl bilan rasmiy maʼlumotga ega boʻlgach, bu xabar  ortiq sir hisoblanmaydi. Shu oʻrinda uni eʼlon qilish ham qonunga zid emas. Bunday vaziyatda maʼlumotni oshkor qilgan tashkilot xodimlari javobgarlikka tortilishi zarur; <br />- Texasning b120ir qancha nashrlari va “Washington Post” gazetasi jurnalist himoyasiga oʻtib, u hech qanday qonunchilikka zid xatti-harakat qilmagan, deb topishgan. Mazkur holatda jurnalist emas, balki politsiya xodimiga nisbatan jazo choralari koʻrilishi lozimdir.</p>
                    <a href="/case-3.pdf" className="case-download" download>To'liq PDF yuklash</a>
                </section>
            <Footer></Footer>
        </>
    )
}