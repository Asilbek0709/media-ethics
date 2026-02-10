"use client"

import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"

export default function Case() {
    return(
        <>
            <Header></Header>
                <section className="case-explanation">
                    <h1>JURNALIST “TIZZADAN YUQORI” YUBKALAR HAQIDA GAPIRGANDA (2025)</h1>
                    <p>Xalqaro press-klub va “Yoshlar” telekanali dasturida ta’lim tizimidagi muammolar, maktab oldi tirbandliklari, o‘quvchi-qizlar kiyimi va maktab formasi masalalari muhokama qilindi.</p>
                    <iframe src="/case-2.pdf" className="pdf-viewer" frameBorder={0}></iframe>
                    <p><strong>Tavsiyalar:</strong> <br /> -Jurnalist maktabdagi formalar muammosini koʻtarishda maktab oʻquvchilari, ota-onalarning fikrlari, intervyulari va tegishli mutasaddilar, Xalq taʼlimi vazirligi tomonidan bildirilgan munosabatlar bilan cheklanishi kerak; <br />-jurnalist mazkur vaziyatni tahlil etishda barcha axloqiy me’yorlar va kasb etikasini buzishi kechirilmas holat boʻlib, tasvirda yuzi aniq koʻrsatilgan, voyaga yetmagan bolalarni kamsitmasligi lozim;   <br />-jurnalist mazkur vaziyatda faqatgina voqea qatnashchilari fikrlarini yigʻib, xolis axborot tarqatish zarurdir.</p>
                    <a href="/case-2.pdf" className="case-download" download>To'liq PDF yuklash</a>
                </section>
            <Footer></Footer>
        </>
    )
}