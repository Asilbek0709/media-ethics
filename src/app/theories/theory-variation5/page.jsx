"use client" 

import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function aboutTheory(){

    return(
        <>
        <Header></Header>
        <section className="aboutTheory">
            <h1>Mas’uliyat – jurnalistning jamoat oldidagi majburiyati</h1>
            <p>Mas’uliyat – jurnalistning jamoat oldidagi majburiyati, axborot tarqatish jarayonida so‘z va harakatlarining oqibatini anglash darajasi bilan belgilanadi</p>
            <iframe src="/1.5.pdf" frameborder="0"></iframe>    
        </section>
        <Footer></Footer>
        </>
    )
}