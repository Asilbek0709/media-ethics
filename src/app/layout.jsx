import "./globals.css";

// const openSans = Open_Sans({
//   subsets: ['latin'],      
//   weight: ['400', '500', '600', '700'],  
//   display: 'swap',
// })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
