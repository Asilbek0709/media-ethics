"use client" 

import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"

export default function aboutTheory(){

    return(
        <>
        <Header></Header>
        <section className="aboutTheory">
            <h1>3.1. Saylovni yoritayotgan  jurnalistning kasb odobi tamoyillari</h1>
            <p><strong>Reja:</strong><br /><br /> 1. OAVning  saylov jarayonidagi faoliyati. <br /><br />2.  Saylovni yoritayotgan jurnalistga qoʻyiladigan qonuniy talablar. <br /><br />3.  Saylovni yoritayotgan jurnalistga qoʻyiladigan axloqiy talablar.</p> <br />
            <p><strong>Asosiy tushunchalar:</strong> Yevropa Parlamenti,  saylov, saylovoldi tashviqoti, saylov kampaniyasi, referendum, imij, deputat, parlament huquqi.</p> <br />
            <p><strong>Kirish:</strong> Saylovni yoritishda OAVga bir qancha qonuniy talablar qoʻyiladi. Bu, oʻz navbatida, ushbu siyosiy jarayonning ochiq, oshkora va qonunlarga mos tarzda oʻtishini taʼminlaydi. Buning uchun saylov jarayoni boʻyicha axborotlar haqiqatga toʻgʻri kelishi hamda nomzodlar, siyosiy partiyalarning qonuniy manfaatlari buzilmasligi lozim.</p>
            <a href="/3.1.pdf" download className="download">Yuklash</a>
        </section>
        <Footer></Footer>
        </>
    )
}