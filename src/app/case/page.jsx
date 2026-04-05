"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"


export default function Cases() {
    return(
        <>
        <Header></Header>
            <section className="cases-hero">
                <h1>Belgilangan keyslar</h1>
                <p>Ommaviy axborot vositalari etikasi va jurnalistik amaliyotini shakllantirgan muhim keyslarni ko'rib chiqing.</p>
            </section>
            <section className="cases">
                <Link className="case-link" href={'/cases/case-1'}>
                <div className="case-card">
                    <h1>1) ФУҚАРО ЖУРНАЛИСТНИ СУДГА БЕРИБ ЮТИБ ЧИҚДИ</h1>
                    <p>2018 йил ЎзАда Шайхонтоҳурда экстремизмга алоқадор аёл варақа тарқатаётганда қўлга олингани ҳақида ишончли хабар эълон қилинди.</p>
                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                </Link>
                <Link className="case-link" href={'/cases/case-2'}>
                <div className="case-card">
                    <h1>2) РУПЕРТ МЁРДОКНИ ИСТЕЪФОГА ЧИҚАРГАН ЖАНЖАЛ</h1>
                    <p>Одамларнинг шахсий ҳаёти дахлсиз, аралашиш мумкин эмас. Шу сабаб Руперт Мёрдокга тегишли «News of the World» 2011 йил ёпилган.</p>
                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                </Link>
                <Link className="case-link" href={'/cases/case-3'}>
                <div className="case-card">
                    <h1>3) АКТРИСА ЯНГИЛИКЛАР САЙТЛАРИНИНГ БИРИ ҚИЛГАН ТУҲМАТ ТУФАЙЛИ ТАҚИҚҚА ТУШИРИЛДИ</h1>
                    <p>Таниқли актриса сайтдаги туҳматли хабар сабаб ҳақорат ва босимларга учраб, соғлиғи ёмонлашганини маълум қилди.</p>
                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                </Link>
                <Link className="case-link" href={'/cases/case-4'}>
                <div className="case-card">
                    <h1>4) ВАЗИР ЖУРНАЛИСТНИ СУДГА БЕРДИ</h1>
                    <p>Халқ таълими вазири «XXI аср»даги мақола учун муаллифни судга берди, чунки журналист унинг шахсиятига тегган.</p>
                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                </Link>
                <Link className="case-link" href={'/cases/case-5'}>
                <div className="case-card">
                    <h1>5) АЁЛ ҚАЙНОТАСИНИ ЖИНСИЙ ТАЖОВУЗДА АЙБЛАДИ ЁКИ СУД ЗАЛИГА АЙЛАНГАН ТОК-ШОУ</h1>
                    <p>«Ўзбекистон» телеканали ток-шоусида аёл оилавий ва жинсий зўравонлик ҳақида илк бор очиқ гапириб, катта баҳсларга сабаб бўлди.</p>
                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                </Link>
            </section>
        <Footer></Footer>
        </>
    )
}