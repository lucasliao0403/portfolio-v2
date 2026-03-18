'use client'

import { useEffect } from "react";
import Hero from "@/components/hero";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
    useEffect(() => {
        const parent = document.querySelector('[data-layout]') as HTMLElement;
        if (parent) {
            parent.classList.add('lg:h-screen', 'lg:overflow-hidden', 'lg:flex', 'lg:flex-col');
        }
        return () => {
            if (parent) {
                parent.classList.remove('lg:h-screen', 'lg:overflow-hidden', 'lg:flex', 'lg:flex-col');
            }
        };
    }, []);

    return (
        <>
        <main className="font-mono text-white max-w-[100vw] lg:flex-1 lg:min-h-0 flex flex-col lg:overflow-y-auto">
            <Hero/>
            <Analytics/>
        </main>
        </>
    );
}
