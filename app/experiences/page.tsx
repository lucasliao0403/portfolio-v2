'use client'

import React from 'react'
import {useEffect} from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

function Page(props:any) {
    const router = useRouter();
    const searchParams = useSearchParams()

    const exp = searchParams.get('exp')

    useEffect(() => {
        if (exp) {
            const element = document.querySelector("#" + exp); // works
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        

      }, []);

    return ( // no work mayne
        <div>
            <div className="h-[110vh] bg-orange" id="1">
                aa
            </div>
            <div className="h-[100vh] bg-cyan" id="markvilleAppDev">
                aa
            </div>
        </div>
    );
}

export default Page;