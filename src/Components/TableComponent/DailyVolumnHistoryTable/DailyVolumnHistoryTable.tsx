/* eslint-disable react-hooks/exhaustive-deps */
// import CustomDatePicker from '@/Components/DatePickers/CustomDatePicker';
// import { DailyVolumnHistoryData } from '@/Data';
// import { useGetCustomersDailyVolumeByIdQuery } from '@/Redux/Features/Customer/customerVolume';
// import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
// import { useEffect, useState } from 'react';
// import { DateObject } from 'react-multi-date-picker';
// import { useLocation } from 'react-router-dom';


// /**
//  * Represents the historical data table for daily volume entries.
//  * This component displays a filtered list of daily volume entries based on selected month and year.
//  * It utilizes Material-UI's DataGrid for displaying data and includes sorting and filtering capabilities.
//  *
//  *
//  * @typedef {Object} DailyVolumnProps
//  * @property {number} id - Unique identifier for the daily volume entry.
//  * @property {string[]} [selectedDates] - Optional array of dates selected for the entry.
//  * @property {string} [status] - Optional status of the daily volume entry.
//  * @property {string} [deadline] - Optional deadline for the entry submission.
//  * @property {string} [companyEmail] - Optional email address of the company.
//  * @property {string} [companyNumber] - Optional contact number of the company.
//  * @property {string} [companyAddress] - Optional physical address of the company.
//  * @property {string} [datesent] - Optional date when the entry was sent.
//  */

// interface DailyVolumnProps {
//     id: number;
//     selectedDates?: string[];
//     status?: string;
//     deadline?: string;
//     companyEmail?: string;
//     companyNumber?: string;
//     companyAddress?: string;
//     datesent?: string;
// }

// const rows = DailyVolumnHistoryData


// const DailyVolumnHistoryTable = () => {
//     const [filteredRows, setFilteredRows] = useState<DailyVolumnProps[]>(rows);
//     const [selectedMonth] = useState<string>('');
//     const [selectedYear] = useState<string>('');
//     const [dateRange, setDateRange] = useState<DateObject[] | null>(null);
//     const handleDateRangeChange = (dates: DateObject | DateObject[] | null) => {
//         setDateRange(dates as DateObject[]);
//         console.log('Selected date range:', dates);
//     };

//     useEffect(() => {
//         filterData();
//     }, [selectedMonth, selectedYear]);



//     /**
//      * Filters the data based on selected month and year upon changing any of those.
//      */
//     const filterData = () => {
//         const filtered = DailyVolumnHistoryData.filter(row => {
//             const dateParts = row.datesent.split('/');
//             const rowMonth = dateParts[1];
//             const rowYear = dateParts[2];
//             return (
//                 (selectedMonth ? rowMonth === selectedMonth : true) &&
//                 (selectedYear ? rowYear === selectedYear : true)
//             );
//         });

//         setFilteredRows(filtered);
//     };

//     const columns: GridColDef[] = [
//         {
//             field: 'sn',
//             headerName: 'SN',
//             width: 60,
//             renderCell: (params: GridRenderCellParams) => (
//                 <div className='text-xs font-[600] text-[#49526A] leading-3'>
//                     {params.row.sn}
//                 </div>
//             ),

//         },

//         {
//             field: 'seriesname',
//             headerName: 'SERIES NAME',
//             flex: 1,
//             renderCell: (params: GridRenderCellParams) => (
//                 <div
//                     className='text-[12px] font-[400] text-[#49526A] leading-3'>
//                     {params.row.seriesname}
//                 </div>
//             ),
//         },
//         {
//             field: 'date',
//             headerName: 'DATE',
//             flex: 1,
//             renderCell: (params) => (
//                 <div className='text-[12px] font-[400] text-[#49526A] leading-3 '>
//                     {params.row.datesent}
//                 </div>
//             )
//         },
//         // {
//         //     field: 'rate',
//         //     headerName: 'RATE (NGN)',
//         //     flex: 1,
//         //     renderCell: (params) => (
//         //         <div className='text-[12px] font-[400] text-[#49526A] leading-3 '>
//         //             {params.row.rate}
//         //         </div>
//         //     )
//         // },
//         {
//             field: 'value',
//             headerName: 'VALUE (MILLION CUBIC FEET)',
//             flex: 1,
//             renderCell: (params) => (
//                 <div className='text-[12px] font-[400] text-[#49526A] leading-3 '>
//                     {params.row.value}
//                 </div>
//             )
//         },

//         // {
//         //     field: 'amount',
//         //     headerName: 'AMOUNT',
//         //     flex: 1,
//         //     renderCell: (params) => (
//         //         <div className='text-[12px] font-[400] text-[#49526A] leading-3 '>
//         //             {params.row.amount}
//         //         </div>
//         //     )
//         // },

//     ]
//     const location = useLocation();
//     const [customerId, setCustomerId] = useState<number | null>(null);
//     useEffect(() => {
//         const customer = location.pathname.split('/');
//         setCustomerId(Number(customer[4]));
//     }, [location]);

//     // const { data, isSuccess } = useGetCustomersDailyVolumeByIdQuery(Number(customerId), {
//     //     skip: !customerId
//     // });

//     // if (isSuccess) {
//     //     console.log('dailyvolumes Table', data)
//     // }

//     const { data, isSuccess, isError, error } = useGetCustomersDailyVolumeByIdQuery(Number(customerId), {
//         skip: customerId === null || customerId === undefined,
//     });

//     useEffect(() => {
//         if (isError) {
//             console.error('Error fetching daily volume data:', error);
//             // Display an error message to the user
//         }
//     }, [isError, error]);

//     if (isSuccess) {
//         console.log('dailyvolumes Table', data);
//         // Process the fetched data
//     }

//     return (
//         <div className='mt-[20px] w-[100%] '>
//             <div className='flex flex-col md:flex-row justify-between border bg-[#FFFFFF] border-[#CCD0DC] border-b-0 pl-[18px] pr-[18px]  w-[100%] '>
//                 <div className='flex items-center italic text-[12px] text-[#828DA9] w-[100%]'>
//                     Showing {filteredRows.length} of {rows.length} site visits
//                 </div>
//                 <div className='flex items-center justify-between h-[60px] gap-5 ' >
//                     {/* <div className='flex gap-5'>
//                         <div className='w-[32px] h-[32px] border border-[#CCD0DC] flex items-center justify-center rounded-[20px]'>
//                             <SystemUpdateAlt style={{ color: '#49526A', fontSize: '16px' }} />
//                         </div>
//                         <div className='w-[32px] h-[32px] border border-[#CCD0DC] flex items-center justify-center rounded-[20px]'>
//                             <Print style={{ color: '#49526A', fontSize: '16px' }} />
//                         </div>
//                     </div> */}

//                     <CustomDatePicker
//                         range
//                         value={dateRange}
//                         onChange={handleDateRangeChange}
//                         placeholder="Select date range"
//                         format="YYYY-MM-DD"
//                     />
//                     {/* {dateRange && (
//                         <p className="mt-2 text-sm text-gray-600">
//                             Selected range: {dateRange[0]?.format('DD-MM-YYYY')} to{' '}
//                             {dateRange[1]?.format('DD-MM-YYYY')}
//                         </p>
//                     )} */}

//                 </div>
//             </div>

//             <div className='w-[100%]'>
//                 <DataGrid
//                     className="pointer-cursor-datagrid"
//                     rows={filteredRows}
//                     columns={columns}
//                     rowHeight={48}
//                     autoHeight
//                     initialState={{
//                         pagination: {
//                             paginationModel: { page: 0, pageSize: 13 },
//                         },
//                     }}

//                     sx={{
//                         width: '100%',
//                         background: '#FFFFFF',
//                         '& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-columnHeader:focus-within': {
//                             outline: 'none',
//                         },
//                         '& .MuiDataGrid-columnHeaders': {
//                             backgroundColor: '#F6FDEC',

//                             '& .MuiDataGrid-columnHeaderTitle': {
//                                 color: '#050505',
//                                 fontWeight: '700',
//                                 fontSize: '12px',

//                             },
//                         },
//                     }}
//                 />
//             </div>
//         </div>
//     );
// }

// export default DailyVolumnHistoryTable


// import CustomDatePicker from '@/Components/DatePickers/CustomDatePicker';
// // import { DailyVolumnHistoryData } from '@/Data';
// import { useGetAllCustomersDailyVolumeQuery } from '@/Redux/Features/Customer/customerVolume';
// import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
// import { useEffect, useState } from 'react';
// import { DateObject } from 'react-multi-date-picker';
// import { useLocation } from 'react-router-dom';

// const DailyVolumnHistoryTable = () => {
//     const [dateRange, setDateRange] = useState<DateObject[] | null>(null);
//     const [rows, setRows] = useState([])
//     const handleDateRangeChange = (dates: DateObject | DateObject[] | null) => {
//         setDateRange(dates as DateObject[]);
//         console.log('Selected date range:', dates);
//     };
//     const location = useLocation();
//     const [customerId, setCustomerId] = useState<number | string | null>(null);

//     useEffect(() => {
//         const customer = location.pathname.split('/');
//         setCustomerId(Number(customer[4]));
//     }, [location]);


//     const { data, isSuccess, isError, error } = useGetAllCustomersDailyVolumeQuery({
//         // page: '1',
//         // per_page: '15',
//         // customer_id: customerId as string
//     });

//     useEffect(() => {
//         if (isError) {
//             console.error('Error fetching daily volume data:', error);
//             // Display an error message to the user
//         }
//     }, [isError, error]);

//     useEffect(() => {
//         if (isSuccess) {
//             setRows(data?.data || []);
//             console.log('dailyvolumes Table', data);
//             // Process the fetched data
//         }
//     }, [isSuccess, data]);

//     const columns: GridColDef[] = [
//         {
//             field: 'volume',
//             headerName: 'Volume',
//             flex: 1,
//             renderCell: (params: GridRenderCellParams) => (
//                 <div
//                     className='text-[12px] font-[400] text-[#49526A] leading-3'>
//                     {params.row.volume}
//                 </div>
//             ),
//         },
//         {
//             field: 'created_at',
//             headerName: 'DATE',
//             flex: 1,
//             renderCell: (params) => (
//                 <div className='text-[12px] font-[400] text-[#49526A] leading-3 '>
//                     {params.row.created_at}
//                 </div>
//             )
//         },

//         {
//             field: 'abnormal_status',
//             headerName: 'Status',
//             flex: 1,
//             renderCell: (params) => (
//                 <div className='text-[12px] font-[400] text-[#49526A] leading-3 '>
//                     {params.row.abnormal_status}
//                 </div>
//             )
//         },


//     ]

//     return (
//         <div className='mt-[20px] w-[100%] '>
//             <div className='flex flex-col md:flex-row justify-between border bg-[#FFFFFF] border-[#CCD0DC] border-b-0 pl-[18px] pr-[18px]  w-[100%] '>
//                 <div className='flex items-center italic text-[12px] text-[#828DA9] w-[100%]'>
//                     Showing {data?.data.length} of {rows.length} site visits
//                 </div>
//                 <div className='flex items-center justify-between h-[60px] gap-5 ' >


//                     <CustomDatePicker
//                         range
//                         value={dateRange}
//                         onChange={handleDateRangeChange}
//                         placeholder="Select date range"
//                         format="YYYY-MM-DD"
//                     />

//                 </div>
//             </div>

//             <div className='w-[100%]'>
//                 <DataGrid
//                     className="pointer-cursor-datagrid"
//                     rows={rows}
//                     columns={columns}
//                     rowHeight={48}
//                     autoHeight
//                     initialState={{
//                         pagination: {
//                             paginationModel: { page: 0, pageSize: 13 },
//                         },
//                     }}

//                     sx={{
//                         width: '100%',
//                         background: '#FFFFFF',
//                         '& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-columnHeader:focus-within': {
//                             outline: 'none',
//                         },
//                         '& .MuiDataGrid-columnHeaders': {
//                             backgroundColor: '#F6FDEC',

//                             '& .MuiDataGrid-columnHeaderTitle': {
//                                 color: '#050505',
//                                 fontWeight: '700',
//                                 fontSize: '12px',

//                             },
//                         },
//                     }}
//                 />
//             </div>
//         </div>
//     );
// }

// export default DailyVolumnHistoryTable

/* eslint-disable @typescript-eslint/no-explicit-any */

import CustomDatePicker from '@/Components/DatePickers/CustomDatePicker';
import { Filters, useGetAllCustomersDailyVolumeQuery } from '@/Redux/Features/Customer/customerVolume';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { DateObject } from 'react-multi-date-picker';
import { useLocation } from 'react-router-dom';

const DailyVolumnHistoryTable = () => {
    const [dateRange, setDateRange] = useState<DateObject[] | null>(null);
    const [rows, setRows] = useState([]);
    // const [filters, setFilters] = useState({
    //     page: '1',
    //     per_page: '15',
    //     customer_id: null as string | null,
    //     customer_site_id: null as string | null,
    //     created_at_from: null as string | null,
    //     created_at_to: null as string | null,
    //     status: null as string | null,
    // });

    const [filters, setFilters] = useState<Filters>({
        page: '1',
        per_page: '15',
        customer_id: null,
        customer_site_id: null,
        created_at_from: null,
        created_at_to: null,
        status: null,
    });

    const handleDateRangeChange = (dates: DateObject | DateObject[] | null) => {
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
            field: 'volume',
            headerName: 'Volume',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => (
                <div className="text-[12px] font-[400] text-[#49526A] leading-3">
                    {params.row.volume}
                </div>
            ),
        },
        {
            field: 'created_at',
            headerName: 'DATE',
            flex: 1,
            renderCell: (params) => (
                <div className="text-[12px] font-[400] text-[#49526A] leading-3 ">
                    {params.row.created_at}
                </div>
            ),
        },
        {
            field: 'abnormal_status',
            headerName: 'Status',
            flex: 1,
            renderCell: (params) => (
                <div className="text-[12px] font-[400] text-[#49526A] leading-3 ">
                    {params.row.abnormal_status}
                </div>
            ),
        },
    ];

    return (
        <div className="mt-[20px] w-[100%] ">
            <div className="flex flex-col md:flex-row justify-between border bg-[#FFFFFF] border-[#CCD0DC] border-b-0 pl-[18px] pr-[18px] w-[100%] ">
                <div className="flex items-center italic text-[12px] text-[#828DA9] w-[100%]">
                    Showing {data?.data.length} of {rows.length} site visits
                </div>
                <div className="flex items-center justify-between h-[60px] gap-5">
                    <div className="flex items-center gap-5">
                        <input
                            type="text"
                            placeholder="Search by status"
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


