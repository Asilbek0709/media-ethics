"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default function About(){


    return(
        <>
            <Header></Header>
            <section className="about-section">
                <div className="about-hero">
                    <div className="about-hero-information">
                        <h1>Ushbu platforma haqida</h1>
                        <p>Mas’uliyatli jurnalistika va media amaliyotining axloqiy asoslarini tushunish.</p>
                    </div>
                </div>
                <div className="mission-container">
                    <h1>Bizning vazifamiz</h1>
                    <div className="mission-card">
                        <p>Media Etika Platformasi raqamli davrda jurnalistlar, ommaviy axborot vositalari tashkilotlari va jamiyat oldida turgan axloqiy muammolar yuzasidan chuqur va ongli muhokamalarni rivojlantirishga qaratilgan. Biz axloqiy mezonlarni anglash va real hayotdagi murakkab vaziyatlarni tahlil qilish mas’uliyatli va ishonchli media amaliyotlarini shakllantirishda muhim ahamiyatga ega, deb hisoblaymiz. <br /> <br /> Nazariy asoslar, muhim amaliy misollar (keyslar) va zamonaviy axloqiy dilemmalarni taqdim etish orqali Platforma jurnalistlar, talabalar, o‘qituvchilar hamda faol fuqarolarga qarama-qarshi qadriyatlar o‘rtasida muvozanatni saqlagan holda, jamoatchilik manfaatlariga xizmat qiluvchi axloqiy qarorlar qabul qilishda ko‘maklashishni maqsad qiladi.</p>
                    </div>
                </div>
                <div className="approach-container">
                    <h1>Bizning yondashuvimiz</h1>
                    <div className="approaches-container">
                        <div className="approach-card">
                            <p><strong>Axloqiy yondashuvlar (mezonlar)</strong> <br />Biz media sohasidagi qarorlarni turli nuqtai nazarlardan tahlil qilish imkonini berish maqsadida axloqiy nazariyalarning asosiy yo‘nalishlarini — deontologik yondashuv, oqibatlarga asoslangan (konsekvensialist) yondashuv, fazilatlar etikasi va g‘amxo‘rlik etikasi — o‘rgatamiz.</p>
                        </div>
                        <div className="approach-card">
                            <p><strong>Amaliy qo‘llash (real hayot misollari)</strong> <br />Nazariya jurnalistlar amalda duch keladigan muhim voqealar va zamonaviy axloqiy dilemmalar orqali jonlanadi — axborot manbalarini himoyalashdan tortib, shaxsiy hayot daxlsizligi bilan bog‘liq masalalargacha.</p>
                        </div>
                        <div className="approach-card">
                            <p><strong>Turli nuqtai nazarlar</strong> <br /> Biz axloqiy masalalarga doir turli qarashlarni taqdim etamiz, chunki media etikasi qarama-qarshi qadriyatlar va manfaatdor tomonlar (ishtirokchilar) manfaatlari o‘rtasida muvozanatni taqozo etadi.</p>
                        </div>
                        <div className="approach-card">
                            <p><strong>Amaliy resurslar</strong> <br /> Nazariyadan tashqari, biz uzluksiz o‘rganish va kasbiy rivojlanishni qo‘llab-quvvatlash maqsadida atamalar lug‘ati, amaliy tahlillar (keyslar) hamda muhokama forumlarini taqdim etamiz.</p>
                        </div>
                    </div>
                </div>
                <div className="ethics-matter-container">
                    <h1>Nega media etikasi muhim?</h1>
                    <div className="ethics-matter-card">
                        <p>Soxta axborotlar, algoritmlar orqali kontent tarqatish va ijtimoiy tarmoqlarda axborotning tezkor yoyilishi hukmron bo‘lgan davrda mas’uliyatli jurnalistikaning ahamiyati hech qachon bu qadar yuqori bo‘lmagan. Media sohasidagi axloqiy qarorlar quyidagi jihatlarga bevosita ta’sir ko‘rsatadi: <br /> <br /> Jamoatchilikning institutlarga va ishonchli axborotga bo‘lgan ishonchi <br /><br /> Axborot subyektlarining shaxsiy hayoti daxlsizligi va insoniy qadr-qimmati <br /><br /> Demokratik munozara muhiti va ongli fuqarolik Ijtimoiy himoyaga muhtoj guruhlar va adolatli tasvir <br /><br /> Jurnalistikaning o‘zi uchun ishonchlilik va barqarorlik</p>
                    </div>
                </div>
                <div className="serving-container">
                    <h1>Biz kimlarga xizmat qilamiz?</h1>
                    <div className="servings-container">
                        <div className="serving-card">
                            <p><strong>Kasbiy jurnalistlar</strong> Zamonaviy media sohasidagi doimiy o‘zgarishlar va yangi axloqiy muammolarga moslashish hamda axloqiy qaror qabul qilish ko‘nikmalarini chuqurlashtirishni istagan mutaxassislar uchun.</p>
                        </div>
                        <div className="serving-card">
                            <p><strong>Students and Educators</strong> <br />Academic communities studying media ethics, journalism, and communications at all educational levels.</p>
                        </div>
                        <div className="serving-card">
                            <p><strong>Media menejerlari</strong> <br /> Tahririy rahbarlar uchun — ular siyosatlarni ishlab chiqish, xodimlarni o‘qitish va yangiliklar tashkilotlarida axloqiy madaniyatni shakllantirish bilan shug‘ullanadi.</p>
                        </div>
                        <div className="serving-card">
                            <p><strong>Faol fuqarolar</strong> <br />Ommaviy axborot vositalari etikasi haqida chuqurroq tushunishni istaydigan va yangiliklarni tanqidiy va ongli tarzda qabul qiladigan jamoatchilik a’zolari uchun.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}