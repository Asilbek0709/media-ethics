"use client"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function DigitalDilemma() {
    return(
        <>
        <Header></Header>
        <div className="dilemmaHero">
            <h1>Deepfeyk texnologiyalari va siyosiy manipulyatsiya: saylov jarayonlarida axborot ishonchliligiga tahdid</h1>
            <p>Raqamli texnologiyalar va sun’iy intellekt vositalarining jadal rivojlanishi siyosiy kommunikatsiya jarayonini ham tubdan o‘zgartirmoqda.</p>
        </div>
            <section className="digitalDilemmas">
                <div className="dilemmaInfo">
                    <p>Raqamli texnologiyalar va sun’iy intellekt vositalarining jadal rivojlanishi siyosiy kommunikatsiya jarayonini ham tubdan o‘zgartirmoqda. Ayniqsa, deepfeyk texnologiyalari yordamida yaratilgan manipulyativ videolar saylov jarayonlarida jamoatchilik fikriga ta’sir ko‘rsatish vositasi sifatida qo‘llanilayotgani kuzatilmoqda. </p>
                </div>
                <iframe src="/deepfakedillema2.pdf" frameBorder={0}></iframe>
            </section>  
        <Footer></Footer>
        </>
    )
}