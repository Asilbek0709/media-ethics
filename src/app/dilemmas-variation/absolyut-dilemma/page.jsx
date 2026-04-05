"use client"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function OnlineDilemmas() {
    return(
        <>
            <Header></Header>
                <div className="dilemmaHero">
                    <h1>Absolyut dilemma</h1>
                </div>
                <section className="onlineDilemmas">
                    <iframe src="/absoluteDilemma.pdf" frameBorder={0}></iframe>
                </section>  
            <Footer></Footer>
        </>
    )
}