import { useState } from 'react';
import { CustomInput } from '../../Components/index';

/**
 * ConnectProject component for handling project date selection and other project-related operations.
 * 
 * @component
 * @example
 * <ConnectProject />
 * 
 * @returns {React.FC} The ConnectProject component.
 */

const ConnectProject: React.FC = () => {

    /**
    * State for storing the project start and end dates.
    * 
    * @type {Object}
    * @property {string} startdate - The proposed project start date.
    * @property {string} enddate - The proposed project end date.
    */

    const [projectDate, setProjectDate] = useState({
        startdate: '',
        enddate: '',
    });

    /**
    * State for storing the first gas date.
    * 
    * @type {string}
    */
    const [firstGasDate, setFirstGasDate] = useState('');

    /**
    * Handles input changes for the date fields.
    * 
    * @param {any} value - The value to set for the specified key.
    * @param {any} key - The key (state property name) to update.
    */

    const handleInputChange = (value: string, key: string) => {
        console.log(value)
        setProjectDate({ ...projectDate, [key]: value });
    };

    /**
    * Handles input change for the first gas date.
    * 
    * @param {string} value - The value to set for the first gas date.
    */
    const handleFirstGasDateChange = (value: string) => {
        console.log(value)
        setFirstGasDate(value);
    };

    /**
     * Placeholder function to create a customer. 
     * (Functionality to be implemented.)
     */

    // const handleCreateCustomer = () => {

    // };

    /**
     * Checks if both project start and end dates are selected.
     * 
     * @type {boolean}
     */

    // const areDatesSelected = projectDate.startdate && projectDate.enddate;

    return (
        <div className="w-full h-full flex-col justify-start items-start gap-2 inline-flex">
            <div className="w-full h-full p-4 bg-white rounded-xl flex-col justify-start items-start gap-6 flex">
                <div className="w-full p-2 rounded-xl border justify-between items-center flex">
                    <div className="text-[#808080] text-base font-bold font-['Mulish'] ml-4">First Gas Date</div>
                    <div className="p-1 rounded-3xl w-40 mr-4">
                        <CustomInput
                            type="date"
                            label=''
                            value={firstGasDate}
                            handleChangeEvent={handleFirstGasDateChange}
                            placeholder="Select First Gas Date"
                            styleVariant='customStyle3'
                        />
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
                            placeholder="Select start date"
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
                    {/* <div className={`flex ${!areDatesSelected ? 'justify-start' : 'justify-end'} items-center transition-transform duration-5000 ease-in-out`}>
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
                    </div> */}
                </div>
                {/* {areDatesSelected && (
                    <div className="w-full h-full p-6 rounded-xl border space-y-6">
                        <div className="text-base font-bold font-['Mulish'] leading-none">PROJECT DATES</div>
                        <div className='flex md:flex-row flex-col justify-start gap-4'>
                            <div className="w-full md:w-[250px] px-8 py-3 rounded-3xl border hover:bg-nnpcmediumgreen-850 cursor-pointer">
                                <div className="text-base font-normal font-['Mulish'] text-center">Select Project Strategy</div>
                            </div>
                            <div className="w-full md:w-[250px] px-8 py-3 rounded-3xl border hover:bg-nnpcmediumgreen-850 justify-center cursor-pointer">
                                <div className="text-base font-normal font-['Mulish'] text-center">Setup Project Milestones</div>
                            </div>
                        </div>
                    </div>
                )} */}
            </div>
        </div>
    );
};

export default ConnectProject;