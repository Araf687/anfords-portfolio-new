"use client";
import Section from '@/components/ui/Section';
import { allBrands } from '@/lib/constants';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const SingleBrand = ({ params }: { params: { brandId: string } }) => {
    const [brandData, setBrandData] = useState<any>(null);

    useEffect(() => {
        const brand = allBrands.find((brand) => brand.id.toString() === params.brandId);
        console.log(brand)
        setBrandData(brand);
    }, [params.brandId]);

    return (
        <Section>
            <h1 className="text-2xl font-bold">Single Brand Page</h1>
            {brandData ? (
                <div>
                    <h2 className="text-xl">{brandData.brandName}</h2>
                    <Image src={brandData.image.color} alt={brandData.brandName} />
                </div>
            ) : (
                <p>Brand not found</p>
            )}
        </Section>
    );
};

export default SingleBrand;
