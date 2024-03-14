/* eslint-disable react-hooks/exhaustive-deps */
// import Pagination from '@/Components/Pagination/Pagination';
import { ProcessingCustomerData } from '@/Data';
import { FilterList, SearchOutlined } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';


interface ProcessingCustomerTableProps {
    id: number;
    sn: string;
    companyname: string;
    companyType: string;
    request: string;
    ddqform: string;
    sitevisits: string;
    analysis: string;
    agreement: string;
    connectProject: string;
    statusUpdate: string;
    action: string;

}

const rows = ProcessingCustomerData


const ProcessingCustomerTable = () => {
    const [searchText, setSearchText] = useState<string>('');
    const [filteredRows, setFilteredRows] = useState<ProcessingCustomerTableProps[]>(rows);
    const [selectedProcessingCustomer, setSelectedProcessingCustomer] = useState<string>('Processing Customer');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // const itemsPerPage = 5;
    // const [currentPage, setCurrentPage] = useState(1);


    // useEffect(() => {
    //     // Filter data based on currentPage and itemsPerPage
    //     const startIndex = (currentPage - 1) * itemsPerPage;
    //     const endIndex = startIndex + itemsPerPage;
    //     const currentItems = filteredRows.slice(startIndex, endIndex);
    // }, [currentPage, filteredRows]);

    useEffect(() => {
        filterData(searchText);
    }, [searchText, selectedProcessingCustomer]);


    const handleFilterClick = () => {
        setDropdownOpen(!dropdownOpen);
        setSelectedProcessingCustomer('Processing Customer');
    };



    const agreementNames = [...new Set(rows.map(row => row.request))];

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchText(value);
    };

    const filterData = (search: string) => {
        const lowercasedSearch = search.toLowerCase();
        let filtered = rows.filter((row) =>
            row.companyname.toLowerCase().includes(lowercasedSearch) ||
            row.companyType.toLowerCase().includes(lowercasedSearch)
        );
        if (selectedProcessingCustomer !== 'Processing Customer') {
            filtered = filtered.filter(row => row.request === selectedProcessingCustomer);
        }
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
            width: 250,
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
            field: 'request',
            headerName: 'REQUEST',
            width: 110,
            renderCell: (params: GridRenderCellParams) => {
                let classNames = 'text-[12px] font-[500] h-[24px] flex justify-center items-center px-2.5 ';

                switch (params.row.request) {
                    case 'In Progress':
                        classNames += 'bg-[#FFD181] text-[#49526A] w-[110px] h-[48px]';
                        break;
                    case 'Approved':
                        classNames += 'bg-[#D2F69E] text-[#49526A] w-[110px] h-[48px]';
                        break;
                    case 'Disapproved':
                        classNames += 'bg-[#FD838F] text-[#FFFFFF] w-[110px] h-[48px]';
                        break;
                    default:
                        classNames += 'text-[E2E4EB] ';
                }
                return (
                    <div className={classNames}>
                        {params.row.request}
                    </div>
                );
            }
        },

        {
            field: 'ddqform',
            headerName: 'DDQ FORM',
            width: 110,
            renderCell: (params: GridRenderCellParams) => {
                let classNames = 'text-[12px] font-[500] h-[24px] flex justify-center items-center px-2.5 ';

                switch (params.row.ddqform) {
                    case 'In Progress':
                        classNames += 'bg-[#FFD181] text-[#49526A] w-[110px] h-[48px]';
                        break;
                    case 'Completed':
                        classNames += 'bg-[#D2F69E] text-[#49526A] w-[110px] h-[48px]';
                        break;
                    default:
                        classNames += 'text-[E2E4EB] ';
                }
                return (
                    <div className={classNames}>
                        {params.row.ddqform}
                    </div>
                );
            }
        },
        {
            field: 'sitevisits',
            headerName: 'SITE VISITS',
            width: 110,
            renderCell: (params: GridRenderCellParams) => {
                let classNames = 'text-[12px] font-[500] h-[24px] flex justify-center items-center px-2.5 ';

                switch (params.row.sitevisits) {
                    case 'In Progress':
                        classNames += 'bg-[#FFD181] text-[#49526A] w-[110px] h-[48px]';
                        break;
                    case 'Completed':
                        classNames += 'bg-[#D2F69E] text-[#49526A] w-[110px] h-[48px]';
                        break;
                    default:
                        classNames += 'text-[E2E4EB] ';
                }
                return (
                    <div className={classNames}>
                        {params.row.sitevisits}
                    </div>
                );
            }
        },
        {
            field: 'analysis',
            headerName: 'ANALYSIS',
            width: 110,
            renderCell: (params: GridRenderCellParams) => {
                let classNames = 'text-[12px] font-[500] h-[24px] flex justify-center items-center px-2.5 ';

                switch (params.row.analysis) {
                    case 'In Progress':
                        classNames += 'bg-[#FFD181] text-[#49526A] w-[110px] h-[48px]';
                        break;
                    case 'Completed':
                        classNames += 'bg-[#D2F69E] text-[#49526A] w-[110px] h-[48px]';
                        break;
                    default:
                        classNames += 'text-[E2E4EB] ';
                }
                return (
                    <div className={classNames}>
                        {params.row.analysis}
                    </div>
                );
            }
        },
        {
            field: 'agreement',
            headerName: 'AGREEMENT',
            width: 110,
            renderCell: (params: GridRenderCellParams) => {
                let classNames = 'text-[12px] font-[500] h-[24px] flex justify-center items-center px-2.5 ';

                switch (params.row.agreement) {
                    case 'In Progress':
                        classNames += 'bg-[#FFD181] text-[#49526A] w-[110px] h-[48px]';
                        break;
                    case 'Completed':
                        classNames += 'bg-[#D2F69E] text-[#49526A] w-[110px] h-[48px]';
                        break;
                    default:
                        classNames += 'text-[E2E4EB] ';
                }
                return (
                    <div className={classNames}>
                        {params.row.agreement}
                    </div>
                );
            }
        },
        {
            field: 'connectProject',
            headerName: 'CONNECT PROJECT',
            width: 126,
            renderCell: (params) => (
                <div className='text-[12px] font-[500] text-[#49526A] leading-3 '>
                    {params.row.connectProject}
                </div>
            )
        },
        {
            field: 'statusUpdate',
            headerName: 'STATUS UPDATES',
            width: 126,
            renderCell: (params) => (
                <div className='text-[12px] font-[500] text-[#49526A] leading-3 text-wrap'>
                    {params.row.statusUpdate}
                </div>
            )
        },

    ]




    return (
        <div className='ml-[70px] mt-[20px] w-[1112px] '>
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
                    <div className='flex items-center gap-[10px] rounded-[32px] h-[32px] w-[205px] justify-center border border-[#CCD0DC] flex-row'>
                        <div className='text-[12px] font-[400] text-[#828DA9] '>Processing Customers</div>
                        <IconButton onClick={handleFilterClick}>
                            <FilterList />
                        </IconButton>
                        {dropdownOpen && (
                            <div className='absolute z-10 top-full -right-3 mt-2 h-[100px] w-[190px] bg-[#FFFFFF] border border-[#E2E4EB] rounded-md shadow-lg'>
                                {agreementNames.map(name => (
                                    <div key={name} className='cursor-pointer p-2 hover:bg-[#D2F69E] text-[12px]' onClick={() => setSelectedProcessingCustomer(name)}>
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
            {/* <div>
            <Pagination
                totalPages={Math.ceil(filteredRows.length / itemsPerPage)}
                onPageChange={setCurrentPage}
            />
            </div> */}

        </div>
    );
}

export default ProcessingCustomerTable


