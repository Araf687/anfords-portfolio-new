import { useRouter } from 'next/router';
import React from 'react';

const CheckId = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <div>
            asad{ id }
        </div>
    );
};

export default CheckId;