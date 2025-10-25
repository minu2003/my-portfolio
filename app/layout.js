import { Nunito_Sans, Poppins, Roboto } from "next/font/google";
import "./globals.css";

// Fonts setup
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

// SEO Metadata
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
        url: "/assets/nameicon.png", // ✅ Updated here
        width: 512,
        height: 512,
        alt: "Minuri Viranga Punchihewa Logo",
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
    images: ["/assets/nameicon.png"], // ✅ Updated here
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
        {/* ✅ Updated Organization schema for Google logo display */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Minuri Viranga Punchihewa",
              url: "https://www.minuriviranga.com",
              logo: "https://www.minuriviranga.com/assets/nameicon.png", // ✅ Updated here
              sameAs: [
                "https://www.linkedin.com/in/minuri-viranga-b9bb3829a",
                "https://github.com/minuriviranga",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
