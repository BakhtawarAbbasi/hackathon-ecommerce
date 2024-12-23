import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "E-commerce Hackaton",
  description: "E-commerce Website for Hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}
