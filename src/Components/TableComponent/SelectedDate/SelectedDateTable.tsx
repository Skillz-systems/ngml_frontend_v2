import { FilterList } from '@mui/icons-material';
import { IconButton, Modal, TextField } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useState } from 'react';
import { fundersData } from '../../../Data';
import SelectedDateModal from './SelectedDateModal';


interface SelectedDateTableProps {
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

const rows = fundersData




const SelectedDateTable = () => {
    const [searchText, setSearchText] = useState<string>('');
    const [filteredRows, setFilteredRows] = useState<SelectedDateTableProps[]>(rows);
    const [open, setOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<SelectedDateTableProps | null>(null);

    const handleOpen = (row: SelectedDateTableProps) => {
        setSelectedRow(row);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);


    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchText(value);
        filterData(value);
    };

    const filterData = (search: string) => {
        const lowercasedSearch = search.toLowerCase();
        const filtered = rows.filter((row) =>
            row.companyname.toLowerCase().includes(lowercasedSearch) ||
            row.companyType.toLowerCase().includes(lowercasedSearch)
        );
        setFilteredRows(filtered);
    };

    const handleFilterClick = () => {
        console.log('Filter icon clicked');
    };

    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'Date Approved':
                return { backgroundColor: '#D2F69E', color: '#005828' };
            case 'Request Approval':
                return { backgroundColor: '#FFF3D5', color: '#475467' }; // For inline styles
            default:
                return {};
        }
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
                <div className='text-xs font-[600] text-[#49526A] leading-3'>
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
            field: 'selectedDates',
            headerName: 'SELECTED DATES',
            width: 351,
            renderCell: (params) => (
                <div className='text-[12px] font-[500] text-[#49526A] leading-3 flex gap-[10px]'>
                    {params.row.selectedDates ? params.row.selectedDates.map((date: string, index: number) => (
                        <div key={index} className='bg-[#EAEEF2] h-[24px] w-[92px] flex items-center justify-center rounded-[24px] '>
                            {date}
                        </div>
                    )) : 'No Dates Selected'}
                </div>
            )
        },
        {
            field: 'status',
            headerName: 'STATUS',
            width: 146,
            renderCell: (params: GridRenderCellParams) => {
                let classNames = 'text-xs h-6 rounded-full flex justify-center items-center px-2.5 ';

                switch (params.row.status) {
                    case 'Date Approved':
                        classNames += 'bg-[#D2F69E] text-[#005828] ';
                        break;
                    case 'Request Approval':
                        classNames += 'bg-[#FFF3D5] text-[#475467] border border-[ #E2E4EB] ';
                        break;
                    case 'Dates Selected':
                        classNames += 'border border-[E2E4EB] ';
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
                            statusStyle={getStatusStyle(selectedRow.status)}

                        />
                    )}
                </div>
            </Modal>
            <div className='flex items-center justify-between border border-[#CCD0DC] h-[60px] p-[20px] '>
                <div className='italic text-[12px] text-[#828DA9]'>
                    Showing {filteredRows.length} of {rows.length} site visits
                </div>
                <div className='flex justify-end  items-center gap-[8px]	'>
                    <TextField
                        id="search-input"
                        label="Search this list"
                        variant="outlined"
                        size="small"
                        value={searchText}
                        onChange={handleSearchChange}
                        InputProps={{
                            style: {
                                borderRadius: '32px',
                                width: '200px',
                                height: '35px',

                            }
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
                    <div className='flex items-center rounded-[32px]  h-[32px] w-[98px] justify-center border border-[#CCD0DC] flex-row'>
                        <div className='text-[10px] font-[400] text-[#828DA9] italic'>Filter</div>
                        <IconButton onClick={handleFilterClick}  >
                            <FilterList />
                        </IconButton>
                    </div>
                </div>
            </div>

            <div style={{ width: '100%' }}>
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
                                fontSize: '12px'
                            },
                        },

                    }}
                />
            </div>
        </div>
    );
}

export default SelectedDateTable


