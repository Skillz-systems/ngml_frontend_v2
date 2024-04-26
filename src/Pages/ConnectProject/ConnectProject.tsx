import { useState } from 'react';
import { Button, CustomInput } from '../../Components/index';


const ConnectProject: React.FC = () => {
    const [projectDate, setProjectDate] = useState({
        startdate: '',
        enddate: '',
    });
    const handleInputChange = (value: any, key: any) => {
        console.log(value)
        setProjectDate({ ...projectDate, [key]: value });
    };

    const handleCreateCustomer = () => {

    };

    const areDatesSelected = projectDate.startdate && projectDate.enddate;

    return (
        <div className="w-full h-full flex-col justify-start items-start gap-2 inline-flex">
            <div className="w-full h-full p-4 bg-white rounded-xl flex-col justify-start items-start gap-6 flex">
                <div className="w-full p-5 rounded-xl border justify-between items-center flex">
                    <div className="text-[#808080] text-base font-bold font-['Mulish']">First Gas Date</div>
                    <div className="p-2 bg-nnpc-50 rounded-3xl">
                        <div className="text-center text-nnpc-200 text-xs font-bold font-['Mulish']">12/Dec/2024</div>
                    </div>
                </div>
                <div className="h-full w-full p-6 rounded-xl border space-y-6">
                    <div className="text-base font-bold font-['Mulish'] leading-none">PROJECT DATES</div>
                    <div className="">
                        <CustomInput
                            type="date"
                            label='Proposed project start date'
                            value={projectDate.startdate}
                            handleChangeEvent={(value) => handleInputChange(value, 'startdate')}
                            placeholder="Select end date"
                        />
                    </div>
                    <div className="">
                        <CustomInput
                            type="date"
                            label='Proposed project end date'
                            value={projectDate.enddate}
                            handleChangeEvent={(value) => handleInputChange(value, 'enddate')}
                            placeholder="Select end date"
                        />
                    </div>
                    <div className={`flex ${!areDatesSelected ? 'justify-start' : 'justify-end'} items-center transition-transform duration-5000 ease-in-out`}>
                        {!areDatesSelected && (
                            <div className="w-full md:w-60 h-12 px-8 py-3 rounded-3xl border justify-center items-center gap-2.5 inline-flex">
                                <div className="text-base font-normal font-['Mulish'] leading-none">Setup Project Milestones</div>
                            </div>
                        )}
                        {areDatesSelected && (
                            <div className='w-full md:w-[200px] transition-transform duration-5000 ease-in-out transform translate-y'>
                                <Button
                                    type="secondary"
                                    label="Confirm Selection"
                                    action={handleCreateCustomer}
                                    color="#FFFFFF"
                                    width="100%"
                                    height="40px"
                                    fontSize="16px"
                                    radius="20px"
                                />
                            </div>
                        )}
                    </div>
                </div>
                {areDatesSelected && (
                    <div className="w-full h-full p-6 rounded-xl border space-y-6">
                        <div className="text-base font-bold font-['Mulish'] leading-none">PROJECT DATES</div>
                        <div className='flex md:flex-row flex-col justify-start gap-4'>
                            <div className="w-full md:w-60 px-8 py-3 rounded-3xl border hover:bg-nnpcmediumgreen-850 cursor-pointer">
                                <div className="text-base font-normal font-['Mulish'] leading-none">Select Project Strategy</div>
                            </div>
                            <div className="w-full md:w-60 px-8 py-3 rounded-3xl border hover:bg-nnpcmediumgreen-850 justify-center cursor-pointer">
                                <div className="text-base font-normal font-['Mulish'] leading-none">Setup Project Milestones</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ConnectProject;