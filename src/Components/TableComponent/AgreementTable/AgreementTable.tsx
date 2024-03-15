/* eslint-disable react-hooks/exhaustive-deps */
import { AgreementData } from '@/Data';
import { FilterList, SearchOutlined } from '@mui/icons-material';
import { IconButton, InputAdornment, Modal, TextField } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import SelectedDateModal from '../SiteVistTable/SiteVistTableModal';


/**
 * Defines the structure for Agreement properties used in the AgreementTable.
 * 
 * @interface
 * @property {number} id - Unique identifier for the agreement.
 * @property {string} companyname - Name of the company associated with the agreement.
 * @property {string} companyType - Type of the company (e.g., LLC, Inc., etc.).
 * @property {string[]} selectedDates - Optional. Dates selected for the agreement.
 * @property {string} status - Current status of the agreement (e.g., Signed, Unsigned).
 * @property {string} action - Action available for the agreement (e.g., View, Edit).
 * @property {string} deadline - Optional. Deadline for the agreement.
 * @property {string} companyEmail - Optional. Email address of the company.
 * @property {string} companyNumber - Optional. Contact number of the company.
 * @property {string} companyAddress - Optional. Physical address of the company.
 */

interface AgreementTableProps {
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

const rows = AgreementData




const AgreementTable = () => {
    const [searchText, setSearchText] = useState<string>('');
    const [filteredRows, setFilteredRows] = useState<AgreementTableProps[]>(rows);
    const [open, setOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<AgreementTableProps | null>(null);
    const [selectedAgreement, setSelectedAgreement] = useState<string>('All Contracts');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    /**
     * useEffect hook to filter data whenever searchText or selectedAgreement changes.
     */
    useEffect(() => {
        filterData(searchText);
    }, [searchText, selectedAgreement]);

    /**
     * Toggles the dropdown menu for the agreement filter.
     */
    const handleFilterClick = () => {
        setDropdownOpen(!dropdownOpen);
        setSelectedAgreement('All Contracts');
    };

    const agreementNames = [...new Set(rows.map(row => row.agreementType))];

    /**
     * Opens a modal to show detailed information for the selected row.
     * @param {AgreementTableProps} row - The selected row's data.
     */
    const handleOpen = (row: AgreementTableProps) => {
        setSelectedRow(row);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    /**
     * Handles changes to the search input field and updates the searchText state.
     * @param {React.ChangeEvent<HTMLInputElement>} event - The event triggered by changing the input field.
     */
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchText(value);
    };


    /**
    * Filters the rows based on the search text and selected agreement type.
    * @param {string} search - The current text in the search input field.
    */
    const filterData = (search: string) => {
        const lowercasedSearch = search.toLowerCase();
        let filtered = rows.filter((row) =>
            row.companyname.toLowerCase().includes(lowercasedSearch) ||
            row.companyType.toLowerCase().includes(lowercasedSearch)
        );
        if (selectedAgreement !== 'All Contracts') {
            filtered = filtered.filter(row => row.agreementType === selectedAgreement);
        }
        setFilteredRows(filtered);
    };



    /**
    * Returns a style object based on the agreement's status.
    * @param {string} status - The status of the agreement.
    * @returns {React.CSSProperties} The style object for the status.
    */
    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'Signed':
                return { backgroundColor: '#D2F69E', color: '#005828' };
            case 'Unsigned':
                return { backgroundColor: '#FFD181', color: '#475467' };
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
            field: 'agreementType',
            headerName: 'AGREEMENT NAME',
            width: 444,
            renderCell: (params: GridRenderCellParams) => (
                <div
                    className='text-[12px] font-[700] text-[#49526A] leading-3'>
                    {params.row.agreementType}
                </div>
            ),
        },
        {
            field: 'datesent',
            headerName: 'DATE SENT',
            width: 180,
            renderCell: (params) => (
                <div className='text-[12px] font-[700] text-[#49526A] leading-3 '>
                    {params.row.datesent}
                </div>
            )
        },
        {
            field: 'status',
            headerName: 'STATUS',
            width: 100,
            renderCell: (params: GridRenderCellParams) => {
                let classNames = 'text-[12px] font-[500] h-[24px] rounded-full flex justify-center items-center px-2.5 ';

                switch (params.row.status) {
                    case 'Unsigned':
                        classNames += 'bg-[#FFD181] text-[#050505] ';
                        break;
                    case 'Signed':
                        classNames += 'bg-[#D2F69E] text-[#005828] ';
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
                                <SearchOutlined/> 
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
                                {agreementNames.map(name => (
                                    <div key={name} className='cursor-pointer p-2 hover:bg-[#D2F69E] text-[12px]' onClick={() => setSelectedAgreement(name)}>
                                        {name}
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

export default AgreementTable


