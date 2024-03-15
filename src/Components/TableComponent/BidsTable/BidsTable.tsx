/* eslint-disable react-hooks/exhaustive-deps */
import { TenderTitleData } from '@/Data';
import { FilterList, SearchOutlined } from '@mui/icons-material';
import { IconButton, InputAdornment, Modal, TextField } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useState } from 'react';
import SelectedDateModal from '../SiteVistTable/SiteVistTableModal';


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
            width: 180,
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
            width: 433,
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
            width: 124,
            renderCell: (params) => (
                <div className='text-[12px] font-[700] text-[#49526A] leading-3 '>
                    {params.row.datesubmitted}
                </div>
            )
        },
        {
            field: 'details',
            headerName: 'DETAILS',
            width: 215,
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
                            statusHeading={selectedRow.status}
                        // statusStyle={getStatusStyle(selectedRow.status)}

                        />
                    )}
                </div>
            </Modal>
            <div className='flex items-center justify-between border border-[#CCD0DC] border-b-0 h-[60px] p-[20px] '>
                <div className='italic text-[12px] text-[#828DA9]'>
                    Showing {filteredRows.length} of {rows.length} site visits
                </div>
                <div className='flex justify-end  items-center gap-[8px] relative'>
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

export default BidsTable


