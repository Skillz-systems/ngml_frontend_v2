import React from 'react';

interface DateCardDetailsProps {
    type: 'withCompany' | 'withoutCompany';
    day?: number | string ;
    to?: string;
    month?: string;
    year?: string;
    dateRange?: string;
    company?: string;
    distance?: string;
    text?: string;
    contractor?: string;
    icon1?: React.ReactNode;
    icon2?: React.ReactNode;
    width?: number | string;
    height?: number | string;
    backgroundColor?: string;
}

const DateCardDetails: React.FC<DateCardDetailsProps> = ({
    type,
    day,
    to,
    month,
    year,
    dateRange,
    company,
    distance,
    text,
    contractor,
    icon1,
    icon2,
    width = '100%',
    height = '100%',
    backgroundColor = ''
}) => {
    return (
        <div className={`w-full border-2 p-4 rounded-[20px] ${backgroundColor}`} style={{ width, height }}>
            {type === 'withCompany' ? (
                <div className='space-y-6'>
                    <div className='w-full'>
                        <div className='text-[40px] font-bold text-[#004010]'>{day}</div>
                        <div className='mt-[-12px] font-bold text-[20px] text-[#226844]'>{month} {year}</div>
                        <div className='flex gap-2'>
                            <div className='mt-1'>{to}</div>
                            <span className='border-2 rounded-[20px] px-2 border-[#00af50]'>{dateRange}</span>
                        </div>
                    </div>

                    <div className='space-y-2'>
                        <div className='flex gap-2'>
                            {icon1 && <div className='w-6'>{icon1}</div>}
                            <span className='font-bold'>{company}</span>
                        </div>
                        <div className='flex gap-2'>
                            {icon2 && <div className='w-6'>{icon2}</div>}
                            <span>{distance}</span>
                        </div>
                    </div>
                    <div>
                        <div className='text-[#9CA3AF]'>{text}</div>
                        <div className='font-bold'>{contractor}</div>
                    </div>
                </div>
            ) : (
                <div className='space-y-[125px]'>
                    <div className='w-full '>
                        <div className='text-[40px] font-bold'>{day}</div>
                        <div className='mt-[-12px] font-bold text-[20px]'>{month} {year}</div>
                    </div>

                    <div className='space-y-2'>
                        <div className='flex gap-2'>
                            {icon1 && <div className='w-6'>{icon1}</div>}
                            <span className='font-bold'>{company}</span>
                        </div>
                        <div className='flex gap-2'>
                            {icon2 && <div className='w-6'>{icon2}</div>}
                            <span>{distance}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DateCardDetails;