import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from 'react'
import { NavigationEvents } from '@/components/navigation-events'
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucas Liao",
  description: "Lucas' Personal Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className}>
            {children}
            <Suspense fallback={null}>
                <NavigationEvents />
            </Suspense>
            <Footer/>
        </body>
    </html>
  );
}
