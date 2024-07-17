/* eslint-disable @typescript-eslint/no-explicit-any */
import { CalendarTodayOutlined, FilterOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { BidsTable, Button, Heading, Notification, StatisticRectangleCard } from '../../Components/index';
import images from '../../assets/index';

const BidPage: React.FC = () => {


    return (
        <div>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <Heading as="h4" size="h4" color='primaryColor' className="font-bold text-gray-600">Bids</Heading>
                <div className='flex gap-[16px]'>
                    <Notification
                        count={4}
                        headerTitle="Messages"
                        renderIcon={() => <div><FilterOutlined style={{ fontSize: 'medium' }} /></div>}
                    />
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-4 mt-6 ' >
                <StatisticRectangleCard
                    title='Open Tenders'
                    icon={<img src={images.filterIcon} alt="filters icon" />}
                    value='72'
                    valueColor='text-nnpcmediumgreen-700'
                    iconBgColor='rounded-[10px] bg-nnpcmediumgreen-500'
                />
                <StatisticRectangleCard
                    title='Submitted Bids'
                    icon={<img src={images.filterIcon} alt="filter icon" />}
                    value='125'
                    valueColor='text-black'
                    iconBgColor='bg-nnpc-50 rounded-[10px]'
                />
            </div>
            <div className='w-full mt-10'>
                <BidsTable />
            </div>
        </div>
    );
};

export default BidPage;