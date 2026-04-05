"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"

export default function Theory(){

    return(
        <>
            <Header></Header>
            <section className="theories-container">
                <Link href={'/theories/theory-variation1'} className="theory-link" >
                <div className="theory">
                    <h1>Xolislik sinovi: “Lafarga” qabristoni voqeasi va axborotda muvozanat masalasi</h1>
                    <p>Xolislik tamoyili va jurnalistika mas’uliyati: “Lafarga” qabristoni voqeasi misolida axborotni xolis, muvozanatli va faktlarga asoslangan holda yoritish, turli tomonlarning fikrini teng berish hamda jamoatchilikka mustaqil xulosa chiqarish imkonini yaratish zarurati haqida tahlil</p>
                </div>
                </Link>
                <Link href={'/theories/theory-variation2'} className="theory-link" >
                <div className="theory">
                    <h1>William Birksley va ijtimoiy mas’uliyat tamoyili</h1>
                    <p>Media etika sohasida muhim nazariy asoslardan biri hisoblangan Uilyam Birksli jurnalistika faoliyatida ijtimoiy mas’uliyat tamoyilini ilgari surdi, ya’ni jurnalistika faqat axborot yetkazish vositasi emas, balki jamiyatning barqaror rivojlanishi</p>
                </div>
                </Link>
                <Link href={'/theories/theory-variation3'} className="theory-link" >
                <div className="theory">
                    <h1>Stiven Ward va global jurnalistika etikasi</h1>
                    <p>Stiven Ward va global jurnalistika etikasi. Zamonaviy mediamakonda globallashuv jarayoni jurnalistika faoliyatiga yangi talablarni yuklamoqda. Stiven Ward mazkur jarayonni hisobga olgan holda global jurnalistika etikasi konsepsiyasini taklif qiladi. </p>
                </div>
                </Link>
                <Link href={'/theories/theory-variation4'} className="theory-link" >
                <div className="theory">
                    <h1>Rostgo‘ylik va aniqlik tamoyili axborotning ishonchliligini ta’minlaydi. </h1>
                    <p>Rostgo‘ylik va aniqlik tamoyili axborotning ishonchliligini ta’minlaydi. Jurnalist ma’lumotlarni tekshirib, uni asl holatida yetkazishi, ishonchli manbalarga tayanish va xatolarni o‘z vaqtida tuzatishi zarur.</p>
                </div>
                </Link>
                <Link href={'/theories/theory-variation5'} className="theory-link" >
                <div className="theory">
                    <h1>Mas’uliyat – jurnalistning jamoat oldidagi majburiyati</h1>
                    <p>Mas’uliyat – jurnalistning jamoat oldidagi majburiyati, axborot tarqatish jarayonida so‘z va harakatlarining oqibatini anglash darajasi bilan belgilanadi</p>
                </div>
                </Link>
                <Link href={'/theories/theory-variation6'} className="theory-link" >
                <div className="theory">
                    <h1>Clifford Christian va g‘amxo‘rlik etikasi</h1>
                    <p>Clifford Christian jurnalistika nazariyasiga insonparvarlik yo‘nalishini kiritib, g‘amxo‘rlik etikasi tushunchasini ilgari surdi. Uning fikricha, jurnalist faqat ma’lumot yetkazuvchi emas, balki jamiyatdagi insonlarning ehtiyoj va manfaatlariga e’tibor qaratgan holda faoliyat yuritishi lozim</p>
                </div>
                </Link>
            </section>
            <Footer></Footer>
        </>
    )
}