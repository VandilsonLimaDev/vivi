import { Pacifico, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const titlemain = Pacifico({
  variable: "--font-title-main",
  subsets: ["latin"],
  weight: ["400"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Projeto Crochet Love",
  description: "Projeto do 1º Ano do Ensino Médio - Colégio D'Lins",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${titlemain.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
