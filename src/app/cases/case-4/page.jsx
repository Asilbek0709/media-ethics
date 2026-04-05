"use client"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Case() {
    return(
        <>
            <Header></Header>
                <section className="case-explanation">
                    <h1>ВАЗИР ЖУРНАЛИСТНИ СУДГА БЕРДИ</h1>
                    <p>Ўзбекистон Республикаси Халқ таълими вазири жисмоний шахс сифатида Тадбиркорлар ва ишбилармонлар ҳаракати Ўзбекистон Либералдемократик партияси нашри «XXI аср» газетасида «Вазир матбуот эркинлигини қандай тушунади? » сарлавҳали чоп этилган мақоласи юзасидан унинг муаллифини судга берди. Мақолада журналист томонидан вазирнинг шахсиятига тегилган. </p>
                    <iframe src="/case3.pdf" className="pdf-viewer" frameBorder={0}></iframe>
                </section>
            <Footer></Footer>
        </>
    )
}