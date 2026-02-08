"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Education(){
    return(
        <>
        <Header></Header>
            <section className="education">
                <div className="education-card">
                    <h1>1-BOB. JURNALIST KASBIY AXLOQ MASALALARI</h1>
                    <a href="1-BOB.pdf" download className="download">Yuklash</a>    
                </div>
                <div className="education-card">
                    <h1>2-BOB. ELEKTRON OMMAVIY AXBOROT VOSITALARIDA ETIKA QOIDALARI</h1>
                    <a href="2-BOB.pdf" download className="download">Yuklash</a>
                </div>
                <div className="education-card">
                    <h1>3-BOB. IXTISOSLASHGAN JURNALISTIKANING AXLOQIY TAMOYILLARI.</h1>
                    <a href="3-BOB.pdf" download className="download">Yuklash</a>
                </div>
                <div className="education-card">
                    <h1>BOBLAR NOMI</h1>
                    <a href="boblar-nomi.pdf" download className="download">Yuklash</a>
                </div>
                <div className="education-card">
                    <h1>ATAMALR LUG'ATI</h1>
                    <a href="atamalar.pdf" download className="download">Yuklash</a>
                </div>
                <div className="education-card">
                    <h1>MEDIA ETIKA DARSLIK HAQIDA</h1>
                    <a href="darslik-haqida.pdf" download className="download">Yuklash</a>
                </div>
                <div className="education-card">
                    <h1>MUQADDIMA</h1>
                    <a href="muqaddima.pdf" download className="download">Yuklash</a>
                </div>
            </section>
        <Footer></Footer>
        </>
    )
}