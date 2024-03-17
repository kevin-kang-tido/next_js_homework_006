import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import FooterComponent from "@/components/footer/FooterComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CSTAD",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <NavbarComponent/>
        {children}
        <FooterComponent/>
        </body>
    </html>
  );
}
