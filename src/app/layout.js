
import AppLoader from "@/components/appLoader";
import "./globals.css";


export const metadata = {
  title: "Idris Mutolib - Frontend Developer Portfolio",
  description: "3+ years experienced Frontend Developer specializing in React, Next.js, and modern web applications. View my portfolio of dental clinics, e-commerce, hotel booking, and construction websites.",
  keywords: ["Frontend Developer", "React Developer", "Next.js Developer", "Web Developer", "JavaScript", "Tailwind CSS", "Portfolio"],
  authors: [{ name: "Idris Mutolib" }],
  creator: "Idris Mutolib",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Idris Mutolib - Frontend Developer Portfolio",
    description: "3+ years experienced Frontend Developer specializing in React, Next.js, and modern web applications.",
    siteName: "Idris Mutolib Portfolio",
    images: [
      {
        url: "/images/set.jpg",
        width: 1200,
        height: 630,
        alt: "Idris Mutolib Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Idris Mutolib - Frontend Developer Portfolio",
    description: "3+ years experienced Frontend Developer specializing in React, Next.js, and modern web applications.",
    images: ["/images/set.jpg"],
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
    
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
         <AppLoader>
            {children}
         </AppLoader>
           
       
        </body>
      </html>
    
  )
}