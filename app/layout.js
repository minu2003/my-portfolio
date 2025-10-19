import { Poppins, Roboto, Nunito_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"], // you can specify the font weights you want to use
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "700"], // specify weights if needed
});

export const metadata = {
  title: "Minuri Viranga Punchihewa",
  description: "Minuri's personal portfolio",
  icons:{
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable} ${nunitoSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
