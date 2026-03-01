import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BBDD-InfoWeb",
  description: "La InfoWeb de Bases de Datos",
  icons: {
    icon: "/assets/icons/colorIcon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased min-h-screen pt-[12vw] pb-[5vw]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
