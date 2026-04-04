"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Articles(){
    return(
        <>
            <Header></Header>
            <div className="articlesPage">
                <section className="cases-hero">
                    <h1>Chop etilgan ishlar</h1>
                </section>
                <div className="articlesContainer">
                    <div className="articleCard">
                        <h2>Fotojurnalistikada axloqiy dilemmalar: etika, mas’uliyat va kasbiy me’yor</h2>
                        <div className="articleInfo">
                            <p>103-104</p>
                            <a href="/article1.pdf" download>Yuklash</a>  
                        </div>
                    </div>
                    <div className="articleCard">
                        <h2>Xotin-qizlar nashrlarida mediа etika muаmmоlаri (Buyuk Britаniyа tаjribаsi asosida)</h2>
                        <div className="articleInfo">
                            <p>41-42</p>
                            <a href="/article2.pdf" download>Yuklash</a>  
                        </div>
                    </div>
                    <div className="articleCard">
                        <h2>Internet аxbоrоt muhitidа аxlоqiy me’yоrlаrni shаkllаntirish vа tа’minlаsh muаmmоlаri</h2>
                        <div className="articleInfo">
                            <p>103-105</p>
                            <a href="/article3.pdf" download>Yuklash</a>  
                        </div>
                    </div>
                    <div className="articleCard">
                        <h2>Ethics and actual functions of journalists in Uzbekistan</h2>
                        <div className="articleInfo">
                            <p>78-80</p>
                            <a href="/article4.pdf" download>Yuklash</a> 
                        </div>
                    </div>
                    <div className="articleCard">
                        <h2>ИНФОГРАФИКА ВА МЕДИА АХЛОҚ: ВИЗУАЛ АХБОРОТ ЭТИКАСИНИНГ ДОЛЗАРБ МАСАЛАЛАРИ</h2>
                        <div className="articleInfo">
                            <p>179-184</p>
                            <a href="/article5.pdf" download>Yuklash</a>  
                        </div>
                    </div>
                    <div className="articleCard">
                        <h2>Ethical Dimensions of Visual Communication in Modern Media: Challenges and Responsibilities in the Use of Infographics</h2>
                        <div className="articleInfo">
                            <p>67-71</p>
                            <a href="/article6.pdf" download>Yuklash</a> 
                        </div>
                    </div>
                    <div className="articleCard">
                        <h2>MEDIA AXLOQINING KONVERGENT JURNALISTIKADAGI O‘RNI VA DOLZARB MUAMMOLARI</h2>
                        <div className="articleInfo">
                            <p>748-751</p>
                            <a href="/article7.pdf" download>Yuklash</a>
                        </div>
                    </div>
                    <div className="articleCard">
                        <h2>Development of multimedia technologies and media ethics in modern journalism</h2>
                        <div className="articleInfo">
                           <p>479-482</p>
                            <a href="/article8.pdf" download>Yuklash</a> 
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}