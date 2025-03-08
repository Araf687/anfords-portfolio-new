import React, { ReactNode } from 'react';

const SectionDescription = ({children,className}:{children:ReactNode,className?:string}) => {
    return (
        <p className={`${className} tracking-wide text-justify`}>{children}</p>
    );
};

export default SectionDescription;