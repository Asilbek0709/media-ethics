"use client"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Case() {
    return(
        <>
            <Header></Header>
                <section className="case-explanation">
                    <h1>РУПЕРТ МЁРДОКНИ ИСТЕЪФОГА ЧИҚАРГАН ЖАНЖАЛ</h1>
                    <p>Одамларнинг шахсий ҳаётига аралашиш жиддий масала. Ҳеч кимнинг бировнинг шахсий ҳаётига аралашишга ҳаққи йўқ. Айнан шу шахсият масаласи туфайли ҳам Руперт Мёрдокнинг 168 йилдан бери нашр этилаётган <strong>«News of the World»</strong> газетаси 2011 йил 7 июль куни тамомила ёпилган. Сабаби, жамоатчилик нашрдан норози бўлган.</p>
                    <iframe src="/case2.pdf" className="pdf-viewer" frameBorder={0}></iframe>
                </section>
            <Footer></Footer>
        </>
    )
}