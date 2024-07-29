import colors from '@/Utils/colors';


const CustomerConnectProject = () => {
    return (
        <div className="p-[20px] flex flex-col gap-4 rounded-[20px] w-[100%] h-fit " style={{ background: colors.dark[50] }}>
            <div className='border-2 border-nnpcdarkgreen-500 rounded-[10px] p-[15px] bg-dark-50'>
                <div className='text-[18px] font-[600]'>Notice !!!</div>
                <div className='mt-2 text-[14px]'>The NNPC Gas Marketing Limited will
                    be required to visit the premises of your
                    business operations, to carry out a preliminary feasibilty
                    and site survey assessment. We therefore need you to pick
                    a date most convenient for that visit from the 3 available
                    dates provided below.
                </div>
            </div>
            <div className='flex justify-between border-2 border-nnpcdarkgreen-500 rounded-[10px] p-[15px] bg-dark-50'>
                <div className='font-[600]'>Project Period</div>
                <div className='flex gap-1'>
                    <div className='flex items-center justify-center text-[12px] font-[700] bg-[#D2F69E] text-[#35763F] p-1 rounded-[40px] w-[100px]'>
                        19/Aug/2024
                    </div>
                    <div>to</div>
                    <div className='flex items-center justify-center text-[12px] font-[700] bg-[#D2F69E] text-[#35763F] p-1 rounded-[40px] w-[100px]'>
                        19/Dec/2024
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerConnectProject
