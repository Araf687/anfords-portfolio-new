import React from 'react';

const AtAGlanceCard = ({data}:{data:{heading1:string,heading2:string,description:string}}) => {
    const {heading1,heading2,description}=data;
    return (
        <div className='p-8 w-[12rem] bg-[#014787] text-center space-y-3 text-white rounded-lg'>
            <h3 className='text-3xl font-semibold'>{heading1}</h3>
            <h3 className='text-xl font-semibold text-wide'>{heading2}</h3>
            <p className='text-sm'>{description}</p>
        </div>
    );
};

export default AtAGlanceCard;