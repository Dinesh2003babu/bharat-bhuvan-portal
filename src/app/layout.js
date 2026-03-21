import { Inter } from "next/font/google";
import "./globals.css";
import TopUtilityBar from "../components/TopUtilityBar";
import Header from "../components/Header";
import NewsTicker from "../components/NewsTicker";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bharat Bhuvan Book of Records | Official Portal",
  description: "Official portal for the Bharat Bhuvan Book of Records. Apply for a record, verify certificates, and view the database.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}</style>
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <TopUtilityBar />
        <Header />
        <NewsTicker />
        <main style={{ minHeight: 'calc(100vh - 400px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
