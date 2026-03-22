"use client"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function DigitalDilemma() {
    return(
        <>
        <Header></Header>
        <div className="dilemmaHero">
            <h1>Deepfeyk kontent va siyosiy reputatsiyaga tahdid: ijtimoiy tarmoqlar mas’uliyati masalasi</h1>
            <p>Sun’iy intellekt asosida yaratilayotgan deepfeyk texnologiyalari siyosiy kommunikatsiya jarayonida jiddiy axborot va axloqiy muammolarni yuzaga keltirmoqda.</p>
        </div>
            <section className="digitalDilemmas">
                <div className="dilemmaInfo">
                    <p>Sun’iy intellekt asosida yaratilayotgan deepfeyk texnologiyalari siyosiy kommunikatsiya jarayonida jiddiy axborot va axloqiy muammolarni yuzaga keltirmoqda. Bunday texnologiyalar orqali siyosatchilar nomidan soxta bayonotlar yoki ularning obro‘siga putur yetkazuvchi videolar tayyorlanishi jamoatchilik fikrini manipulyatsiya qilishga xizmat qilishi mumkin.</p>
                </div>
                <iframe src="/deepfakedillema1.pdf" frameBorder={0}></iframe>
            </section>  
        <Footer></Footer>
        </>
    )
}