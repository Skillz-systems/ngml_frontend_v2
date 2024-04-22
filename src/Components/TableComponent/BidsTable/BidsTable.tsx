/* eslint-disable react-hooks/exhaustive-deps */
import { TenderTitleData } from '@/Data';
import { FilterList, SearchOutlined } from '@mui/icons-material';
import { IconButton, InputAdornment, Modal, TextField } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useState } from 'react';
import SelectedDateModal from '../SiteVistTable/SiteVistTableModal';

/**
 * Represents the properties of a single bid in the bids table.
 * @typeof {Object} BidsTableProps
 * @property {number} id - The unique identifier for the bid.
 * @property {string} companyname - The name of the company that submitted the bid.
 * @property {string} companyType - The type of the company (e.g., LLC, Corporation).
 * @property {string[]} [selectedDates] - Optional array of dates selected for the bid.
 * @property {string} status - The current status of the bid (e.g., Pending, Approved).
 * @property {string} action - The action to be taken on the bid (e.g., View, Edit).
 * @property {string} [deadline] - Optional deadline for the bid submission.
 * @property {string} [companyEmail] - Optional email address of the company.
 * @property {string} [companyNumber] - Optional contact number of the company.
 * @property {string} [companyAddress] - Optional physical address of the company.
 */
interface BidsTableProps {
    id: number;
    companyname: string;
    companyType: string;
    selectedDates?: string[];
    status: string;
    action: string;
    deadline?: string;
    companyEmail?: string;
    companyNumber?: string;
    companyAddress?: string;

}

/**
 * Represents additional details for a bid.
 * @typedef {Object} Detail
 * @property {string} type - The type of detail.
 * @property {string} type2 - An additional type of detail.
 * @property {string} dept - The department associated with the detail.
 */

interface Detail {
    type: string;
    type2: string;
    dept: string;
}

const rows = TenderTitleData as unknown as BidsTableProps[];




const BidsTable = () => {
    const [searchText, setSearchText] = useState<string>('');
    const [filteredRows] = useState<BidsTableProps[]>(rows);
    const [open, setOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<BidsTableProps | null>(null);
    const [, setSelectedAgreement] = useState<string>('All Contracts');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    /**
     * Handles the action of clicking the filter button. Toggles the visibility of the dropdown and resets the selected agreement filter.
     */
    const handleFilterClick = () => {
        setDropdownOpen(!dropdownOpen);
        setSelectedAgreement('All Contracts');
    };


    const handleOpen = (row: BidsTableProps) => {
        setSelectedRow(row);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchText(value);
    };



    const columns: GridColDef[] = [
        {
            field: 'sn',
            headerName: 'SN',
            flex: 1,
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
            field: 'tenderTitle',
            headerName: 'TITLE OF TENDER',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => (
                <div
                    className='text-[14px] font-[700] text-[#49526A] leading-3'>
                    {params.row.tenderTitle}
                </div>
            ),
        },
        {
            field: 'datesubmitted',
            headerName: 'DATE SUBMITTED',
            flex: 1,
            renderCell: (params) => (
                <div className='text-[12px] font-[700] text-[#49526A] leading-3 '>
                    {params.row.datesubmitted}
                </div>
            )
        },
        {
            field: 'details',
            headerName: 'DETAILS',
            flex: 1,
            renderCell: (params) => (
                <ul className='text-[12px] font-[700] text-[#49526A] leading-3 '>
                    {params.row.details.map((detail: Detail, index: number) => (
                        <div key={index} className='text-[12px] font-[600] text-[#828DA9] flex flex-col gap-[10px] '>
                            <div className='flex gap-[14px] flex items-center'>
                                <div>TYPE</div>
                                <div className='bg-[#D2F69E] text-[12px] font-[700] text-[#050505] h-[24px] flex items-center justify-center p-[8px] rounded-[24px]'>{detail.type}</div>
                            </div>
                            <div className='flex gap-[10px] flex items-center'>
                                <div>TYPE2</div>
                                <div className='bg-[#EAEEF2] text-[12px] font-[700] text-[#050505] h-[24px] flex items-center justify-center p-[8px] rounded-[24px]'>{detail.type2}</div>
                            </div>
                            <div className='flex gap-[14px] flex items-center'>
                                <div>DEPT</div>
                                <div className='bg-[#EAEEF2] text-[12px] font-[700] text-[#050505] h-[24px] flex items-center justify-center p-[8px] rounded-[24px]'>{detail.dept}</div>
                            </div>
                        </div>
                    ))}
                </ul>
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
                            statusHeading={selectedRow.status}
                        />
                    )}
                </div>
            </Modal>
            <div className='flex flex-col md:flex-row items-center justify-between border bg-[#FFFFFF] border-[#CCD0DC] border-b-0 h-[100%] p-[18px] w-[100%] '>
                <div className='italic text-[12px] text-[#828DA9] w-[100%]'>
                    Showing {filteredRows.length} of {rows.length} site visits
                </div>
                <div className='flex flex-col md:flex-row justify-end items-center gap-[8px] relative w-[100%]' >
                    <TextField
                        id="search-input"
                        label="Search this list"
                        variant="outlined"
                        size="small"
                        value={searchText}
                        onChange={handleSearchChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchOutlined />
                                </InputAdornment>
                            ),
                            style: {
                                borderRadius: '32px',
                                width: '200px',
                                height: '35px',
                            },
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#CCD0DC',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#00AF50',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#00AF50',
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: 'gray',
                                fontSize: '10px',
                                fontStyle: 'italic',
                                '&.Mui-focused': {
                                    color: 'green',
                                },
                            },
                        }}
                    />
                    <div className='flex items-center gap-[10px] rounded-[32px] h-[32px] w-[149px] justify-center border border-[#CCD0DC] flex-row'>
                        <div className='text-[12px] font-[400] text-[#828DA9] '>All Bids</div>
                        <IconButton onClick={handleFilterClick}>
                            <FilterList />
                        </IconButton>

                    </div>
                </div>
            </div>

            <div>
                <DataGrid
                    className="pointer-cursor-datagrid"
                    rows={filteredRows}
                    columns={columns}
                    rowHeight={104}
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

export default BidsTable


