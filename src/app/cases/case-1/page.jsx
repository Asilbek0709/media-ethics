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
                    <iframe src="/case-1.pdf" className="pdf-viewer" frameBorder={0}></iframe>
                    <p><strong>Tavsiyalar:</strong> <br /> -Jurnalist har qanday jamiyat uchun nozik masala boʻlgan axloqiy me’yorlar haqida koʻrsatuv tayyorlar ekan, avvalo u inson huquqlarini poymol etmasligi kerak. Jurnalist TV yoki boshqa bir OAV orqali “uyalmaysizmi?”, “qanday ishlar qilib yuribsiz?” kabi soʻzlar bilan fuqarolarni tergash yoki ularga tanbeh berish huquqiga ega emas. Qolaversa, har kimning shaxsiy hayoti daxlsiz va u TV uchun ochiq mavzu boʻla olmaydi. Shu sababli: <br />- jurnalist tayyorlagan material ortidan fuqaroga jismoniy va maʼnaviy ziyon yetmasligi, uning shaxsi obroʻsizlanishi kerak emas; <br />-uyatli vaziyatda tasvirga olingan fuqarolarning yuzi jurnalist materialida mozaika bilan yashiringan boʻlsada, ularni yaqinlari tanib olishi xavfi bor. Qolaversa fuqarolarning oʻzidan ruxsat soʻramasdan ularni tasvirga olish taqiqlanadi; <br />-jurnalist tomonidan axloqsizlikda ayblangan fuqarolar amaldagi qonunchilik normalarini buzmaganlar. Shunday ekan jurnalist ularni ochiq-oydin ayblashga haq-huquqi yoʻq edi. Jurnalistga  birovni tarbiyalash, tergash huquqi berilmagan. U fuqarolarni (axloqi buzuq boʻlsada) hurmat qilishi shart; <br />-jurnalist faqatgina odamlarning fikri (turli yosh va millatdagi), din vakillarining voqeaga munosabati orqali ushbu vaziyatni axloq me’yorlariga zid ekanini ochib berishi lozim; <br />- istirohat bogʻida oʻpishib oʻtirganlarga nisbatan ochiq, demokratik fikrlovchi va umuminsoniy qadriyatlarni hurmat qilgan holda mulohaza yurituvchi ikki xil dunyoqarashli respondentlar fikri olib chiqilishi maqsadga muvofiq boʻlib, reportajda xolislikni saqlash imkonini bergan boʻlar edi.</p>
                    <a href="/case-1.pdf" className="case-download" download>To'liq PDF yuklash</a>
                </section>
            <Footer></Footer>
        </>
    )
}