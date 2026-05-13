import { Inter, Poppins } from "next/font/google";
import CustomCursor from "./components/CustomCursor";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Minuri Viranga Punchihewa | Software Engineer",
  description:
    "Software Engineer with 4+ years of experience in developing web and mobile applications. Skilled in delivering scalable, high-performance, and user-centric solutions.",
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
      "Explore projects and works by Minuri Viranga, a Software Engineer specializing in modern web technologies like React, Next.js, and Flutter.",
    url: "https://www.minuriviranga.com",
    siteName: "Minuri Viranga Portfolio",
    images: [
      {
        url: "/og-image.jpg",
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
      "Software Engineer skilled in React, Next.js, Flutter, and more. Explore Minuri's projects and designs.",
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
        className={`${poppins.variable} ${inter.variable} antialiased`}
      >
        {/* Background layers */}
        <div className="mesh-gradient" aria-hidden="true" />
        <div className="noise-overlay" aria-hidden="true" />
        
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
