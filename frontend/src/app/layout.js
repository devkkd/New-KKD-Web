import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kontent Kraft Digital",
  description:
    "Kontent Kraft Digital - Digital experiences and creative solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}