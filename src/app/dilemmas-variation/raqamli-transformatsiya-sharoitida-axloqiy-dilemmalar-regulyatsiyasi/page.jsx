"use client"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

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
                <h1>Media mahsulot ishlab chiqarish jarayonida yo‘l harakati qoidalarining buzilishi va axborot manipulyatsiyasi: huquqiy, axloqiy va institutsional tahlil</h1>
                <iframe src="/digitaldilemma1.pdf" frameBorder={0}></iframe>
                <h1>MEDIA YETAKCHILIGI MASALASIDA SHAXSIY FIKR, KASBIY TANQID VA AXLOQIY ME’YORLAR TO‘QNASHUVI: ONLAYN MEDIA MUHITIDAGI INSTITUTSIONAL VA ETIK DILEMMALAR</h1>
                <iframe src="/digitaldilemma2.pdf" frameBorder={0}></iframe>
                <h1>MUALLIFLIK HUQUQINING BUZILISHI HOLATIDA ONLAYN MEDIA FAOLIYATIDAGI HUQUQIY, AXLOQIY VA INSTITUTSIONAL DILEMMALAR TAHLILI</h1>
                <iframe src="/digitaldilemma3.pdf" frameBorder={0}></iframe>
            </section>  
        <Footer></Footer>
        </>
    )
}