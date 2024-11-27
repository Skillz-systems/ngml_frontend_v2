
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
                <div className="text-[12px] font-[400] text-white leading-3 p-2 rounded-md" style={{
                    backgroundColor: params.row.abnormal_status === 'normal'
                        ? '#005828'
                        : params.row.abnormal_status === 'abnormal'
                            ? '#DC2626'
                            : params.row.abnormal_status === 'regular'
                                ? '#2563EB'
                                : '#6B7280'
                }}>
                    {params.row.abnormal_status}
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
