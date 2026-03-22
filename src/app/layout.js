import { Inter } from "next/font/google";
import "./globals.css";
import TopUtilityBar from "../components/TopUtilityBar";
import Header from "../components/Header";
import NewsTicker from "../components/NewsTicker";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

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
      <head />
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="sticky-top-wrapper">
          <TopUtilityBar />
          <Header />
          <NewsTicker />
        </div>
        <main style={{ minHeight: 'calc(100vh - 400px)', paddingTop: '210px' }}>
          {children}
        </main>
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
