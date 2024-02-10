import { Cabin, Josefin_Sans } from "next/font/google";
import { Providers } from "base/app/providers";
import type { Metadata } from "next";
import { Contact, Footer, Header, Navigation } from "base/app/frame";

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-josefin",
});

export const metadata: Metadata = {
  title: "Laura Addams | Software Engineer",
  description: "I make things, and even stuff!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cabin.className} ${josefin.variable}`}>
      <body>
        <Header />
        <Contact />
        <Navigation />
        <main>
          <Providers>{children}</Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}
