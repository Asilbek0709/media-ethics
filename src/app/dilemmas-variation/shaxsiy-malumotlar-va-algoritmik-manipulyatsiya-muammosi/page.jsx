"use client"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function DigitalDilemma() {
    return(
        <>
        <Header></Header>
        <div className="dilemmaHero">
            <h1>Shaxsiy ma’lumotlar va algoritmik manipulyatsiya muammosi</h1>
            <p>Raqamli platformalar faoliyatida shaxsiy ma’lumotlardan foydalanish masalasi so‘nggi yillarda media etikasi va axborot xavfsizligi doirasidagi muhim muammolardan biriga aylandi.</p>
        </div>
            <section className="digitalDilemmas">
                <div className="dilemmaInfo">
                    <p>Raqamli platformalar faoliyatida shaxsiy ma’lumotlardan foydalanish masalasi so‘nggi yillarda media etikasi va axborot xavfsizligi doirasidagi muhim muammolardan biriga aylandi. Ijtimoiy tarmoqlar foydalanuvchilarning qidiruv tarixi, qiziqishlari hamda platformadagi faolligi haqidagi ma’lumotlarni tahlil qilish orqali ularga moslashtirilgan kontentni taqdim etadi.</p>
                </div>
                <iframe src="/privateinfodillema.pdf" frameBorder={0}></iframe>
            </section>  
        <Footer></Footer>
        </>
    )
}