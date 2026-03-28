"use client"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function OnlineDilemmas() {
    return(
        <>
            <Header></Header>
                <div className="dilemmaHero">
                    <h1>ONLAYN MEDIADA AXLOQIY DILEMMALAR TAHLILI VA HUQUQIY-ME’YORIY JIHATLARI </h1>
                    <p>Onlayn mediada axloqiy dilemma: muammo va istiqbollar</p>
                </div>
                <section className="onlineDilemmas">
                    <div className="dilemmaInfo">
                        <p>Mediamakonda universallashuv jurnalistlarga dolzarb axborot yaratish, ijtimoiy  jarayonlarni  tahlil  qilish,  jamoatchilik fikriga ta’sir etish imkonini berdi.. Raqamli  konvergensiya  sharoitida  jurnalist  xolislik,  tezkorlik  va  ishonchlilikka tayangan  holda  auditoriyaga  zarar  yetkazmasligi  lozim.  Biroq  internet  OAV  va ijtimoiy tarmoqlarda salbiy axborot tarqalishi professional jurnalistlar oldida yangi axloqiy dilemmalarni yuzaga keltiradi.</p>
                    </div>
                    <h1>“Hisorak suv ombori haqida yolg‘on xabarlar: so‘z erkinligi va jamoat xavfsizligi o‘rtasidagi axloqiy dilemma”</h1>
                    <iframe src="/onlinedilemma1.pdf" frameBorder={0}></iframe>
                    <h1>“Urush va fojia fotosuratlari: jamoatchilik manfaatlari va shaxsiy hayotning axloqiy ziddiyati”</h1>
                    <iframe src="/onlinedilemma2.pdf" frameBorder={0}></iframe>
                    <h1>Aviatsiya hodisalari haqida xabar berishda tezkorlik va ishonchlilik o‘rtasidagi axloqiy dilemma</h1>
                    <iframe src="/onlinedilemma3.pdf" frameBorder={0}></iframe>
                    <h1>Davlat mablag‘larining talon-toroj qilinishi haqidagi axborotni yoritishda aybsizlik prezumpsiyasi va jamoatchilikni xabardor qilish o‘rtasidagi axloqiy dilemma </h1>
                    <iframe src="/onlinedilemma4.pdf" frameBorder={0}></iframe>
                    <h1>Туғруқхонада чақалоқ ўғирланиши: жамоатчиликни хабардор қилиш ва тиббиёт муассасаси обрўсини ҳимоя қилиш ўртасидаги ахлоқий дилемма</h1>
                    <iframe src="/onlinedilemma5.pdf" frameBorder={0}></iframe>
                </section>  
            <Footer></Footer>
        </>
    )
}