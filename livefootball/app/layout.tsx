import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter} from "next/font/google";
import "./globals.css";
import SearchBar from "@/app/components/searchBar/SearchBar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Live Scores & Stats",
  description: "Football app that shows live scores, updates and stats!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <div className='relative bg-black'>
        <div className='absolute top-0 left-0 w-full h-full'>
          <img
              src='/wallpaper.jpg'
              alt='backgroundImage'
              className='h-screen w-full object-cover'
          />
        </div>
        <div className='absolute top-0 left-0 w-full h-screen bg-gradient-to-b
                          from-black/10 to-black'/>
        <div className='relative'>
          <SearchBar/>
          {children}
        </div>
      </div>

      </body>
      </html>
  );
}
