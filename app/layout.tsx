import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Neo Movies",
  description: "Collection of best movies available to watch online",
  keywords: "movies, best, online, ott",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="roboto.className bg-brand-primary">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
