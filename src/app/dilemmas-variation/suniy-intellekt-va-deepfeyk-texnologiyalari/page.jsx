"use client"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function DigitalDilemma() {
    return(
        <>
        <Header></Header>
        <div className="dilemmaHero">
            <h1>Sun’iy intellekt va deepfeyk texnologiyalari: jurnalistik ishonchlilikka tahdid va axloqiy qaror qabul qilish muammosi</h1>
            <p>Raqamli transformatsiya sharoitida sun’iy intellekt va algoritmik texnologiyalar jurnalistik faoliyati</p>
        </div>
            <section className="digitalDilemmas">
                
                <div className="dilemmaInfo">
                    <p>Raqamli transformatsiya sharoitida sun’iy intellekt va algoritmik texnologiyalar jurnalistik faoliyatni yangi bosqichga olib chiqmoqda. Ushbu texnologiyalar axborotni tezkor qayta ishlash, katta hajmdagi ma’lumotlarni tahlil qilish hamda auditoriyaga mos kontent yaratish imkoniyatlarini kengaytiradi.</p>
                </div>
                <iframe src="/aidillema3.pdf" frameBorder={0}></iframe>
            </section>  
        <Footer></Footer>
        </>
    )
}