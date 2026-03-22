"use client"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function DigitalDilemma() {
    return(
        <>
        <Header></Header>
        <div className="dilemmaHero">
            <h1>Sun’iy intellekt asosida yaratilgan xabarlarda inson nazorati: tezkorlik va axloqiy xavflar o‘rtasidagi dilemma</h1>
            <p>Darhaqiqat, sun’iy intellekt (SI) asosida yaratilgan xabarlar tezkorlikni sezilarli darajada oshiradi, biroq inson tomonidan amalga oshiriladigan tahrir, fakt tekshiruvi va axloqiy nazoratning yetishmasligi jiddiy muammolarni yuzaga keltiradi.</p>
        </div>
            <section className="digitalDilemmas">
                <div className="dilemmaInfo">
                    <p>Darhaqiqat, sun’iy intellekt (SI) asosida yaratilgan xabarlar tezkorlikni sezilarli darajada oshiradi, biroq inson tomonidan amalga oshiriladigan tahrir, fakt tekshiruvi va axloqiy nazoratning yetishmasligi jiddiy muammolarni yuzaga keltiradi. Bu axloqiy va professional dilemma jurnalistik standartlar bilan raqamli texnologiyalar samaradorligi o‘rtasidagi ziddiyatni ko‘rsatadi.</p>
                </div>
                <iframe src="/aidillema1.pdf" frameBorder={0}></iframe>
            </section>  
        <Footer></Footer>
        </>
    )
}