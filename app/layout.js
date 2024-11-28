import "./globals.css";
import{ Baloo_Bhai_2 }from 'next/font/google';

const inter =  Baloo_Bhai_2({ subsets: ['latin'],})
export const metadata = {
  title: "Todo App",
  description: "an todo app to manage your tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}antialiased bg-gray-900 text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
