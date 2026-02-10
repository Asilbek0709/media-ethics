"use client"

import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"

export default function Case() {
    return(
        <>
            <Header></Header>
                <section className="case-explanation">
                    <h1>SUVGA TUSHIRILGAN FERMERLAR FOTOSURATI IJTIMOIY TARMOQLAR VA OMMAVIY AXBOROT VOSITALARIDA TARQALDI HAMDA FOYDALANUVCHILAR VA JURNALIST-BLOGERLAR TOMONIDAN QORALANDI (2025)</h1>
                    <p>OAV va blogerlar aybsizlik prezumpsiyasi, shaxsiy ma’lumotlar daxlsizligi, sha’n va qadr-qimmatni hurmat qilish tamoyillarini buzib, jamoatchilik fikrini asossiz shakllantirdi va inson huquqlarini mensimaslikka olib keldi</p>
                    <iframe src="/case-5.pdf" className="pdf-viewer" frameBorder={0}></iframe>
                    <p><strong>Tavsiyalar:</strong> <br /> Bugungi kunda ijtimoiy tarmoqlar va bloglar ommaviy axborot vositalari bilan bir qatorda axborot tarqatish orqali ommaning turli xil mavzularda fikrini shakllantirishmoqda. Ushbu holatlarning yuzaga kelmasligi uchun OAV vakillariga quyidagi tavsiyalarga rioya etsa maqsadga muvofiq boʻlar edi. Xususan, <br />-jurnalistlar, blogerlar auditoriyaning ruhiyatiga salbiy taʼsir koʻrsatib, uning foydalanuvchiga nisbatan adovatini qoʻzgʻatuvchi sharhlarni ijtimoiy tarmoqlardagi oʻz sahifalariga qoʻyishdan oldin albatta axborot manbalarining anonimligini taʼminlashlari, xabarni tarqatishdan oldin axborot manbasi yoxud xabar muallifining roziligini olishlari, axborotning xolisligini saqlashlari va u boshqa onlayn platformalarga tarqalishini unutmasliklari, voqea xususidagi xabarni joylashtirgan sahifa mualliflarining jismoniy, maʼnaviy va ruhiy farovonligini taʼminlashlari joiz;  <br />-ijtimoiy tarmoqlardagi oʻz sahifalarida fikrlarini bildirayotgan foydalanuvchilarning fuqaro sifatida huquqlarini hurmat qilishlari va ularning buzilishiga yoʻl qoʻymasliklari zarur; <br />-internet saytlari va ijtimoiy tarmoqlar orqali jamiyat ichida ichki parokandalikni keltirib chiqaruvchi har qanday soxtalashtirilgan xabarlar (feyk-nyuslar)ni toʻgʻrisidan ajratish uchun mediasavodxonlik asoslaridan xabardor boʻlishlari kerak; <br />-internetdagi saytlar va ijtimoiy tarmoqlar orqali  uyushtirilayotgan axborot xurujlariga samarali ravishda qarshi  kurashish uchun mamlakatimizda “Internet va ijtimoiy tarmoqlardan foydalanish toʻgʻrisida”gi Oʻzbekiston Respublikasi qonunini qabul qilish lozim; <br />-ijtimoiy tarmoqlarda oʻz faoliyatini olib borayotgan jurnalistlar esa har qanday fuqaroni ayblashdan oldin, voqeani mukammal oʻrganib, tahlil etish, jurnalistikaning xolislik tamoyiliga rioya etishi tavsiya etiladi.</p>
                    <a href="/case-5.pdf" className="case-download" download>To'liq PDF yuklash</a>
                </section>
            <Footer></Footer>
        </>
    )
}