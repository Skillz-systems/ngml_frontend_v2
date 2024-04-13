/* eslint-disable react-hooks/exhaustive-deps */
import { DailyFrequencyData } from '@/Data';
import { Modal } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import SelectedDateModal from '../SiteVistTable/SiteVistTableModal';


/**
 * Interface representing the properties of a daily volume entry.
 * @typeof {Object} DailyVolumnProps
 * @property {number} id - Unique identifier for the daily volume entry.
 * @property {string} companyname - Name of the company associated with the entry.
 * @property {string} companyType - Type of the company (e.g., LLC, Corporation).
 * @property {string[]} [selectedDates] - Optional. Dates selected for the entry.
 * @property {string} [status] - Optional. Current status of the entry.
 * @property {string} action - Action to be taken on the entry (e.g., View, Edit).
 * @property {string} [deadline] - Optional. Deadline for the entry submission.
 * @property {string} [companyEmail] - Optional. Email address of the company.
 * @property {string} [companyNumber] - Optional. Contact number of the company.
 * @property {string} [companyAddress] - Optional. Physical address of the company.
 * @property {string} [datesent] - Optional. Date when the entry was sent.
 */
interface DailyVolumnProps {
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


const DailyVolumnTable = () => {
    const [searchText] = useState<string>('');
    const [filteredRows, setFilteredRows] = useState<DailyVolumnProps[]>(rows);
    const [open, setOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<DailyVolumnProps | null>(null);
    const [selectedMonth, setSelectedMonth] = useState<string>('');
    const [selectedYear, setSelectedYear] = useState<string>('');

    useEffect(() => {
        filterData();
    }, [searchText, selectedMonth, selectedYear]);


    /**
     * Opens a modal to display detailed information for the selected row.
     * @param {DailyVolumnProps} row - The row data to be displayed in the modal.
     */
    const handleOpen = (row: DailyVolumnProps) => {
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
            flex: 1,
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
            flex: 1,
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
            flex: 1,
            renderCell: (params) => (
                <div className='text-[12px] font-[400] text-[#49526A] leading-3 '>
                    {params.row.datesent}
                </div>
            )
        },
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
        {
            field: 'rate',
            headerName: 'RATE (NGN)',
            flex: 1,
            renderCell: (params) => (
                <div className='text-[12px] font-[400] text-[#49526A] leading-3 '>
                    {params.row.rate}
                </div>
            )
        },
        {
            field: 'amount',
            headerName: 'AMOUNT',
            flex: 1,
            renderCell: (params) => (
                <div className='text-[12px] font-[400] text-[#49526A] leading-3 '>
                    {params.row.amount}
                </div>
            )
        },
        {
            field: 'action',
            headerName: 'ACTION',
            flex: 1,
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
        <div className='mt-[20px] w-[100%] '>
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

export default DailyVolumnTable


