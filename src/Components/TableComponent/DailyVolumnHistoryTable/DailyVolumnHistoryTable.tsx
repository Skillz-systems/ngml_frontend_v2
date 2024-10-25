/* eslint-disable react-hooks/exhaustive-deps */
import CustomDatePicker from '@/Components/DatePickers/CustomDatePicker';
import { DailyVolumnHistoryData } from '@/Data';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { DateObject } from 'react-multi-date-picker';


/**
 * Represents the historical data table for daily volume entries.
 * This component displays a filtered list of daily volume entries based on selected month and year.
 * It utilizes Material-UI's DataGrid for displaying data and includes sorting and filtering capabilities.
 *
 *
 * @typedef {Object} DailyVolumnProps
 * @property {number} id - Unique identifier for the daily volume entry.
 * @property {string[]} [selectedDates] - Optional array of dates selected for the entry.
 * @property {string} [status] - Optional status of the daily volume entry.
 * @property {string} [deadline] - Optional deadline for the entry submission.
 * @property {string} [companyEmail] - Optional email address of the company.
 * @property {string} [companyNumber] - Optional contact number of the company.
 * @property {string} [companyAddress] - Optional physical address of the company.
 * @property {string} [datesent] - Optional date when the entry was sent.
 */

interface DailyVolumnProps {
    id: number;
    selectedDates?: string[];
    status?: string;
    deadline?: string;
    companyEmail?: string;
    companyNumber?: string;
    companyAddress?: string;
    datesent?: string;
}

const rows = DailyVolumnHistoryData


const DailyVolumnHistoryTable = () => {
    const [filteredRows, setFilteredRows] = useState<DailyVolumnProps[]>(rows);
    const [selectedMonth] = useState<string>('');
    const [selectedYear] = useState<string>('');
    const [dateRange, setDateRange] = useState<DateObject[] | null>(null);
    const handleDateRangeChange = (dates: DateObject | DateObject[] | null) => {
        setDateRange(dates as DateObject[]);
        console.log('Selected date range:', dates);
    };



    useEffect(() => {
        filterData();
    }, [selectedMonth, selectedYear]);



    /**
     * Filters the data based on selected month and year upon changing any of those.
     */
    const filterData = () => {
        const filtered = DailyVolumnHistoryData.filter(row => {
            const dateParts = row.datesent.split('/');
            const rowMonth = dateParts[1];
            const rowYear = dateParts[2];
            return (
                (selectedMonth ? rowMonth === selectedMonth : true) &&
                (selectedYear ? rowYear === selectedYear : true)
            );
        });

        setFilteredRows(filtered);
    };

    const columns: GridColDef[] = [
        {
            field: 'sn',
            headerName: 'SN',
            width: 60,
            renderCell: (params: GridRenderCellParams) => (
                <div className='text-xs font-[600] text-[#49526A] leading-3'>
                    {params.row.sn}
                </div>
            ),

        },

        {
            field: 'seriesname',
            headerName: 'SERIES NAME',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => (
                <div
                    className='text-[12px] font-[400] text-[#49526A] leading-3'>
                    {params.row.seriesname}
                </div>
            ),
        },
        {
            field: 'date',
            headerName: 'DATE',
            flex: 1,
            renderCell: (params) => (
                <div className='text-[12px] font-[400] text-[#49526A] leading-3 '>
                    {params.row.datesent}
                </div>
            )
        },
        // {
        //     field: 'rate',
        //     headerName: 'RATE (NGN)',
        //     flex: 1,
        //     renderCell: (params) => (
        //         <div className='text-[12px] font-[400] text-[#49526A] leading-3 '>
        //             {params.row.rate}
        //         </div>
        //     )
        // },
        {
            field: 'value',
            headerName: 'VALUE (MILLION CUBIC FEET)',
            flex: 1,
            renderCell: (params) => (
                <div className='text-[12px] font-[400] text-[#49526A] leading-3 '>
                    {params.row.value}
                </div>
            )
        },

        // {
        //     field: 'amount',
        //     headerName: 'AMOUNT',
        //     flex: 1,
        //     renderCell: (params) => (
        //         <div className='text-[12px] font-[400] text-[#49526A] leading-3 '>
        //             {params.row.amount}
        //         </div>
        //     )
        // },

    ]

    return (
        <div className='mt-[20px] w-[100%] '>
            <div className='flex flex-col md:flex-row justify-between border bg-[#FFFFFF] border-[#CCD0DC] border-b-0 pl-[18px] pr-[18px]  w-[100%] '>
                <div className='flex items-center italic text-[12px] text-[#828DA9] w-[100%]'>
                    Showing {filteredRows.length} of {rows.length} site visits
                </div>
                <div className='flex items-center justify-between h-[60px] gap-5 ' >
                    {/* <div className='flex gap-5'>
                        <div className='w-[32px] h-[32px] border border-[#CCD0DC] flex items-center justify-center rounded-[20px]'>
                            <SystemUpdateAlt style={{ color: '#49526A', fontSize: '16px' }} />
                        </div>
                        <div className='w-[32px] h-[32px] border border-[#CCD0DC] flex items-center justify-center rounded-[20px]'>
                            <Print style={{ color: '#49526A', fontSize: '16px' }} />
                        </div>
                    </div> */}

                    <CustomDatePicker
                        range
                        value={dateRange}
                        onChange={handleDateRangeChange}
                        placeholder="Select date range"
                        format="YYYY-MM-DD"
                    />
                    {/* {dateRange && (
                        <p className="mt-2 text-sm text-gray-600">
                            Selected range: {dateRange[0]?.format('DD-MM-YYYY')} to{' '}
                            {dateRange[1]?.format('DD-MM-YYYY')}
                        </p>
                    )} */}

                </div>
            </div>

            <div className='w-[100%]'>
                <DataGrid
                    className="pointer-cursor-datagrid"
                    rows={filteredRows}
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
}

export default DailyVolumnHistoryTable


