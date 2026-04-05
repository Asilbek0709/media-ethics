"use client" 

import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function aboutTheory(){

    return(
        <>
        <Header></Header>
        <section className="aboutTheory">
            <h1>Clifford Christian va g‘amxo‘rlik etikasi</h1>
            <p>Clifford Christian jurnalistika nazariyasiga insonparvarlik yo‘nalishini kiritib, g‘amxo‘rlik etikasi tushunchasini ilgari surdi. Uning fikricha, jurnalist faqat ma’lumot yetkazuvchi emas, balki jamiyatdagi insonlarning ehtiyoj va manfaatlariga e’tibor qaratgan holda faoliyat yuritishi lozim</p>
            <iframe src="/1.6.pdf" frameborder="0"></iframe>    
        </section>
        <Footer></Footer>
        </>
    )
}