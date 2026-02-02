"use client"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header></Header>
      <section className="home">
        <div className="hero">
          <div className="hero-information">
            <h1>RAQAMLI TRANSFORMATSIYA SHAROITIDA ONLAYN MEDIA FAOLIYATIDAGI AXLOQIY DILEMMA VA MUAMMOLAR</h1>
            <p>Jahonda raqamli transformatsiya mediamakonni tubdan o‘zgartirib, jurnalistik faoliyat va kontent tarqatish jarayonlarini yangi bosqichga olib chiqdi. Bu jarayon onlayn mediada media etika, axloqiy dilemmalar, ularning huquqiy va institutsional mexanizmlarini deontologik hamda konsektivistik yondashuvlar asosida ilmiy o‘rganishni dolzarb masalaga aylantirmoqda.</p>
          </div>
          <div className="explorer-links">
            <Link href={'/theory'} className="explorer">Nazariyani o‘rganish</Link>
            <Link href={'/'} className="explorer">Darsliklar</Link>
          </div>
        </div>
        <div className="about">
          <h1>Platforma haqida</h1>
          <div className="hero-about-container">
            <div className="hero-about-card">
              <div className="card-img">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="28.000000pt" height="28.000000pt" viewBox="0 0 24.000000 24.000000"  preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"> <path fill="#7A2E2E" d="M14 207 c-3 -8 -4 -45 -2 -83 l3 -69 40 -3 c22 -2 46 -10 52 -19 12 -16 14 -16 25 0 7 9 31 17 53 19 l40 3 0 80 0 80 -38 3 c-21 2 -45 -2 -53 -9 -11 -9 -18 -9 -26 -1 -17 17 -87 15 -94 -1z m94 -77 l3 -66 -41 4 -40 4 0 65 0 64 38 -3 37 -3 3 -65z m102 6 l0 -64 -40 -4 -40 -4 0 62 c0 33 3 64 7 67 3 4 21 7 40 7 l33 0 0 -64z"/> </g> </svg>
              </div>
              <div className="hero-aboout-info">
                <h1>Keng qamrovli nazariya</h1>
                <p>Deontologik, oqibatga asoslangan (konsekventsialist), fazilatlar etikasi va g‘amxo‘rlikka asoslangan axloqiy yondashuvlarni tushuning.</p>
              </div>
            </div>
            <div className="hero-about-card">
              <div className="card-img">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="28.000000pt" height="28.000000pt" viewBox="0 0 24.000000 24.000000"  preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="none" stroke="none"> <path d="M75 221 c-40 -17 -60 -51 -60 -102 0 -40 5 -54 28 -76 23 -23 36 -28 77 -28 40 0 55 5 76 26 84 85 -10 225 -121 180z m106 -40 c39 -40 39 -82 0 -122 -40 -39 -82 -39 -122 0 -20 20 -29 39 -29 61 0 43 47 90 90 90 22 0 41 -9 61 -29z"/> <path d="M110 140 c0 -16 5 -30 10 -30 6 0 10 14 10 30 0 17 -4 30 -10 30 -5 0 -10 -13 -10 -30z"/> <path d="M110 80 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0 -10 -4 -10 -10z"/> </g> </svg>
              </div>
              <div className="hero-aboout-info">
                <h1>Haqiqiy muammolar</h1>
                <p>Zamonaviy OAVda jurnalistlar har kuni duch keladigan real axloqiy muammolarni o‘rganing..</p>
              </div>
            </div>
            <div className="hero-about-card">
              <div className="card-img">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="28.000000pt" height="28.000000pt" viewBox="0 0 24.000000 24.000000"  preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="none" stroke="none"> <path d="M72 207 c-12 -13 -22 -34 -22 -48 1 -22 30 -69 44 -69 12 0 6 24 -10 41 -34 38 6 90 56 74 27 -9 37 -51 16 -74 -17 -19 -21 -41 -8 -41 12 0 42 55 42 77 0 27 -41 63 -71 63 -14 0 -35 -10 -47 -23z"/> <path d="M80 60 c0 -5 18 -10 40 -10 22 0 40 5 40 10 0 6 -18 10 -40 10 -22 0 -40 -4 -40 -10z"/> <path d="M90 20 c0 -5 14 -10 30 -10 17 0 30 5 30 10 0 6 -13 10 -30 10 -16 0 -30 -4 -30 -10z"/> </g> </svg>
              </div>
              <div className="hero-aboout-info">
                <h1>Dilemmalar va holatlar</h1>
                <p>Media etikasini shakllantirgan real hayotiy vaziyatlar va muhim (tarixiy) holatlarni tahlil qiling.</p>
              </div>
            </div>
            <div className="hero-about-card">
              <div className="card-img">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="28.000000pt" height="28.000000pt" viewBox="0 0 24.000000 24.000000"  preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="none" stroke="none"> <path d="M110 206 c0 -14 -29 -26 -67 -26 -13 0 -23 -4 -23 -10 0 -5 4 -10 10 -10 5 0 3 -18 -7 -41 -18 -45 -10 -59 35 -59 31 0 37 22 17 60 -14 27 -15 34 -3 41 31 20 38 10 38 -56 0 -63 -1 -65 -25 -65 -14 0 -25 -4 -25 -10 0 -6 27 -10 60 -10 33 0 60 4 60 10 0 6 -11 10 -25 10 -24 0 -25 2 -25 65 0 64 4 71 34 59 14 -5 13 -10 -1 -46 -18 -44 -10 -58 34 -58 31 0 36 14 18 57 -10 24 -12 39 -5 41 19 7 10 22 -12 22 -39 0 -68 12 -68 26 0 8 -4 14 -10 14 -5 0 -10 -6 -10 -14z m-40 -118 c0 -4 -9 -8 -21 -8 -15 0 -19 4 -15 16 3 9 6 21 6 27 1 13 30 -22 30 -35z m134 16 c9 -23 8 -24 -13 -24 -14 0 -18 5 -14 20 6 24 19 26 27 4z"/> </g> </svg>
              </div>
              <div className="hero-aboout-info">
                <h1>Muvozanatli nuqtai nazar</h1>
                <p>Axloqiy qarorlar qabul qilishda turli nuqtai nazarlar va manfaatdor tomonlarning qiziqishlarini hisobga oling.</p>
              </div>
            </div>
          </div>
        </div>
        <main>
          <div className="main-sections">
            <h1>Asosiy bo'limlar</h1>
            <div className="main-sections-container">
              <Link href={'/'} style={{textDecoration: "none", color: "#000"}}>
              <div className="main-section-card">
                <h1>Theory</h1>
                <p>Ethical frameworks and philosophical approaches</p>
                 <div className="more-info">Batafsil <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              </div>
              </Link>
              <Link href={'/'} style={{textDecoration: "none", color: "#000"}}>
              <div className="main-section-card">
                <h1>Theory</h1>
                <p>Ethical frameworks and philosophical approaches</p>
                 <div className="more-info">Batafsil <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              </div>
              </Link>
              <Link href={'/'} style={{textDecoration: "none", color: "#000"}}>
              <div className="main-section-card">
                <h1>Theory</h1>
                <p>Ethical frameworks and philosophical approaches</p>
                 <div className="more-info">Batafsil <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              </div>
              </Link>
              <Link href={'/'} style={{textDecoration: "none", color: "#000"}}>
              <div className="main-section-card">
                <h1>Theory</h1>
                <p>Ethical frameworks and philosophical approaches</p>
                <div className="more-info">
                  Batafsil <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16666 10H15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/> <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#6B7C93" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
              </Link>
            </div>
          </div>
          <div className="authors-profiles">
            <div className="author-profile">

            </div>
            <div className="author-profile">

            </div>
          </div>
          <div className="audience">
            <h1>Platforma kimlar uchun kerak</h1>
            <div className="audience-container">
              <div className="audience-card">
                <h2>Jurnalistlar</h2>
                <p>Axloqiy ramkalar va qaror qabul qilish jarayonini kundalik ish faoliyatingizda chuqurroq tushuning.</p>
              </div>
              <div className="audience-card">
                <h2>Studentlar</h2>
                <p>Ommaviy axborot vositalari etikasini keng qamrovli nazariya, real holatlar va dilemmalar orqali o‘rganing.</p>
              </div>
              <div className="audience-card">
                <h2>O'qituvchilar</h2>
                <p>Sinfingizda media etikasi darslarini o‘qitish uchun resurslar va materiallarga ega bo‘ling.</p>
              </div>
              <div className="audience-card">
                <h2>Media Tashkilotlari</h2>
                <p>Tahririy siyosat va xodimlarni o‘qitish dasturlarini mustahkam axloqiy ramkalarga asoslang.</p>
              </div>
              <div className="audience-card">
                <h2>Tadqiqotchilar</h2>
                <p>Media tadqiqotlaringiz uchun holatlarni o‘rganing va axloqiy muammolarni tahlil qiling.</p>
              </div>
              <div className="audience-card">
                <h2>Faol Fuqarolar</h2>
                <p>OAVni tanqidiy baholashni o‘rganing va axloqiy jurnalistika standartlarini tushuning.</p>
              </div>
            </div>
          </div>
        </main>
        <Footer></Footer>
      </section>
    </>
  );
}
