
import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetAllCustomersDailyVolumeQuery, Filters } from '@/Redux/Features/Customer/customerVolume';
import CustomDatePicker from '@/Components/DatePickers/CustomDatePicker';
import { DateObject } from 'react-multi-date-picker';

interface DailyVolume {
    customerId: string;
    dailyVolumes: {
        date: string;
        volume: number;
    }[];
}

interface DailyVolumeHistoryTableProps {
    customerId: number | null;
    customerSiteId: number | null;
}

const DailyVolumeHistoryTable: React.FC<DailyVolumeHistoryTableProps> = ({ customerId, customerSiteId }) => {
    const [dateRange, setDateRange] = useState<DateObject[] | null>(null);
    const [rows, setRows] = useState<DailyVolume[]>([]);
    const [filters, setFilters] = useState<Filters>({
        page: '1',
        per_page: '15',
        customer_id: customerId ? customerId.toString() : null,
        customer_site_id: customerSiteId ? customerSiteId.toString() : null,
        created_at_from: null,
        created_at_to: null,
        status: null,
    });

    const { data, isSuccess, isError, error } = useGetAllCustomersDailyVolumeQuery(filters);

    useEffect(() => {
        if (isSuccess) {
            setRows(data?.data || []);
        }
    }, [isSuccess, data]);

    useEffect(() => {
        if (isError) {
            console.error('Error fetching daily volume data:', error);
        }
    }, [isError, error]);

    const handleDateRangeChange = (dates: DateObject | DateObject[] | null) => {
        if (Array.isArray(dates)) {
            setDateRange(dates);
            setFilters((prevFilters) => ({
                ...prevFilters,
                created_at_from: dates[0]?.format('YYYY-MM-DD') || null,
                created_at_to: dates[1]?.format('YYYY-MM-DD') || null,
            }));
        } else {
            setDateRange(null);
            setFilters((prevFilters) => ({
                ...prevFilters,
                created_at_from: null,
                created_at_to: null,
            }));
        }
    };

    const columns: GridColDef[] = [
        { field: 'customerId', headerName: 'Customer ID', flex: 1 },
        {
            field: 'dailyVolumes',
            headerName: 'Daily Volumes',
            flex: 1,
            renderCell: (params) => (
                <div>
                    {params.row.dailyVolumes.map((v: { date: any; volume: any; }) => `${v.date}: ${v.volume}`).join(', ')}
                </div>
            ),
        },
    ];

    return (
        <div className="mt-[20px] w-[100%]">
            <div className="flex justify-between">
                <CustomDatePicker
                    range
                    value={dateRange}
                    onChange={handleDateRangeChange}
                    placeholder="Select date range"
                    format="YYYY-MM-DD"
                />
                <input
                    type="text"
                    placeholder="Search by status"
                    value={filters.status || ''}
                    onChange={(e) => setFilters((prevFilters) => ({ ...prevFilters, status: e.target.value }))}
                />
            </div>

            <DataGrid
                className="pointer-cursor-datagrid"
                rows={rows}
                columns={columns}
                rowHeight={48}
                autoHeight
                pagination
            />
        </div>
    );
};

export default DailyVolumeHistoryTable;
