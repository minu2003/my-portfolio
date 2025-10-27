import { Nunito_Sans, Poppins, Roboto } from "next/font/google";
import CustomCursor from "./components/CustomCursor";
import "./globals.css";

//  Fonts setup
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

//  SEO Metadata
export const metadata = {
  title: "Minuri Viranga Punchihewa | Front-End Developer Portfolio",
  description:
    "I'm Minuri Viranga, a passionate Front-End Developer skilled in React, Next.js, Tailwind CSS, and Flutter. Explore my portfolio and projects.",
  keywords: [
    "Minuri Viranga",
    "Minuri Viranga Punchihewa",
    "Software Engineer",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
  ],
  authors: [{ name: "Minuri Viranga Punchihewa" }],
  creator: "Minuri Viranga Punchihewa",
  publisher: "Minuri Viranga Punchihewa",
  metadataBase: new URL("https://www.minuriviranga.com"),
  openGraph: {
    title: "Minuri Viranga Punchihewa | Portfolio",
    description:
      "Explore projects and works by Minuri Viranga, a Front-End Developer specializing in modern web technologies like React, Next.js, and Tailwind CSS.",
    url: "https://www.minuriviranga.com",
    siteName: "Minuri Viranga Portfolio",
    images: [
      {
        url: "/og-image.jpg", // your OG image (1200x630 recommended)
        width: 1200,
        height: 630,
        alt: "Minuri Viranga Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minuri Viranga Punchihewa | Portfolio",
    description:
      "Front-End Developer skilled in React, Next.js, Tailwind CSS, and Flutter. Explore Minuri's projects and designs.",
    creator: "@minuriviranga",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.png",
  },
  alternates: {
    canonical: "https://www.minuriviranga.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} ${nunitoSans.variable} antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
