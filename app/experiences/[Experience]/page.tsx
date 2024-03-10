import React from 'react';
import { useRouter } from 'next/router';

function Page(props:any) {
    const router = useRouter();
  const { classId } = router.query;
    return (
        <div>
            yuh
        </div>
    );
}

export default Page;