"use client"

import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"

export default function DigitalDilemma() {
    return(
        <>
        <Header></Header>
        <div className="dilemmaHero">
            <h1>RAQAMLI TRANSFORMATSIYA SHAROITIDA AXLOQIY DILEMMALAR REGULYATSIYASI</h1>
            <p>Onlayn media makonida jamoatchilik fikriga ta’sir etuvchi omillar</p>
        </div>
            <section className="digitalDilemmas">
                
                <div className="dilemmaInfo">
                    <p>Raqamli transformatsiya media makoni va jurnalistlik faoliyatini tubdan o‘zgartirdi. Axborot tez tarqalib, jurnalist va auditoriya munosabatlari murakkablashdi. Natijada yuzaga kelayotgan axloqiy dilemmalar kasbiygina emas, balki ijtimoiy va siyosiy ahamiyatga ega muammolarga aylandi.</p>
                </div>
                <iframe src="/digitaldilemma.pdf" frameBorder={0}></iframe>
            </section>  
        <Footer></Footer>
        </>
    )
}