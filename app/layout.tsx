import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";
import Header from "./components/navigation/header";
import PageTransition from "./components/page-transition";
import Footer from "./components/footer";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Ace Media Group",
  description: "Powering Digital Success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${newsreader.variable} antialiased`}>
        <PageTransition>
          <Header />
          <main className="mt-18">{children}</main>
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
