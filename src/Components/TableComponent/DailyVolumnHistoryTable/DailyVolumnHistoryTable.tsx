
/* eslint-disable @typescript-eslint/no-explicit-any */

import CustomDatePicker from '@/Components/DatePickers/CustomDatePicker';
import { Filters, useGetAllCustomersDailyVolumeQuery } from '@/Redux/Features/Customer/customerVolume';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { IoIosTrendingDown, IoIosTrendingUp } from 'react-icons/io';
import { MdTrendingFlat } from 'react-icons/md';
import { DateObject } from 'react-multi-date-picker';
import { useLocation } from 'react-router-dom';


// const sampleDailyVolumeData = [
//     {
//         id: 1,
//         customer: 'Acme Water Solutions',
//         volume: '1,250 m³',
//         inlet: '45 PSI',
//         outlet: '38 PSI',
//         status: 'approve',
//         abnormal_status: 'normal',
//         timestamp: '2024-03-15 09:45:22',
//         additionalNotes: 'Steady flow, no significant variations',
//         temperature: '30C'
//     },
//     {
//         id: 2,
//         customer: 'Green Energy Utilities',
//         volume: '875 m³',
//         inlet: '52 PSI',
//         outlet: '30 PSI',
//         status: 'pending',
//         abnormal_status: 'low',
//         temperature: '35C',
//         timestamp: '2024-03-15 10:15:33',
//         additionalNotes: 'Pressure drop detected, investigate potential leak'
//     },
//     {
//         id: 3,
//         customer: 'Metropolitan Water District',
//         volume: '2,300 m³',
//         inlet: '60 PSI',
//         temperature: '40C',
//         outlet: '55 PSI',
//         status: 'approve',
//         abnormal_status: 'high',
//         timestamp: '2024-03-15 11:22:11',
//         additionalNotes: 'High volume during peak hours, system performing well'
//     },
//     {
//         id: 4,
//         customer: 'Industrial Liquid Systems',
//         volume: '650 m³',
//         inlet: '40 PSI',
//         outlet: '35 PSI',
//         status: 'pending',
//         abnormal_status: 'normal',
//         temperature: '30C',
//         timestamp: '2024-03-15 12:05:44',
//         additionalNotes: 'Consistent flow, minor pressure variations'
//     },
//     {
//         id: 5,
//         customer: 'Rural Water Cooperative',
//         volume: '425 m³',
//         inlet: '35 PSI',
//         outlet: '28 PSI',
//         status: 'approve',
//         abnormal_status: 'low',
//         temperature: '30C',
//         timestamp: '2024-03-15 13:30:55',
//         additionalNotes: 'Low pressure, recommend system inspection'
//     },
//     {
//         id: 6,
//         customer: 'Tech Valley Water Systems',
//         volume: '1,850 m³',
//         inlet: '58 PSI',
//         outlet: '52 PSI',
//         status: 'approve',
//         abnormal_status: 'high',
//         temperature: '30C',
//         timestamp: '2024-03-15 14:45:01',
//         additionalNotes: 'High-performance system, exceeding expected volumes'
//     },
//     {
//         id: 7,
//         customer: 'Coastal Resource Management',
//         volume: '550 m³',
//         inlet: '42 PSI',
//         outlet: '36 PSI',
//         status: 'pending',
//         temperature: '30C',
//         abnormal_status: 'normal',
//         timestamp: '2024-03-15 15:20:33',
//         additionalNotes: 'Standard operational parameters'
//     },
//     {
//         id: 8,
//         customer: 'Urban Infrastructure Services',
//         volume: '1,100 m³',
//         inlet: '48 PSI',
//         outlet: '41 PSI',
//         status: 'approve',
//         temperature: '30C',
//         abnormal_status: 'normal',
//         timestamp: '2024-03-15 16:10:22',
//         additionalNotes: 'Stable system performance'
//     }
// ];


const DailyVolumnHistoryTable = () => {


    const [dateRange, setDateRange] = useState<DateObject[] | null>(null);
    const [rows, setRows] = useState([]);

    const [filters, setFilters] = useState<Filters>({
        page: '1',
        per_page: '20',
    });

    const handleDateRangeChange = (dates: any | null) => {
        setDateRange(dates as DateObject[]);
        setFilters((prevFilters) => ({
            ...prevFilters,
            created_at_from: dates?.[0]?.format('YYYY-MM-DD'),
            created_at_to: dates?.[1]?.format('YYYY-MM-DD'),
        }));
        console.log('Selected date range:', dates);
    };

    const location = useLocation();
    useEffect(() => {
        const customer = location.pathname.split('/');
        setFilters((prevFilters) => ({
            ...prevFilters,
            customer_id: customer[4],
            customer_site_id: customer[5],
        }));
    }, [location]);

    const { data, isSuccess, isError, error } = useGetAllCustomersDailyVolumeQuery(filters);

    useEffect(() => {
        if (isError) {
            console.error('Error fetching daily volume data:', error);
            // Display an error message to the user
        }
    }, [isError, error]);

    useEffect(() => {
        if (isSuccess) {
            setRows(data?.data || []);
            console.log('dailyvolumes Table', data);
        }
    }, [isSuccess, data]);

    const columns: GridColDef[] = [

        {
            field: 'customer',
            headerName: 'Customer Name',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => (
                <div className="text-[14px] font-[400] text-[#49526A] leading-3">
                    {params.row.customer}
                </div>
            ),
        },
        {
            field: 'volume',
            headerName: 'Volume',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => (
                <div className="text-[14px] font-[400] text-[#49526A] leading-3">
                    {params.row.volume}
                </div>
            ),
        },
        {
            field: 'temperature',
            headerName: 'Temperature',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => (
                <div className="text-[14px] font-[400] text-[#49526A] leading-3">
                    {params.row.temperature}
                </div>
            ),
        },
        {
            field: 'pressure',
            headerName: 'Pressure (Inlet & Outlet)',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => (
                <div className="text-[14px] font-[400] text-[#49526A] leading-3 space-x-3 flex items-center justify-center">
                    <span>
                        {params.row.inlet}
                    </span>
                    <span>
                        {params.row.outlet}
                    </span>
                </div>
            ),
        },

        {
            field: 'abnormal_status',
            headerName: 'Status',
            flex: 1,
            renderCell: (params) => (
                <div className="text-[14px] font-[400] leading-3 p-2 rounded-md flex space-x-4 capitalize"
                >
                    <span style={{ color: params.row.status === 'approve' ? '#22c55e' : '#f59e0b' }}>
                        {params.row.status}
                    </span>
                    {params.row.abnormal_status === 'normal' && (
                        <MdTrendingFlat className='text-amber-500 size-4' />

                    )
                    }

                    {params.row.abnormal_status === 'low' && (
                        <IoIosTrendingDown className='text-red-500 size-4' />

                    )
                    }
                    {params.row.abnormal_status === 'high' && (

                        <IoIosTrendingUp className='text-green-500 size-4' />
                    )
                    }

                </div>
            ),
        },

    ];

    return (
        <div className="mt-[20px] w-[100%] ">
            <div className="flex flex-col md:flex-row justify-between border bg-[#FFFFFF] border-[#CCD0DC] border-b-0 pl-[18px] pr-[18px] w-[100%] ">
                <div className="flex items-center italic text-[12px] text-[#828DA9] w-[100%]">
                    Showing {data?.data.length} of {rows.length} Daily Volume
                </div>
                <div className="flex items-center justify-between h-[60px] gap-5">
                    <div className="flex items-center gap-5">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border border-[#CCD0DC] rounded-md px-4 py-2 text-sm"
                            value={filters.status || ''}
                            onChange={(e) =>
                                setFilters((prevFilters) => ({
                                    ...prevFilters,
                                    status: e.target.value,
                                }))
                            }
                        />
                        <CustomDatePicker
                            range
                            value={dateRange}
                            onChange={handleDateRangeChange}
                            placeholder="Select date range"
                            format="YYYY-MM-DD"
                        />
                    </div>
                </div>
            </div>

            <div className="w-[100%]">
                <DataGrid
                    className="pointer-cursor-datagrid"
                    rows={rows}
                    columns={columns}
                    rowHeight={48}

                    autoHeight
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 13 },
                        },
                    }}
                    sx={{
                        width: '100%',
                        background: '#FFFFFF',
                        '& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-columnHeader:focus-within': {
                            outline: 'none',
                        },
                        '& .MuiDataGrid-columnHeaders': {
                            backgroundColor: '#F6FDEC',
                            '& .MuiDataGrid-columnHeaderTitle': {
                                color: '#050505',
                                fontWeight: '700',
                                fontSize: '12px',
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default DailyVolumnHistoryTable;
