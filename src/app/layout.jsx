import "./globals.css";

// const openSans = Open_Sans({
//   subsets: ['latin'],      
//   weight: ['400', '500', '600', '700'],  
//   display: 'swap',
// })
export const metadata = {
  title: "RAQAMLI TRANSFORMATSIYA SHAROITIDA ONLAYN MEDIA",
  description: "Jahonda raqamli transformatsiya mediamakonni tubdan o‘zgartirib, jurnalistik faoliyat va kontent tarqatish jarayonlarini yangi bosqichga olib chiqdi. Bu jarayon onlayn mediada media etika, axloqiy dilemmalar, ularning huquqiy va institutsional mexanizmlarini deontologik hamda konsektivistik yondashuvlar asosida ilmiy o‘rganishni dolzarb masalaga aylantirmoqda."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
