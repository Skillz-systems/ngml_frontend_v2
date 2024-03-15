/* eslint-disable react-hooks/exhaustive-deps */
import { EoiRequestData } from '@/Data';
import { FilterList, SearchOutlined } from '@mui/icons-material';
import { IconButton, InputAdornment, Modal, TextField } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import EoiModal from './EoiModal';



/**
 * Interface representing the properties of an Expression of Interest (EOI) request.
 * @typeof {Object} EoiRequestTableProps
 * @property {number} id - Unique identifier for the EOI request.
 * @property {string} companyname - Name of the company associated with the EOI request.
 * @property {string} companyType - Type of the company (e.g., LLC, Corporation).
 * @property {string[]} [selectedDates] - Optional dates selected for the EOI request.
 * @property {string} status - Current status of the EOI request (e.g., New, Approved).
 * @property {string} action - Action associated with the EOI request (e.g., Review).
 * @property {string} [deadline] - Optional deadline for the EOI request submission.
 * @property {string} [companyEmail] - Optional email address of the company.
 * @property {string} [companyNumber] - Optional contact number of the company.
 * @property {string} [companyAddress] - Optional physical address of the company.
 * @property {string} [companyStatus] - Optional status of the company (e.g., Active, Inactive).
 * @property {string} [approverName] - Optional name of the person who approved the request.
 */


interface EoiRequestTableProps {
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
    companyStatus?: string;
    approverName?: string;
}

const rows = EoiRequestData




const EoiRequestTable = () => {
    const [searchText, setSearchText] = useState<string>('');
    const [filteredRows, setFilteredRows] = useState<EoiRequestTableProps[]>(rows);
    const [open, setOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<EoiRequestTableProps | null>(null);
    const [selectedStatus, setSelectedStatus] = useState<string>('All Contracts');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        filterData();
    }, [searchText, selectedStatus]);


    const companyStatus = [...new Set(rows.map(row => row.status))];


    /**
    * Handles opening a modal to display detailed information for the selected EOI request.
    * @param {EoiRequestTableProps} row - The EOI request data to be displayed in the modal.
    */
    const handleOpen = (row: EoiRequestTableProps) => {
        setSelectedRow(row);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchText(value);
    };

    const filterData = () => {
        let filtered = rows;
        if (selectedStatus !== 'All Contracts') {
            filtered = filtered.filter(row => row.status === selectedStatus);
        }
        if (searchText) {
            const lowercasedSearch = searchText.toLowerCase();
            filtered = filtered.filter(row =>
                row.companyname.toLowerCase().includes(lowercasedSearch) ||
                row.companyType.toLowerCase().includes(lowercasedSearch)
            );
        }
        setFilteredRows(filtered);
    };


     /**
     * Toggles the visibility of the status filter dropdown.
     */
    const handleFilterClick = () => {
        setDropdownOpen(!dropdownOpen);
        setSelectedStatus('All Contracts');
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
            width: 304,
            renderCell: (params: GridRenderCellParams) => (
                <div className='text-[12px] font-[600] text-[#49526A] leading-3'>
                    {params.row.companyname}
                </div>
            ),
        },
        {
            field: 'companyType',
            headerName: 'COMPANY TYPE',
            width: 151,
            renderCell: (params: GridRenderCellParams) => (
                <div
                    className='text-[12px] font-[400] text-[#49526A] leading-3'>
                    {params.row.companyType}
                </div>
            ),
        },
        {
            field: 'customerID',
            headerName: 'CUSTOMER ID',
            width: 151,
            renderCell: (params) => (
                <div className='text-[12px] font-[400] text-[#49526A] leading-3 '>
                    {params.row.customerID}
                </div>
            )
        },
        {
            field: 'companyEmail',
            headerName: 'EMAIL',
            width: 200,
            renderCell: (params) => (
                <div className='text-[12px] font-[400] text-[#49526A] leading-3 '>
                    {params.row.companyEmail}
                </div>
            )
        },
        {
            field: 'companyStatus',
            headerName: 'STATUS',
            width: 146,
            renderCell: (params: GridRenderCellParams) => {
                let classNames = 'text-[12px] font-[500] h-[24px] rounded-full flex justify-center items-center px-2.5 ';

                switch (params.row.status) {
                    case 'New':
                        classNames += 'bg-[#EAEEF2] text-[#050505] ';
                        break;
                    case 'Approved':
                        classNames += 'bg-[#D2F69E] text-[#005828] ';
                        break;
                    case 'Disapproved':
                        classNames += 'bg-[#FD838F] text-[#FFFFFF] ';
                        break;
                    case 'Pending':
                        classNames += 'bg-[#FFD181] text-[#050505] ';
                        break;
                    default:
                        classNames += 'text-[E2E4EB] ';
                }

                return (
                    <div className={classNames}>
                        {params.row.status}
                    </div>
                );
            }
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
                        <EoiModal
                            handleClose={handleClose}
                            dateTime={'09th, Nov, 2023; 09:23:44Am'}
                            status={selectedRow.status || 'Default Status'}
                            companyName={selectedRow.companyname || 'Provide Company Name'}
                            companyEmail={selectedRow.companyEmail || 'Provide an email address'}
                            companyNumber={selectedRow.companyNumber || 'Provide a number'}
                            statusHeading={selectedRow.status}
                            approverName={selectedRow.approverName || 'Okoro Florish'}

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
                        <div className='text-[12px] font-[400] text-[#828DA9] '>Filter</div>
                        <IconButton onClick={handleFilterClick}>
                            <FilterList />
                        </IconButton>
                        {dropdownOpen && (
                            <div className='absolute z-10 top-full -right-3 mt-2 h-[100px] w-[155px] bg-[#FFFFFF] border border-[#E2E4EB] rounded-md shadow-lg'>
                                {companyStatus.map((status, index) => (
                                    <div key={index} className='cursor-pointer p-2 hover:bg-[#D2F69E] text-[12px]' onClick={() => setSelectedStatus(status)}>
                                        {status}
                                    </div>
                                ))}
                            </div>
                        )}
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

export default EoiRequestTable


