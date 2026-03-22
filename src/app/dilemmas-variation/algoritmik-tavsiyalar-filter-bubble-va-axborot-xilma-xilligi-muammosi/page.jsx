"use client"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function DigitalDilemma() {
    return(
        <>
        <Header></Header>
        <div className="dilemmaHero">
            <h1>Algoritmik tavsiyalar, “filter bubble” va axborot xilma-xilligi muammosi</h1>
            <p>Raqamli platformalarda qo‘llanilayotgan algoritmik kontent tavsiya tizimlari foydalanuvchilarga moslashtirilgan axborot yetkazib berish imkonini yaratadi.</p>
        </div>
            <section className="digitalDilemmas">
                <div className="dilemmaInfo">
                    <p>Raqamli platformalarda qo‘llanilayotgan algoritmik kontent tavsiya tizimlari foydalanuvchilarga moslashtirilgan axborot yetkazib berish imkonini yaratadi. Biroq ushbu tizimlar ko‘pincha “filter bubble”, ya’ni axborot exosi deb ataluvchi hodisani yuzaga keltirishi mumkin. Bunday vaziyatda foydalanuvchilar asosan o‘z qarashlari, qiziqishlari yoki ilgari tanlagan kontentiga mos keladigan ma’lumotlar bilan cheklanib qoladi.</p>
                </div>
                <iframe src="/algoritmikdillema2.pdf" frameBorder={0}></iframe>
            </section>  
        <Footer></Footer>
        </>
    )
}