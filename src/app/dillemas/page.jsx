"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"

export default function Dillemas() {
    return(
        <>
        <Header></Header>
        <section className="dilemmas">
            <div className="dilemmas-hero">
                <h1>Axloqiy dilemmalar</h1>
                <p>Jurnalistlar raqobatbardosh axloqiy majburiyatlarni bajarishlari kerak bo'lgan real stsenariylarni ko'rib chiqing.</p>
            </div>
            <div className="dilemmas-variations">
                <Link className="dilemma-link" href={'/dilemmas-variation/online-dilemmas'}>
                    <div className="dilemma-card">
                        <h1>Onlayn mediadagi axloqiy dilemmalar va ularning tahlili</h1>
                        <p>Raqamli mediada jurnalistlar axloqiy mas’uliyat, xolislik va ishonchlilikka tayangan holda dezinformatsiyaga qarshi turib, media savodxonlik va jamiyat barqarorligiga xizmat qilishi lozim.</p>
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </Link>
                <Link className="dilemma-link" href={'/dilemmas-variation/digital-dilemmas'}>
                    <div className="dilemma-card">
                        <h1>Internet, ommaviy axborot vositalarida axloqiy me’yorlar va ular bilan bog‘liq dilemmalar</h1>
                        <p>Raqamli transformatsiya media tuzilmasi va jurnalistikani o‘zgartirib, axborot tezlashdi, auditoriya bilan aloqalar murakkablashdi, axloqiy dilemmalar ijtimoiy-siyosiy muammo sifatida yuzaga chiqdi.</p>
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </Link>
                <Link className="dilemma-link" href={'/dilemmas-variation/events'}>
                    <div className="dilemma-card">
                        <h1>Deontologik va konsekvensialistik yondashuvning jurnalistikada qo‘llanilishida hodisalar tahlili</h1>
                        <p>Jurnalistikada hodisalarni tahlil qilishda deontologik yondashuv axloqiy me’yorlar, burch va kasbiy qoidalarga qat’iy amal qilishni ustuvor deb biladi, natijadan qat’i nazar xolislikni talab etadi. Konsekvensialistik yondashuv esa axborotning jamiyatga ta’siri va oqibatlarini asosiy mezon sifatida baholab, foyda va zarar nisbatiga tayanadi.</p>
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </Link>
            </div>
        </section>
        <Footer></Footer>
        </>
    )
}