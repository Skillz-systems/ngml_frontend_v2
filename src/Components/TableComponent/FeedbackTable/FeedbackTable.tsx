/* eslint-disable react-hooks/exhaustive-deps */
import { FilterList } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { FeedbackData } from '../../../Data';


interface FeedbackTableProps {
    id: number;
    companyname?: string;
    companyType?: string;
    selectedDates?: string[];
    status?: string;
    action?: string;
    deadline?: string;
    companyEmail?: string;
    companyNumber?: string;
    companyAddress?: string;

}

const rows = FeedbackData




const FeedbackTable = () => {
    const [filteredRows, setFilteredRows] = useState<FeedbackTableProps[]>(rows);
    const [selectedStatus, setSelectedStatus] = useState<string>('All Status');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        filterData();
    }, [selectedStatus]);

    const handleFilterClick = () => {
        setDropdownOpen(!dropdownOpen);
        setSelectedStatus('All Status');
    };


    const status = [...new Set(rows.map(row => row.status))];

    const filterData = () => {
        let filtered = rows;
        if (selectedStatus !== 'All Status') {
            filtered = filtered.filter(row => row.status === selectedStatus);
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
            field: 'datereceived',
            headerName: 'DATE SENT',
            width: 127,
            renderCell: (params) => (
                <div className='text-[12px] font-[700] text-[#49526A] leading-3 '>
                    {params.row.datereceived}
                </div>
            )
        },
        {
            field: 'name',
            headerName: 'RECEIVER',
            width: 200,
            renderCell: (params: GridRenderCellParams) => (
                <div className='text-[12px] font-[600] text-[#49526A] leading-3'>
                    {params.row.companyname}
                </div>

            ),
        },
        {
            field: 'subject',
            headerName: 'SUBJECT',
            width: 350,
            renderCell: (params: GridRenderCellParams) => (
                <div
                    className='text-[12px] font-[400] text-[#49526A] leading-3 text-wrap '>
                    {params.row.subject}
                </div>
            ),
        },

        {
            field: 'status',
            headerName: 'STATUS',
            width: 149,
            renderCell: (params: GridRenderCellParams) => {
                let classNames = 'text-[12px] font-[500] h-[24px] rounded-full flex justify-center items-center px-2.5 ';

                switch (params.row.status) {
                    case 'Feedback Pending':
                        classNames += 'bg-[#FFD181] text-[#050505] ';
                        break;
                    case 'Sent':
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

    ]




    return (
        <div className='ml-[70px] mt-[20px] w-[892px] '>

            <div className='flex items-center justify-between border border-[#CCD0DC] border-b-0 h-[60px] p-[20px] '>
                <div className='italic text-[12px] text-[#828DA9]'>
                    Showing {filteredRows.length} of {rows.length} site visits
                </div>
                <div className='flex justify-end  items-center gap-[8px] relative'>
                    <div className='flex items-center gap-[10px] rounded-[32px] h-[32px] w-[149px] justify-center border border-[#CCD0DC] flex-row'>
                        <div className='text-[12px] font-[400] text-[#828DA9] '>All Forms</div>
                        <IconButton onClick={handleFilterClick}>
                            <FilterList />
                        </IconButton>
                        {dropdownOpen && (
                            <div className='absolute z-10 top-full -right-3 mt-2 h-[100px] w-[190px] bg-[#FFFFFF] border border-[#E2E4EB] rounded-md shadow-lg'>
                                {status.map(name => (
                                    <div key={name} className='cursor-pointer p-2 hover:bg-[#D2F69E] text-[12px]' onClick={() => setSelectedStatus(name)}>
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
                    rowHeight={64}
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

export default FeedbackTable


