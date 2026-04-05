"use client"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Case() {
    return(
        <>
            <Header></Header>
                <section className="case-explanation">
                    <h1>АЁЛ ҚАЙНОТАСИНИ ЖИНСИЙ ТАЖОВУЗДА АЙБЛАДИ ЁКИ СУД ЗАЛИГА АЙЛАНГАН ТОК-ШОУ</h1>
                    <p>«Ўзбекистон» телеканали орқали эфирга узатилган ток-шоуси Ўзбекистон оммавий ахборот воситаларида қизғин баҳсларга сабаб бўлди. Кўрсатувга таклиф этилган қаҳрамон оиладаги зўравонликдан азият чеккани ҳақида интервью берди. Мазкур ҳолат Ўзбекистон телевидениеси тарихида биринчи маротаба рўй бериб, аёл эфир орқали жинсий зўравонликнинг мавжудлиги ҳақида илк маротаба очиқ сўзлаши эди. </p>
                    <iframe src="/case5.pdf" className="pdf-viewer" frameBorder={0}></iframe>
                </section>
            <Footer></Footer>
        </>
    )
}