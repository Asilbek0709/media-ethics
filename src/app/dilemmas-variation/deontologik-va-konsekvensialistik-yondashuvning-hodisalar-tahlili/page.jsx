"use client"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Events() {
    return(
        <>
            <Header></Header>
                <div className="dilemmaHero">
                    <h1>Deontologik va konsekvensialistik yondashuvning jurnalistikada qo‘llanilishida hodisalar tahlili</h1>
                    <p>Deontologik va konsekvensialistik yondashuvlar jurnalistikada hodisalarni burch, mas’uliyat hamda axborot oqibatlarini baholash orqali xolis va ijtimoiy ahamiyatli tahlil qilish</p>
                </div>
                <section className="eventDilemmas">
                    <div className="dilemmaInfo">
                        <p>Deontologik va konsekvensialistik yondashuvlar jurnalistikada hodisalarni tahlil qilishda kasbiy burch, axloqiy me’yorlar va axborot natijalarini hisobga olishni ta’minlaydi. Ushbu yondashuvlar jurnalistga xolislikni saqlash, jamoatchilik manfaatini himoyalash va qarorlarning ijtimoiy oqibatlarini oldindan baholash imkonini beradi hamda professional mas’uliyatni kuchaytirib, axborot tarqatishda ishonchlilikni mustahkamlaydi va etik qarorlar qabul qilishni rag‘batlantiradi doimo samarali.</p>
                    </div>
                    <iframe src="/event1.pdf" frameBorder={0}></iframe>
                </section>  
            <Footer></Footer>
        </>
    )
}