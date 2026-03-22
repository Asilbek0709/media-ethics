"use client"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function DigitalDilemma() {
    return(
        <>
        <Header></Header>
        <div className="dilemmaHero">
            <h1>Sun’iy intellekt asosidagi avtomatlashtirilgan jurnalistika: axborot samaradorligi va shaxsiy hayot daxlsizligi o‘rtasidagi axloqiy dilemma</h1>
            <p>Raqamli transformatsiya sharoitida sun’iy intellekt texnologiyalarining jurnalistika sohasiga keng kirib kelishi axborot ishlab chiqarish jarayonini sezilarli darajada tezlashtirdi.</p>
        </div>
            <section className="digitalDilemmas">
                <div className="dilemmaInfo">
                    <p>Raqamli transformatsiya sharoitida sun’iy intellekt texnologiyalarining jurnalistika sohasiga keng kirib kelishi axborot ishlab chiqarish jarayonini sezilarli darajada tezlashtirdi. Ayniqsa, avtomatlashtirilgan yangiliklar yaratish tizimlari moliyaviy hisobotlar, sport statistikasi yoki tezkor yangiliklarni tayyorlashda samarali vosita sifatida qo‘llanmoqda.</p>
                </div>
                <iframe src="/aidillema2.pdf" frameBorder={0}></iframe>
            </section>  
        <Footer></Footer>
        </>
    )
}