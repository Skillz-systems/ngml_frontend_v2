
import { useState } from 'react';
import { Button, CustomInput, Modal } from '../../Components/index';
import images from '@/assets';

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
    const [projectDate, setProjectDate] = useState({
        startdate: '',
        enddate: '',
    });
    const [firstGasDate, setFirstGasDate] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNewModalOpen, setIsNewModalOpen] = useState(false); 
    const [selectedDate, setSelectedDate] = useState(''); 

    const handleInputChange = (value: string, key: string) => {
        setProjectDate({ ...projectDate, [key]: value });
    };

    const handleCreateCustomer = () => {
        setIsNewModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    const handleCloseNewModal = () => {
        setIsNewModalOpen(false);
    };

    const areDatesSelected = projectDate.startdate && projectDate.enddate;

    return (
        <div className="inline-flex flex-col items-start justify-start w-full h-full gap-2">
            <div className="flex flex-col items-start justify-start w-full h-full gap-6 p-4 bg-white rounded-xl">
                <div className="w-full justify-end items-center flex">
                    <div className="items-center gap-4 flex">
                        <div
                            onClick={() => setIsModalOpen(true)}
                            className="p-3 rounded-3xl border justify-center flex cursor-pointer"
                        >
                            <div className="text-[14px] leading-none">Adjust First Gas Date</div>
                        </div>
                        <div className="p-2 rounded-3xl border justify-center items-center gap-1 flex cursor-pointer" onClick={handleClose}>
                            <div className="w-4 h-4 justify-center items-center flex">
                                <img src={images.cancel} alt="close icon" width={'10px'} />
                            </div>
                            <div className="Close text-center text-[#808080] text-[12px] font-normal">Close</div>
                        </div>
                    </div>
                </div>
                <div className="flex p-2 py-4 items-center justify-between w-full border rounded-xl">
                    <div className="text-[#808080] text-base font-600 font-['Mulish'] ml-4">First Gas Date</div>
                    <div className="mr-2 bg-[#D2F69E] px-4 py-1 rounded-[20px]">
                        <div className='text-[#53B052] text-[14px] font-700'>{firstGasDate || 'Add a date'}</div>
                    </div>
                </div>
                <div className="w-full h-full p-5 space-y-6 border rounded-xl">
                    <div className="text-base font-bold font-['Mulish'] leading-none">PROJECT DATES</div>
                    <div className="">
                        <CustomInput
                            type="date"
                            label='Proposed Project Start Date'
                            value={projectDate.startdate}
                            handleChangeEvent={(value) => handleInputChange(value, 'startdate')}
                            placeholder="Select start date"
                        />
                    </div>
                    <div className="">
                        <CustomInput
                            type="date"
                            label='Proposed Project End Date'
                            value={projectDate.enddate}
                            handleChangeEvent={(value) => handleInputChange(value, 'enddate')}
                            placeholder="Select end date"
                        />
                    </div>
                    <div className={`flex ${!areDatesSelected ? 'justify-start' : 'justify-end'} items-center transition-transform duration-5000 ease-in-out`}>
                        {!areDatesSelected && (
                            <div className="h-12 px-8 py-3 rounded-3xl border justify-center items-center gap-2.5 inline-flex">
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
                    <div className="w-full h-full p-6 space-y-6 border rounded-xl">
                        <div className="text-base font-bold font-['Mulish'] leading-none">PROJECT DATES</div>
                        <div className='flex flex-col justify-start gap-4 md:flex-row'>
                            <Button
                                type="secondary"
                                label="Select Project Strategy"
                                action={handleCreateCustomer}
                                color="#FFFFFF"
                                height="40px"
                                fontSize="16px"
                                radius="20px"
                                className='p-4'
                            />
                            <Button
                                type="primary"
                                label="Setup Project Milestones"
                                action={handleCreateCustomer}
                                color="#FFFFFF"
                                height="40px"
                                fontSize="16px"
                                radius="20px"
                                className='p-4'

                            />
                        </div>
                    </div>
                )}
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={handleClose}
                title="Select First Gas Date"
                buttons={[
                    <Button
                        key="cancel"
                        type="secondary"
                        label="Cancel"
                        action={handleClose}
                        color="#FFFFFF"
                        width="100px"
                        height="40px"
                        fontSize="16px"
                        radius="8px"
                    />,
                    <Button
                        key="confirm"
                        type="secondary"
                        label="Confirm"
                        action={() => {
                            setFirstGasDate(selectedDate);
                            setIsModalOpen(false);
                        }}
                        color="#FFFFFF"
                        width="100px"
                        height="40px"
                        fontSize="16px"
                        radius="8px"
                    />,
                ]}
            >
                <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="border border-gray-300 rounded p-2 w-full"
                />
            </Modal>

            <Modal
                isOpen={isNewModalOpen}
                onClose={handleCloseNewModal}
                title="Milestone 1"
                buttons={[
                    <Button
                        key="cancel"
                        type="secondary"
                        label="Cancel"
                        action={handleCloseNewModal}
                        color="#FFFFFF"
                        width="150px"
                        height="40px"
                        fontSize="12px"
                        radius="8px"
                    />,
                    <Button
                        key="saveContinue"
                        type="secondary"
                        label="Save and Continue"
                        action={handleCloseNewModal}
                        color="#FFFFFF"
                        width="150px"
                        height="40px"
                        fontSize="12px"
                        radius="8px"
                    />,
                ]}
            >
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="milestoneTitle">
                            Milestone Title
                        </label>
                        <input
                            id="milestoneTitle"
                            type="text"
                            placeholder="Laying Of Pipes To Customer Location"
                            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="milestoneDuration">
                            Milestone Duration
                        </label>
                        <select
                            id="milestoneDuration"
                            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Choose</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="milestoneDetails">
                            Milestone Details
                        </label>
                        <textarea
                            id="milestoneDetails"
                            placeholder="Input details here"
                            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        ></textarea>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ConnectProject;
