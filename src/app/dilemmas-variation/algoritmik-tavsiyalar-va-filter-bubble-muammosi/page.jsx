"use client"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function DigitalDilemma() {
    return(
        <>
        <Header></Header>
        <div className="dilemmaHero">
            <h1>Algoritmik tavsiyalar va “filter bubble” muammosi</h1>
            <p>Raqamli platformalarda qo‘llanilayotgan kontent tavsiya tizimlari zamonaviy axborot muhitining muhim tarkibiy qismiga aylangan.</p>
        </div>
            <section className="digitalDilemmas">
                <div className="dilemmaInfo">
                    <p>Raqamli platformalarda qo‘llanilayotgan kontent tavsiya tizimlari zamonaviy axborot muhitining muhim tarkibiy qismiga aylangan. Ushbu tizimlar foydalanuvchilarning qiziqishlari, qidiruv tarixi hamda oldingi faolligi asosida ma’lumotlarni saralab, ularga mos kontentni taklif qiladi. Bunday algoritmik mexanizmlar foydalanuvchi e’tiborini saqlab qolish, platformadagi interaktivlikni oshirish va kontent iste’molini ko‘paytirishga xizmat qiladi.</p>
                </div>
                <iframe src="/algoritmikdillema1.pdf" frameBorder={0}></iframe>
            </section>  
        <Footer></Footer>
        </>
    )
}