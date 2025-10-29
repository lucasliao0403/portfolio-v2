import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from 'react'
import { NavigationEvents } from '@/components/navigation-events'
import Footer from "@/components/footer";
import Layout from '@/components/layout'
import SocialHeader from '@/components/SocialHeader'
import MobileBackButton from '@/components/MobileBackButton'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucas Liao",
  description: "Lucas' Personal Site",
  icons: {
    icon: "/quagsire.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
            <body className={`${inter.className} overscroll-none`}>
                <SocialHeader />
                <MobileBackButton />
                <Layout className="overflow-visible">
                    <Suspense fallback={<div>Loading...</div>}>
                        {children}
                    </Suspense>
                    <Suspense fallback={null}>
                        <NavigationEvents />
                    </Suspense>
                    <Footer/>
                </Layout>
            </body>
        </html>

  );
}
