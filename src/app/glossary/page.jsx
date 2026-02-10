"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState } from "react"

export default function Glossary() {

    const [filter, setFilter] = useState("all")

    const words = [
        {id: 1, title: "Atrof-muhit", definition: "Insonni o‘rab turuvchi tirik va notirik tabiat", letter: "letterA"},
        {id: 2, title: "Axborot", definition: "Manbalari va taqdim etilish shaklidan qat’i nazar shaxslar, predmetlar, faktlar, voqealar, hodisalar va jarayonlar to‘g‘risidagi ma’lumotlar", letter: "letterA"},
        {id: 3, title: "Axborot egasi", definition: "Qonunda yoki axborot mulkdori tomonidan belgilangan huquqlar doirasida axborotga egalik qiluvchi, undan foydalanuvchi va uni tasarruf etuvchi yuridik yoki jismoniy shaxs", letter: "letterA"},
        {id: 4, title: "Axborot sohasi", definition: "Subyektlarning axborotni yaratish, qayta ishlash va undan foydalanish bilan bog‘liq faoliyati sohasi", letter: "letterA"},
        {id: 5, title: "Axloq", definition: "«Xulq» so‘zining ko‘pligi bo‘lib, insonda shakllanadigan xulq-atvorni bildiradi", letter: "letterA"},
        {id: 6, title: "Ayb", definition: "Shaxsning jinoyat qonuni b-n belgilangan o‘zining ijtimoiy xavfli qilmishi va uning oqibatiga nisbatan ruhiy va intellektual munosabat", letter: "letterA"},
        {id: 7, title: "Ayblanuvchi", definition: "Muayyan bir jinoyatni sodir etishda hali aybi to‘liq isbot qilinmagan gumondor shaxs", letter: "letterA"},
        {id: 8, title: "Ayblov", definition: "Muayyan jinoiy qilmishni sodir etganlikda shaxsning aybdorligini isbotlash maqsadida qilingan harakat", letter: "letterA"},
        {id: 9, title: "Aybsizlik prezumpsiyasi", definition: "(lotin. preasumptio) – jinoyat-huquqiy qonunchilikda odil sudlovning asosiy prinsiplaridan biri", letter: "letterA"},
        {id: 10, title: "Blog", definition: "Ingl. blog, web log – hodisalar internet-jurnali, internet-kundalik, onlayn-kundalik) – bu shunday veb-saytki, uning asosiy mazmunini matn, tasvir yoki multimediadan iborat muntazam to‘ldirib boriladigan qaydlar (postlar) tashkil etadi.", letter: "letterB"},
        {id: 11, title: "Bola", definition: "O‘n sakkiz yoshga to‘lgunga qadar bo‘lgan shaxs", letter: "letterB"},
        {id: 12, title: "Deontologiya", definition: "Grek tilidagi deon – burch va logia – shunoslik", letter: "letterD"},
        {id: 13, title: "Etika", definition: "Kishilarda odob-axloq munosabatlarining, tushunchalarning, qadriyatlarning, qonuniyatlarning vujudga kelishini, ularning odamlarni boshqarishdagi o‘rni va ahamiyati.", letter: "letterE"},
        {id: 14, title: "Ekologiya", definition: "(lotin tilida “oikos”-uy,  “logos”-ta’lim)-tirik organizmlarning atrof-muhit bilan aloqadorligi", letter: "letterE"},
        {id: 15, title: "Fotografiya", definition: "“Fotos” yorug‘lik, “grafo” yozaman", letter: "letterF"},
        {id: 16, title: "Global", definition: "(Yunon tilidan “globus-shar”)-butun dunyoni qamrab oluvchi", letter: "letterG"},
        {id: 17, title: "Gumanizm", definition: "(Yunon tilidan “humans” odamiy)-tenglik, adolatlilik, insoniylikka asoslangan dunyoqarash", letter: "letterG"},
        {id: 18, title: "Ijtimoiy himoyaga muhtoj bola", definition: "yuzaga kelgan holatlar sababli og‘ir turmush sharoitida qolgan, davlat va jamiyat tomonidan alohida himoya qilishga hamda qo‘llab-quvvatlashga muhtoj bolalar", letter: "letterI"},
        {id: 19, title: "Ijtimoiy tarmoq", definition: "(Ingl. social networking service) – o‘zaro ijtimoiy munosabatlarni shakllantirish, aks ettirish va tashkil etishga mo‘ljallangan platforma, onlayn-servis yoki veb-sayt", letter: "letterI"},
        {id: 20, title: "Ikki palatali tizim", definition: "(Bikameralizm, фр.Bicamerisme) – umummilliy vakillik organlari (Parlament)ning tuzilishi bo‘lib, unda Parlament turlicha vakolatlarga ega ikkita palatadan tashkil topgan bo‘ladi. Bunda Parlamentning quyi palatasi har doim xalq tomonidan saylanadi. Yuqori palata esa bevosita yoki bilvosita saylovlar yoki nasldan naslga o‘tish yo‘li bilan shakllantiriladi.", letter: "letterI"},
        {id: 21, title: "Imkoniyati cheklangan bolalar", definition: "Jismoniy va(yoki) ruhiy kamchiligi bo‘lgan, tug‘ma, irsiy, orttirilgan kasalliklar, jarohat va shikastlanishlar natijasida hayotiy faoliyati cheklangan, hamda bu holat o‘rnatilgan tartibda tasdiqlangan bolalar.", letter: "letterI"},
        {id: 22, title: "Intervyu", definition: "(Ingl. interview) – ikki va undan ortiq kishilar o‘rtasidagi suhbatning turi bo‘lib, intervyu oluvchi suhbatdoshlariga savol beradi va ulardan javob oladi", letter: "letterI"},
        {id: 23, title: "Internet", definition: "Butunjahon global kompyuter tarmog‘i", letter: "letterI"},
        {id: 24, title: "Janr", definition: "Fotojurnalistikada materialni berish usuli", letter: "letterJ"},
        {id: 25, title: "Jurnalist", definition: "Maydonda yuz berayotgan voqealarga dahli yo‘q fuqaro shaxs, uning birdan-bir vazifasi-yuz bergan voqea-hodislalar haqida jamoatchilikka xabar beradigan shaxs.", letter: "letterJ"},
        {id: 26, title: "Kar-soqovlik", definition: "Eshitish qobiliyatidagi og‘ir ko‘rinishdagi buzilish va uning oqibatida kelib chiqqan nutqning yo‘qligi; aksariyat hollarda tug‘ma yoki bolalikda orttirilgan eshitish qobiliyatidagi buzilish oqibatida kelib chiqadi. Bunda maxsus o‘qitishsiz (xatto nutq-harakat apparati saqlanib qolgan bo‘lsa ham), bola og‘zaki nutqni o‘zlashtira olmaydi (atrofdagilarning gaplarini eshitmagach, bola ularga taqlid qila olmaydi).", letter: "letterK"},
        {id: 27, title: "Kasb etikasi", definition: "Kishilar o‘rtasidagi kasb faoliyati bilan bog‘liq munosabatlarga ma’rifiy tus beradigan xulq-atvor kodekslaridir.", letter: "letterK"},
        {id: 28, title: "Kodeks", definition: "Mantiqiy tizimlashtirish xususiyatiga ega qonun bo‘lib, o‘zida ijtimoiy munosabatlarning ma’lum bir sohasini batafsil tartibga soluvchi normalarni birlashtiradi.", letter: "letterK"},
        {id: 29, title: "Ko‘r-kar-soqovlik (ko‘r-karlik)", definition: "Murakkab nuqsonning eng og‘ir ko‘rinishi bo‘lib, unda ko‘rish va eshitish apparati shikastlangan bo‘ladi; maxsus o‘qitilmasa, nutq shakllanmaydi.", letter: "letterK"},
        {id: 30, title: "Muhbir", definition: "Mehnat shartnomalari va boshqa shartnomaviy munosabatlar asosida ommaviy axborot vositalari tahririyatlari uchun xabarlar va materiallarni qidirish, to‘plash, qayta ishlash va tayyorlash kasbi bilan shug‘ullanadigan jismoniy shaxs.", letter: "letterM"},
        {id: 31, title: "Nogiron", definition: "Jismoniy yoki aqliy kamchiligi bo‘lgani bois hayotiy faolligi cheklangan va ijtimoiy himoya hamda yordamga muxtoj bo‘lgan shaxs. Shaxsning hayotiy faolligining cheklanganligi uning o‘z o‘ziga xizmat qilish, harakatlanish, yo‘nalish olish, muloqot qilish, o‘z xatti-harakatini nazorat qilish, shuningdek mehnat faoliyati bilan shug‘ullanish qobiliyatini qisman yoki to‘liq yo‘qotishida namoyon bo‘ladi.", letter: "letterN"},
        {id: 32, title: "Nogiron bola", definition: "Jismoniy, aqliy, sensor (sezgi) va (yoki) ruhiy nuqsonlari bo‘lganligi tufayli turmush faoliyati cheklanganligi munosabati bilan ijtimoiy yordamga, himoyaga muhtoj hamda qonunda belgilangan tartibda nogiron deb topilgan bola;", letter: "letterN"},
        {id: 33, title: "Nogiron mustaqilligi deklaratsiyasi", definition: "Faol shaxsning, o‘z hayoti va ijtimoiy o‘zgarishlar subyektining pozitsiyasini aks ettiradi. «Mening nogironligimni muammo sifatida qabul qilmanglar. Menga achinmanglar, men sizlar o‘ylaganchalik ojiz emasman. Menga bemor sifatida munosabatda bo‘lmanglar, men shunchaki sizlarning vatandoshingizman. Meni o‘zgartirishga urinmang, bunga haqqingiz yo‘q. Meni boshqarishga urinmang, boshqa shaxslar singari men ham shaxsiy hayot huquqiga egaman. Meni itoatkor, yuvosh va muloyim bo‘lishga majburlamang, menga iltifot ko‘rsatmang. Nogironlar duch keladigan asl muammo ularning kasalligida emas, balki ularning ijtimoiy jihatdan past baholanishi va kamsitilishida, ularga nisbatan mensimay munosabatda bo‘linishida namoyon bo‘ladi. Kuchim yetganicha jamiyatga foyda keltirishga urinishlarimda meni qo‘llab-quvvatlang. Menga bilmaganlarimni bilishimda yordam bering. Vaqtini ayamay g‘amxo‘rlik qiladigan inson bo‘ling. Bir birimiz bilan tortishgan paytimizda ham men bilan birga bo‘ling. Garchi bu sizga huzur bag‘ishlasa ham, menda zarurat bo‘lmagan paytda yordam bermang. Menga xayrat bilan boqmang, to‘laqonli hayot kechirishga intilish xayratlanishga arzimaydi. Meni yaxshiroq bilishga harakat qiling, balki shunda do‘st bo‘lib qolarmiz. Mendan o‘z maqsadlari yo‘lida foydalanayotganlarga qarshi kurashda mening ittifoqchim bo‘ling. Keling, bir birimizni hurmat qilaylik; axir hurmat tenglikni nazarda tutadi; meni tinglang, qo‘llab-quvvatlang va harakat qiling».", letter: "letterN"},
        {id: 34, title: "Nogironlar huquqlari to‘g‘risida deklaratsiya", definition: "BMT Bosh Assambleyasi tomonidan 1975 yilda qabul qilingan xalqaro hujjat bo‘lib, insoniyat tarixida birinchi marta davlatlarga nogironlarning quyidagi asosiy huquqlarini ta’minlash tavsiya etilgan: tibbiy, ruhiy va ijtimoiy reabilitatsiya, protez-ortopediya yordami olish; kasbiy tayyorgarlik va ish bilan ta’minlanish; turli ijtimoiy xizmatlardan foydalanish; iqtisodiy va ijtimoiy ta’minot; iqtisodiy va ijtimoiy rejalashtirishning barcha bosqichlarida nogironlarning alohida extiyojlarini e’tiborga olish; malakali yuridik xizmatdan foydalanish; nogironlar, ularning oila a’zolari va jamiyatlarining mazkur Deklaratsiyada aks etgan axborot bilan tanishish va undan foydalanish ҳуқуқи.БМТ Bosh Assambleyasi tomonidan 1975 yilda qabul qilingan xalqaro hujjat bo‘lib, insoniyat tarixida birinchi marta davlatlarga nogironlarning quyidagi asosiy huquqlarini ta’minlash tavsiya etilgan: tibbiy, ruhiy va ijtimoiy reabilitatsiya, protez-ortopediya yordami olish; kasbiy tayyorgarlik va ish bilan ta’minlanish; turli ijtimoiy xizmatlardan foydalanish; iqtisodiy va ijtimoiy ta’minot; iqtisodiy va ijtimoiy rejalashtirishning barcha bosqichlarida nogironlarning alohida extiyojlarini e’tiborga olish; malakali yuridik xizmatdan foydalanish; nogironlar, ularning oila a’zolari va jamiyatlarining mazkur Deklaratsiyada aks etgan axborot bilan tanishish va undan foydalanish huquqi.", letter: "letterN"},
        {id: 35, title: "Nuqson", definition: "Ruhiy, fiziologik, yoki anatomik tuzilish, yoxud funksiyaning har qanday shakldagi yo‘qotilishi yoki undan chetga chiqish. Defektlar, nogironlik va mehnatga layoqatsizlikning Xalqaro tasnifi, Butunjahon sog‘liqni saqlash tashkiloti, Jeneva, 1980 yil", letter: "letterN"},
        {id: 36, title: "Ommaviy axborot", definition: "Cheklanmagan doiradagi shaxslar uchun mo‘ljallangan hujjatlashtirilgan axborot, bosma, audio, audiovizual hamda boshqa xabarlar va materiallar", letter: "letterO"},
        {id: 37, title: "Ota-ona qaramog‘idan mahrum bo‘lgan bola", definition: "Har qanday sababga ko‘ra ota-ona qarmog‘idan mahrum bo‘lgan bola, yetim bola bundan mustasno", letter: "letterO"},
        {id: 38, title: "Parlament", definition: "(Parliament, фр.Parlement,  fransuzcha Parler – gapirmoq degan ma’noni bildiradi) – demokratik davlatlarda oliy vakillik va qonun chiqaruvchi organ. Bir va ikki palatali Parlamentlar mavjud.", letter: "letterP"},
        {id: 39, title: "Parlament sessiyasi", definition: "(Lot.Sessio – yig‘ilish) – Parlament va uning komissiyalarining yalpi majlislari bo‘lib o‘tadigan davr. Bir yil davomida o‘tkaziladigan Parlament sessiyalari soni qonun yo‘li bilan, yoki an’analarga ko‘ra belgilanadi.", letter: "letterP"},
        {id: 40, title: "Sayt", definition: "(Ingl. website: web – «o‘rgimchak to‘ri, tarmoq» va site – «o‘rin», so‘zma-so‘z tarjima qilganda «tarmoqdagi o‘rin, segment, bo‘lak») – xususiy shaxs yoki tashkilotning bitta manzilda (domen nom yoki IP-manzil) jamlangan kompyuter tarmog‘idagi elektron hujjatlari (fayllar) to‘plami.", letter: "letterS"},
        {id: 41, title: "Telejurnalistika", definition: "Telejurnalistika – jurnalistika qonun-qoidalarining  televideniye imkoniyatlari bilan birlashmasidan iborat", letter: "letterT"},
        {id: 42, title: "Vaqtinchalik nogironlik", definition: "Kasallik, shikastlanish yoki rivojlanishdagi kamchiliklar oqibatida yuzaga keladigan organizm funksiyalarining barqaror patalogik buzilishlari keltirib chiqaradigan uzoq muddatga ishga yaroqlilik qobiliyatining to‘liq yoki qisman yo‘qotilishi. O‘zbekistonda vaqtinchalik nogironlik ma’lum bir vaqtga belgilanadi. Ma’lum bir ijtimoiy omillar ta’siri ostida buzilgan ishga yaroqlilik qobiliyati tiklanishi yoki yanada chuqurlashishi mumkin deb hisoblanadi", letter: "letterV"},
        {id: 43, title: "Yaxshi ko‘rmaydigan bolalar", definition: "Eshitish qobiliyati sustligi (qulog‘i og‘irlik)dan aziyat chekadigan va shuning oqibatida nutqida buzilish bo‘lgan bolalar; kar bolalardan farqli ravishda yaxshi eshitmaydigan bolalar eshitish yo‘li bilan ma’lum miqdordagi so‘z boyligini to‘play olishadi.", letter: "letterY"},
        {id: 44, title: "Yetim bola", definition: "Otasi ham, onasi ham vafot etgansyoki ular sud qaroriga binoan vafot etgan deb e’lon qilingan bola", letter: "letterY"},
        {id: 45, title: "Yevropa parlamenti", definition: "(YevroParlament) (European Parliament (Europarliament)) – Yevropa Ittifoqiga a’zo davlatlar aholisi tomonidan besh yil muddatga to‘g‘ridan to‘g‘ri saylanadigan 626 nafar deputatdan iborat organ. YevroParlament Raisi ikki yarim yil muddatga saylanadi. YevroParlament deputatlari qonun loyihalarini o‘rganib chiqishadi va budjetni tasdiqlashadi, YEI kengashlari va Yevropa Komissiyasi faoliyatini nazorat qiladi. YevroParlamentning yig‘ilishlari Strasburg (Fransiya) va Bryussel (Belgiya) shaharlarida o‘tkaziladi.", letter: "letterY"},
        
    ]

    const filters = [
        {label: "Barcha atamalar", value: "all"},
        {label: "A", value: "letterA"},
        {label: "B", value: "letterB"},
        {label: "D", value: "letterD"},
        {label: "E", value: "letterE"},
        {label: "F", value: "letterF"},
        {label: "G", value: "letterG"},
        {label: "I", value: "letterI"},
        {label: "J", value: "letterJ"},
        {label: "K", value: "letterK"},
        {label: "M", value: "letterM"},
        {label: "N", value: "letterN"},
        {label: "O", value: "letterO"},
        {label: "P", value: "letterP"},
        {label: "S", value: "letterS"},
        {label: "T", value: "letterT"},
        {label: "V", value: "letterV"},
        {label: "Y", value: "letterY"},
    ]

    const filteredWords = 
        filter === "all"
        ? words
        : words.filter((word) => word.letter === filter)

    return(
        <>
        <Header></Header>
            <section className="glossary">
                <div className="filterContainer">
                    <div className="filterButtons">
                        {filters.map((btn) =>(
                            <button key={btn.value} onClick={() => {setFilter(btn.value)}} className={`filterBtn ${filter === btn.value ? "filterBtnActive" : "filterBtnInactive"}`}>
                                {btn.label}
                            </button>
                        ))}    
                    </div>
                    <div className="wordsContainer">
                        {filteredWords.length ? (
                            filteredWords.map((word) => (
                                <div className="wordsCard" key={word.id}>
                                    <h3 className="wordTtile">{word.title}</h3>
                                    <p className="wordDefinition">{word.definition}</p>
                                </div>
                            ))
                        ) : (
                            <div className="noResults">
                                <p>No result</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        <Footer></Footer>
        </>
    )
}