/* eslint-disable react-hooks/exhaustive-deps */
import { DailyFrequencyData } from '@/Data';
import { Modal } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import SelectedDateModal from '../SiteVistTable/SiteVistTableModal';

interface DailyFrequencyProps {
    id: number;
    companyname: string;
    companyType: string;
    selectedDates?: string[];
    status?: string;
    action: string;
    deadline?: string;
    companyEmail?: string;
    companyNumber?: string;
    companyAddress?: string;
    datesent?: string;
}

const rows = DailyFrequencyData


const DailyFrequencyTable = () => {
    const [searchText] = useState<string>('');
    const [filteredRows, setFilteredRows] = useState<DailyFrequencyProps[]>(rows);
    const [open, setOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<DailyFrequencyProps | null>(null);
    const [selectedMonth, setSelectedMonth] = useState<string>('');
    const [selectedYear, setSelectedYear] = useState<string>('');

    useEffect(() => {
        filterData();
    }, [searchText, selectedMonth, selectedYear]);

    const handleOpen = (row: DailyFrequencyProps) => {
        setSelectedRow(row);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);


    const filterData = () => {
        const lowercasedSearch = searchText.toLowerCase();
        const filtered = DailyFrequencyData.filter(row => {
            const dateParts = row.datesent.split('/');
            const rowMonth = dateParts[1];
            const rowYear = dateParts[2];
            return (
                (row.companyname.toLowerCase().includes(lowercasedSearch) || row.companyType.toLowerCase().includes(lowercasedSearch)) &&
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
            field: 'name',
            headerName: 'COMPANY NAME',
            width: 228,
            renderCell: (params: GridRenderCellParams) => (
                <div className='flex flex-col gap-[4px]'>
                    <div className='text-[14px] font-[600] text-[#49526A] leading-3'>
                        {params.row.companyname}
                    </div>
                    <div
                        className='text-[10px] font-[400] text-[#828DA9] leading-3'>
                        {params.row.companyType}
                    </div>
                </div>
            ),
        },
        {
            field: 'frequency',
            headerName: 'FREQUENCY',
            width: 124,
            renderCell: (params: GridRenderCellParams) => (
                <div
                    className='text-[12px] font-[600] text-[#49526A] leading-3'>
                    {params.row.frequency}
                </div>
            ),
        },
        {
            field: 'date',
            headerName: 'DATE',
            width: 120,
            renderCell: (params) => (
                <div className='text-[12px] font-[400] text-[#49526A] leading-3 '>
                    {params.row.datesent}
                </div>
            )
        },
        {
            field: 'value',
            headerName: 'VALUE (MILLION CUBIC FEET)',
            width: 200,
            renderCell: (params) => (
                <div className='text-[12px] font-[400] text-[#49526A] leading-3 '>
                    {params.row.value}
                </div>
            )
        },
        {
            field: 'rate',
            headerName: 'RATE (NGN)',
            width: 100,
            renderCell: (params) => (
                <div className='text-[12px] font-[400] text-[#49526A] leading-3 '>
                    {params.row.rate}
                </div>
            )
        },
        {
            field: 'amount',
            headerName: 'AMOUNT',
            width: 180,
            renderCell: (params) => (
                <div className='text-[12px] font-[400] text-[#49526A] leading-3 '>
                    {params.row.amount}
                </div>
            )
        },
        {
            field: 'action',
            headerName: 'ACTION',
            width: 100,
            renderCell: (params: GridRenderCellParams) => (
                <div
                    onClick={() => handleOpen(params.row)}
                    className='text-[12px] text-[#FFFFFF] rounded-[32px] bg-[#828DA9] h-[24px] w-[53px] flex items-center justify-center cursor-pointer'>
                    View
                </div>
            ),
        },
    ]




    return (
        <div className='ml-[70px] mt-[20px] w-[1112px] '>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <div >
                    {selectedRow && (
                        <SelectedDateModal
                            handleClose={handleClose}
                            dateTime={'09th, Nov, 2023; 09:23:44Am'}
                            status={selectedRow.status || 'Default Status'}
                            companyName={selectedRow.companyname || 'Provide Company Name'}
                            companyEmail={selectedRow.companyEmail || 'Provide an email address'}
                            companyNumber={selectedRow.companyNumber || 'Provide a number'}
                            availableDates={selectedRow.selectedDates || ['No Dates Available']}
                            companyAddress={selectedRow.companyAddress || 'Provide an Address'}
                            statusHeading={''}
                        />
                    )}
                </div>
            </Modal>
            <div className='flex items-center justify-between border border-[#CCD0DC] border-b-0 h-[60px] p-[20px] '>
                <div className='italic text-[12px] text-[#828DA9]'>
                    Showing {filteredRows.length} of {rows.length} site visits
                </div>
                <div className='flex items-center justify-between h-[60px] p-[20px]'>
                    <div className='flex items-center gap-[10px]'>
                        <select
                            value={selectedMonth}
                            onChange={e => setSelectedMonth(e.target.value)}
                            className='border border-[#CCD0DC] outline-none text-[12px] font-[600] hover:border-[#00AF50] rounded-[32px] h-[32px] w-[106px]'
                        >
                            <option value="">Month</option>
                            <option value="Jan">January</option>
                            <option value="Feb">February</option>
                            <option value="Mar">March</option>
                            <option value="Apr">April</option>
                            <option value="May">May</option>
                            <option value="Jun">June</option>
                            <option value="Jul">July</option>
                            <option value="Aug">August</option>
                            <option value="Sep">September</option>
                            <option value="Oct">October</option>
                            <option value="Nov">November</option>
                            <option value="Dec">December</option>
                        </select>

                        <select
                            value={selectedYear}
                            onChange={e => setSelectedYear(e.target.value)}
                            className='border border-[#CCD0DC] outline-none rounded-[32px] hover:border-[#00AF50] text-[12px] font-[600]  h-[32px]  w-[77px]'
                        >
                            <option value="">Year</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                        </select>
                    </div>
                </div>
            </div>

            <div>
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

                    pageSizeOptions={[5, 10]}
                    sx={{

                        '& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-columnHeader:focus-within': {
                            outline: 'solid #00AF50 1px',
                        },
                        '& .MuiDataGrid-columnHeaders': {
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

export default DailyFrequencyTable


