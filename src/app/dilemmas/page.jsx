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
                <Link className="dilemma-link" href={'/dilemmas-variation/dilemma'}>
                    <div className="dilemma-card">
                        <h1>Dilemma</h1>
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </Link>
                <Link className="dilemma-link" href={'/dilemmas-variation/deontologik-va-konsekvensialistik-yondashuvning-tahlili'}>
                    <div className="dilemma-card">
                        <h1>Onlayn mediadagi axloqiy dilemmalar va ularning tahlili</h1>
                        <p>Raqamli mediada jurnalistlar axloqiy mas’uliyat, xolislik va ishonchlilikka tayangan holda dezinformatsiyaga qarshi turib, media savodxonlik va jamiyat barqarorligiga xizmat qilishi lozim.</p>
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </Link>
                <Link className="dilemma-link" href={'/dilemmas-variation/raqamli-transformatsiya-sharoitida-axloqiy-dilemmalar-regulyatsiyasi'}>
                    <div className="dilemma-card">
                        <h1>Internet, ommaviy axborot vositalarida axloqiy me’yorlar va ular bilan bog‘liq dilemmalar</h1>
                        <p>Raqamli transformatsiya media tuzilmasi va jurnalistikani o‘zgartirib, axborot tezlashdi, auditoriya bilan aloqalar murakkablashdi, axloqiy dilemmalar ijtimoiy-siyosiy muammo sifatida yuzaga chiqdi.</p>
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </Link>
                <Link className="dilemma-link" href={'/dilemmas-variation/deontologik-va-konsekvensialistik-yondashuvning-hodisalar-tahlili'}>
                    <div className="dilemma-card">
                        <h1>Deontologik va konsekvensialistik yondashuvning jurnalistikada qo‘llanilishida hodisalar tahlili</h1>
                        <p>Jurnalistikada hodisalarni tahlil qilishda deontologik yondashuv axloqiy me’yorlar, burch va kasbiy qoidalarga qat’iy amal qilishni ustuvor deb biladi, natijadan qat’i nazar xolislikni talab etadi. Konsekvensialistik yondashuv esa axborotning jamiyatga ta’siri va oqibatlarini asosiy mezon sifatida baholab, foyda va zarar nisbatiga tayanadi.</p>
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </Link>
                <Link className="dilemma-link" href={'/dilemmas-variation/suniy-intellekt-asosida-yaratilgan-xabarlarda-inson-nazorati'}>
                    <div className="dilemma-card">
                        <h1>Sun’iy intellekt asosida yaratilgan xabarlarda inson nazorati: tezkorlik va axloqiy xavflar o‘rtasidagi dilemma</h1>
                        <p>Darhaqiqat, sun’iy intellekt (SI) asosida yaratilgan xabarlar tezkorlikni sezilarli darajada oshiradi, biroq inson tomonidan amalga oshiriladigan tahrir, fakt tekshiruvi va axloqiy nazoratning yetishmasligi jiddiy muammolarni yuzaga keltiradi.</p>
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </Link>
                <Link className="dilemma-link" href={'/dilemmas-variation/suniy-intellekt-asosidagi-avtomatlashtirilgan-jurnalistika'}>
                    <div className="dilemma-card">
                        <h1>Sun’iy intellekt asosidagi avtomatlashtirilgan jurnalistika: axborot samaradorligi va shaxsiy hayot daxlsizligi o‘rtasidagi axloqiy dilemma</h1>
                        <p>Raqamli transformatsiya sharoitida sun’iy intellekt texnologiyalarining jurnalistika sohasiga keng kirib kelishi axborot ishlab chiqarish jarayonini sezilarli darajada tezlashtirdi.</p>
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </Link>
                <Link className="dilemma-link" href={'/dilemmas-variation/suniy-intellekt-va-deepfeyk-texnologiyalari'}>
                    <div className="dilemma-card">
                        <h1>Sun’iy intellekt va deepfeyk texnologiyalari: jurnalistik ishonchlilikka tahdid va axloqiy qaror qabul qilish muammosi</h1>
                        <p>Raqamli transformatsiya sharoitida sun’iy intellekt va algoritmik texnologiyalar jurnalistik faoliyatni yangi bosqichga olib chiqish</p>
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </Link>
                <Link className="dilemma-link" href={'/dilemmas-variation/shaxsiy-malumotlar-va-algoritmik-manipulyatsiya-muammosi'}>
                    <div className="dilemma-card">
                        <h1>Shaxsiy ma’lumotlar va algoritmik manipulyatsiya muammosi</h1>
                        <p>Raqamli platformalar faoliyatida shaxsiy ma’lumotlardan foydalanish masalasi so‘nggi yillarda media etikasi va axborot xavfsizligi doirasidagi muhim muammolardan biriga aylandi.</p>
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </Link>
                <Link className="dilemma-link" href={'/dilemmas-variation/deepfeyk-texnologiyalari-va-siyosiy-manipulyatsiya-saylov-jarayonlarida-axborot-ishonchliligiga-tahdid'}>
                    <div className="dilemma-card">
                        <h1>Deepfeyk texnologiyalari va siyosiy manipulyatsiya: saylov jarayonlarida axborot ishonchliligiga tahdid</h1>
                        <p>Raqamli texnologiyalar va sun’iy intellekt vositalarining jadal rivojlanishi siyosiy kommunikatsiya jarayonini ham tubdan o‘zgartirmoqda.</p>
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </Link>
                <Link className="dilemma-link" href={'/dilemmas-variation/deepfeyk-kontent-va-siyosiy-reputatsiyaga-tahdid-ijtimoiy-tarmoqlar-masuliyati-masalasi'}>
                    <div className="dilemma-card">
                        <h1>Deepfeyk kontent va siyosiy reputatsiyaga tahdid: ijtimoiy tarmoqlar mas’uliyati masalasi</h1>
                        <p>Sun’iy intellekt asosida yaratilayotgan deepfeyk texnologiyalari siyosiy kommunikatsiya jarayonida jiddiy axborot va axloqiy muammolarni yuzaga keltirmoqda.</p>
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </Link>
                <Link className="dilemma-link" href={'/dilemmas-variation/algoritmik-tavsiyalar-va-filter-bubble-muammosi'}>
                    <div className="dilemma-card">
                        <h1>Algoritmik tavsiyalar va “filter bubble” muammosi</h1>
                        <p>Raqamli platformalarda qo‘llanilayotgan kontent tavsiya tizimlari zamonaviy axborot muhitining muhim tarkibiy qismiga aylangan.</p>
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </Link>
                <Link className="dilemma-link" href={'/dilemmas-variation/algoritmik-tavsiyalar-filter-bubble-va-axborot-xilma-xilligi-muammosi'}>
                    <div className="dilemma-card">
                        <h1>Algoritmik tavsiyalar, “filter bubble” va axborot xilma-xilligi muammosi</h1>
                        <p>Raqamli platformalarda qo‘llanilayotgan algoritmik kontent tavsiya tizimlari foydalanuvchilarga moslashtirilgan axborot yetkazib berish imkonini yaratadi.</p>
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </Link>
                <Link className="dilemma-link" href={'/dilemmas-variation/absolyut-dilemma'}>
                    <div className="dilemma-card">
                        <h1>Absolyut dilemma</h1>
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </Link>
                <Link className="dilemma-link" href={'/dilemmas-variation/axloqiy-relyativizm'}>
                    <div className="dilemma-card">
                        <h1>Axloqiy relyativizm </h1>
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </Link>
                <Link className="dilemma-link" href={'/dilemmas-variation/deontologiya'}>
                    <div className="dilemma-card">
                        <h1>Deontologiya</h1>
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </Link>
                <Link className="dilemma-link" href={'/dilemmas-variation/dilemmaning-asosiy-xususiyatlari'}>
                    <div className="dilemma-card">
                        <h1>Dilemmalaning asosiy xususiyati</h1>
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </Link>
                <Link className="dilemma-link" href={'/dilemmas-variation/axloqiy-dilemma-tendensiyalari'}>
                    <div className="dilemma-card">
                        <h1>Аxloqiy dilemma tendensiyalari</h1>
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </Link>
                <Link className="dilemma-link" href={'/dilemmas-variation/qarorsizlik-dilemmasi'}>
                    <div className="dilemma-card">
                        <h1>Qarorsizlik dilemmasi</h1>
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </Link>
                <Link className="dilemma-link" href={'/dilemmas-variation/relyativ-dilemmalar'}>
                    <div className="dilemma-card">
                        <h1>Relyativ dilemmalar</h1>
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </Link>
                <Link className="dilemma-link" href={'/dilemmas-variation/utilitaristik-yondashuv'}>
                    <div className="dilemma-card">
                        <h1>Utilitaristik yondashuv</h1>
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </Link>
            </div>
        </section>
        <Footer></Footer>
        </>
    )
}