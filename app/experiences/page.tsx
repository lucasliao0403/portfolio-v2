'use client'

import React from 'react';
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

function Page(props:any) {
    const router = useRouter();
    const searchParams = useSearchParams()

    const exp = searchParams.get('exp')
    console.log(exp)
    return (
        <div>
            yuh
        </div>
    );
}

export default Page;