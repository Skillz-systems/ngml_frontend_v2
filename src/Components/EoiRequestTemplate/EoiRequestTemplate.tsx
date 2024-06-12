import { Button, Heading } from '@/Components';
import colors from '@/Utils/colors';
import { ContentPasteOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';

interface EoiRequestTemplateprops {
    dateTime?: string;
    status?: string;
    companyName?: string;
    companyEmail?: string;
    companyNumber?: string;
    handleClose: () => void;
    statusHeading?: string;
    statusStyle?: React.CSSProperties;
    approverName?: string;
    disapprovalReason?: string;
}

const EoiRequestTemplate: React.FC<EoiRequestTemplateprops> = ({
    dateTime,
    status,
    companyName,
    companyEmail,
    companyNumber,
    statusHeading,
    handleClose,
    statusStyle,
    approverName,
    disapprovalReason,
}) => {

    const renderStatusContent = () => {
        switch (status) {
            case 'New':
                return (
                    <Button
                        type='primary'
                        label='Request Approval'
                        action={handleClose}
                        width='164px'
                        height='26px'
                        fontSize='12px'
                        fontWeight='400'
                        radius='32px'
                    />
                );
            case 'Approved':
                return (
                    <div className='flex justify-between text-[#828DA9] text-[14px] font-[400] '>
                        <div >Approved by: {approverName}</div>
                        <div >Date & Time: {dateTime}</div>
                    </div>
                );
            case 'Disapproved':
                return (
                    <div className='flex justify-end gap-[8px] text-[#828DA9]'>
                        <Button
                            type='outline'
                            label='View Reason'
                            action={handleClose}
                            width='105px'
                            height='26px'
                            fontSize='10px'
                            fontWeight='400'
                            radius='32px'
                            color='#828DA9'


                        />
                        <div >Reason: {disapprovalReason}</div>
                        <div >Disapproved on: {dateTime}</div>
                    </div>
                );
            case 'Pending':
                return <div className='text-[#828DA9] text-[14px] font-[700]'>Awaiting Approval...</div>;
            default:
                return null;
        }
    }


    return (
        <div className="  h-[100%] w-[100%] rounded-[6px]" style={{ background: colors.dark[50] }}>
            <Box>
                <div className='items-center h-[100%] p-[10px]'>
                    <Heading as="h6" size="h6" color='primaryColor' className="font-[2px] text-dark-400">EOI REQUEST:</Heading>

                    {/* <div className='text-[20px] text-[#49526A] font-[700]'>EOI REQUEST</div> */}
                </div>
            </Box>
            <div className='h-fit bg-[#F6FDEC] p-[10px]'>
                <div className='flex justify-between '>
                    <div className='flex gap-[8px] items-center'>
                        <div className='text-[#828DA9] text-[12px] font-[700]'>Dates Picked On</div>
                        <div className='text-[#828DA9] text-[12px] font-[400]'>{dateTime}</div>
                    </div>
                    <div style={statusStyle}
                        className='border border-[#E2E4EB] p-[15px] h-[24px] bg-[#EAEEF2] rounded-[24px] flex items-center justify-center text-[#050505] text-[12px]'>
                        {statusHeading}
                    </div>
                </div>
            </div>
            <div className='h-fit bg-[#F6F8FA] p-[10px]'>
                <div className='flex justify-between w-[100%]'>
                    <div className='text-[#828DA9] text-[14px] font-[500] w-[50%] flex justify-between'>
                        <div>
                            <div className='font-[800]'>Company Name</div>
                            <div className='font-[800]'>Company Email</div>
                            <div className='font-[800]' >Company Number</div>

                        </div>
                        <div>
                            <div className='font-[600]'>{companyName}</div>
                            <div className='font-[600]'>{companyEmail}</div>
                            <div className='font-[600]'>{companyNumber}</div>
                        </div>

                    </div>
                    <div className='border border-[#CCD0DC] cursor-pointer h-[32px] w-[32px] rounded-[100%] flex items-center justify-center'>
                        <ContentPasteOutlined style={{ height: '14px', width: '14px', color: '#828DA9' }} />
                    </div>
                </div>
            </div>
            <div className='h-100% w-[100%] bg-[#FFFFFF] flex items-center justify-center p-[10px]'>
                <div className='border border-[#E2E4EB] w-[100%] h-fit rounded-[12px] p-[20px] pt-[10px] flex flex-col gap-y-[10px]'>
                    <div className='text-[#828DA9] text-[16px] font-[700]'>REASON FOR REQUEST</div>
                    <textarea className='text-[#050505] text-[16px] h-[340px] outline-none font-[500] rounded-md' placeholder='Enter your reason here...'></textarea>
                </div>
            </div>
            <div className='h-fit p-[20px] bg-[#FFF3D5] ' >
                <div>{renderStatusContent()}</div>
            </div>

        </div>
    );
};

export default EoiRequestTemplate;
