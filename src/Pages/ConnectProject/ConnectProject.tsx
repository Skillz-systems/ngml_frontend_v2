
// import { useState } from 'react';
// import { Button, CustomInput, Modal } from '../../Components/index';
// import images from '@/assets';

// /**
//  * ConnectProject component for handling project date selection and other project-related operations.
//  *
//  * @component
//  * @example
//  * <ConnectProject />
//  *
//  * @returns {React.FC} The ConnectProject component.
//  */
// const ConnectProject: React.FC = () => {
//     const [projectDate, setProjectDate] = useState({
//         startdate: '',
//         enddate: '',
//     });
//     const [firstGasDate, setFirstGasDate] = useState('');
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [isNewModalOpen, setIsNewModalOpen] = useState(false);
//     const [isTenderingVisible, setIsTenderingVisible] = useState(false);
//     const [selectedDate, setSelectedDate] = useState('');
//     const [isTenderingComplete, setIsTenderingComplete] = useState(false);
//     const [isStrategyVisible, setIsStrategyVisible] = useState(false);
//     const [selectedStrategy, setSelectedStrategy] = useState('');



//     const handleInputChange = (value: string, key: string) => {
//         setProjectDate({ ...projectDate, [key]: value });
//     };

//     const handleCreateCustomer = () => {
//         setIsNewModalOpen(true);
//     };

//     const handleClose = () => {
//         setIsModalOpen(false);
//     };

//     const handleCloseNewModal = () => {
//         setIsNewModalOpen(false);
//     };

//     const handleTenderingProcessComplete = () => {
//         setIsTenderingComplete(true);
//         setIsNewModalOpen(true);
//     };

//     const toggleStrategyVisibility = () => {
//         setIsStrategyVisible(!isStrategyVisible);
//     };

//     const handleStrategyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setSelectedStrategy(event.target.value);
//     };


//     const areDatesSelected = projectDate.startdate && projectDate.enddate;

//     return (
//         <div className="inline-flex flex-col items-start justify-start w-full h-full gap-2">
//             <div className="flex flex-col items-start justify-start w-full h-full gap-6 p-4 bg-white rounded-xl">
//                 <div className="w-full justify-end items-center flex">
//                     <div className="items-center gap-4 flex">
//                         <div
//                             onClick={() => setIsModalOpen(true)}
//                             className="p-3 rounded-3xl border justify-center flex cursor-pointer"
//                         >
//                             <div className="text-[14px] leading-none">
//                                 {firstGasDate ? 'Adjust First Gas Date' : 'Set First Gas Date'}
//                             </div>
//                         </div>
//                         <div className="p-2 rounded-3xl border justify-center items-center gap-1 flex cursor-pointer" onClick={handleClose}>
//                             <div className="w-4 h-4 justify-center items-center flex">
//                                 <img src={images.cancel} alt="close icon" width={'10px'} />
//                             </div>
//                             <div className="Close text-center text-[#808080] text-[12px] font-normal">Close</div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex p-2 py-4 items-center justify-between w-full border rounded-xl">
//                     <div className="text-[#808080] text-base font-600 font-['Mulish'] ml-4">First Gas Date</div>
//                     <div className="mr-2 bg-[#D2F69E] px-2 py-1 rounded-[20px]">
//                         <div className='text-[#266425] text-[12px] font-[700]'>{firstGasDate || 'Add a date'}</div>
//                     </div>
//                 </div>
//                 <div className="w-full h-full p-5 space-y-6 border rounded-xl">
//                     <div className="text-base font-bold font-['Mulish'] leading-none">SET PROJECT DATES</div>
//                     <div className="">
//                         <CustomInput
//                             type="date"
//                             label='Proposed Project Start Date'
//                             value={projectDate.startdate}
//                             handleChangeEvent={(value) => handleInputChange(value, 'startdate')}
//                             placeholder="Select start date"
//                         />
//                     </div>
//                     <div className="">
//                         <CustomInput
//                             type="date"
//                             label='Proposed Project End Date'
//                             value={projectDate.enddate}
//                             handleChangeEvent={(value) => handleInputChange(value, 'enddate')}
//                             placeholder="Select end date"
//                         />
//                     </div>
//                     <div className={`flex ${!areDatesSelected ? 'justify-start' : 'justify-end'} items-center transition-transform duration-5000 ease-in-out`}>
//                         {!areDatesSelected && (
//                             <div className="h-12 px-8 py-3 rounded-3xl border justify-center items-center gap-2.5 inline-flex">
//                                 <div className="text-base font-normal font-['Mulish'] leading-none">Setup Project Milestones</div>
//                             </div>
//                         )}
//                         {areDatesSelected && (
//                             <div className='w-full md:w-[200px] transition-transform duration-5000 ease-in-out transform translate-y'>
//                                 <Button
//                                     type="secondary"
//                                     label="Confirm Selection"
//                                     action={handleCreateCustomer}
//                                     color="#FFFFFF"
//                                     width="100%"
//                                     height="40px"
//                                     fontSize="16px"
//                                     radius="20px"
//                                 />
//                             </div>
//                         )}
//                     </div>

//                 </div>
//                 {areDatesSelected && (
//                     <div className="w-full h-full p-6 space-y-6 border rounded-xl">
//                         <div className="text-base font-bold font-['Mulish'] leading-none">SET PROJECT MILESTONE</div>
//                         <div className='flex flex-col justify-start gap-4 md:flex-row'>
//                             <Button
//                                 type="tertiary"
//                                 label="Tendering Process"
//                                 action={() => setIsTenderingVisible(!isTenderingVisible)}
//                                 height="40px"
//                                 fontSize="16px"
//                                 radius="20px"
//                                 className='p-4'
//                             />
//                             <Button
//                                 type="tertiary"
//                                 label="Main Project Activities"
//                                 action={handleCreateCustomer}
//                                 height="40px"
//                                 fontSize="16px"
//                                 radius="20px"
//                                 className='p-4'
//                                 disabled={!isTenderingComplete}

//                             />
//                         </div>
//                     </div>
//                 )}

//                 {isTenderingVisible && (
//                     <div className="w-full h-full p-5 space-y-6 border rounded-xl">
//                         {/* <div className="text-base font-bold font-['Mulish'] leading-none">SELECT MILESTONE OPTION</div> */}
//                         <div className='flex flex-row gap-4 mt-4'>
//                             <Button
//                                 type="secondary"
//                                 label="Select Project Strategy"
//                                 action={toggleStrategyVisibility}
//                                 color="#FFFFFF"
//                                 height="40px"
//                                 fontSize="16px"
//                                 radius="20px"
//                                 className='p-4'
//                             />
//                             <Button
//                                 type="secondary"
//                                 label="Setup Project Milestones"
//                                 action={handleTenderingProcessComplete}
//                                 color="#FFFFFF"
//                                 height="40px"
//                                 fontSize="16px"
//                                 radius="20px"
//                                 className='p-4'
//                             />
//                         </div>
//                         {isStrategyVisible && ( 
//                             <div className="mt-4">
//                                 <div className="space-y-2">
//                                     <div className="custom-radio">
//                                         <input
//                                             type="radio"
//                                             id="openTendering"
//                                             name="projectStrategy"
//                                             value="Open Tendering"
//                                             checked={selectedStrategy === "Open Tendering"}
//                                             onChange={handleStrategyChange}
//                                             className="mr-2"
//                                         />
//                                         <label htmlFor="openTendering" className="text-sm text-gray-700">Open Tendering</label>
//                                     </div>
//                                     <div className="custom-radio">
//                                         <input
//                                             type="radio"
//                                             id="selectiveTendering"
//                                             name="projectStrategy"
//                                             value="Selective Tendering"
//                                             checked={selectedStrategy === "Selective Tendering"}
//                                             onChange={handleStrategyChange}
//                                             className="mr-2"
//                                         />
//                                         <label htmlFor="selectiveTendering" className="text-sm text-gray-700">Selective Tendering</label>
//                                     </div>
//                                     <div className="custom-radio">
//                                         <input
//                                             type="radio"
//                                             id="singleSourcing"
//                                             name="projectStrategy"
//                                             value="Single Sourcing"
//                                             checked={selectedStrategy === "Single Sourcing"}
//                                             onChange={handleStrategyChange}
//                                             className="mr-2"
//                                         />
//                                         <label htmlFor="singleSourcing" className="text-sm text-gray-700">Single Sourcing</label>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}

//                     </div>
//                 )}




//             </div>

//             <Modal
//                 isOpen={isModalOpen}
//                 onClose={handleClose}
//                 title="Select First Gas Date"
//                 buttons={[
//                     <Button
//                         key="cancel"
//                         type="outline"
//                         label="Cancel"
//                         action={handleClose}
//                         color="#FFFFFF"
//                         width="100px"
//                         height="40px"
//                         fontSize="16px"
//                         radius="20px"
//                     />,
//                     <Button
//                         key="confirm"
//                         type="secondary"
//                         label="Confirm"
//                         action={() => {
//                             setFirstGasDate(selectedDate);
//                             setIsModalOpen(false);
//                         }}
//                         color="#FFFFFF"
//                         width="100px"
//                         height="40px"
//                         fontSize="16px"
//                         radius="20px"
//                     />,
//                 ]}
//             >
//                 <input
//                     type="date"
//                     value={selectedDate}
//                     onChange={(e) => setSelectedDate(e.target.value)}
//                     className="border border-gray-300 rounded p-2 w-full"
//                 />
//             </Modal>

//             <Modal
//                 isOpen={isNewModalOpen}
//                 onClose={handleCloseNewModal}
//                 title="Milestone 1"
//                 buttons={[
//                     <Button
//                         key="cancel"
//                         type="outline"
//                         label="Cancel"
//                         action={handleCloseNewModal}
//                         color="#FFFFFF"
//                         width="150px"
//                         height="40px"
//                         fontSize="12px"
//                         radius="20px"
//                     />,
//                     <Button
//                         key="saveContinue"
//                         type="secondary"
//                         label="Save and Continue"
//                         action={handleCloseNewModal}
//                         color="#FFFFFF"
//                         width="150px"
//                         height="40px"
//                         fontSize="12px"
//                         radius="20px"
//                     />,
//                 ]}
//             >
//                 <div className="space-y-4">
//                     <div>
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="milestoneTitle">
//                             Milestone Title
//                         </label>
//                         <input
//                             id="milestoneTitle"
//                             type="text"
//                             placeholder="Laying Of Pipes To Customer Location"
//                             className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="milestoneDuration">
//                             Milestone Duration
//                         </label>
//                         <select
//                             id="milestoneDuration"
//                             className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         >
//                             <option value="">Choose</option>
//                             <option value="">1</option>
//                             <option value="">2</option>
//                             <option value="">3</option>
//                         </select>
//                     </div>
//                     <div>
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="milestoneDetails">
//                             Milestone Details
//                         </label>
//                         <textarea
//                             id="milestoneDetails"
//                             placeholder="Input details here"
//                             className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         ></textarea>
//                     </div>
//                 </div>
//             </Modal>
//         </div>
//     );
// };

// export default ConnectProject;
















import { Fragment, useEffect, useState } from 'react';
import { Button, CustomInput, Modal } from '../../Components/index';
import images from '@/assets';
import { FormField, useGetFormByEntityIdQuery, useSubmitFormMutation } from '@/Redux/Features/FormBuilder/formBuilderService';

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
    // const [projectDate, setProjectDate] = useState({
    //     startdate: '',
    //     enddate: '',
    // });
    const [firstGasDate, setFirstGasDate] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNewModalOpen, setIsNewModalOpen] = useState(false);
    const [isTenderingVisible, setIsTenderingVisible] = useState(false);
    const [selectedDate] = useState('');
    const [isTenderingComplete, setIsTenderingComplete] = useState(false);
    const [isStrategyVisible, setIsStrategyVisible] = useState(false);
    const [selectedStrategy, setSelectedStrategy] = useState('');

    const [formFields, setFormFields] = useState<FormField[]>([]);
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [dataForm] = useState<Record<string, string>>({});


    const { data, isSuccess, isLoading } = useGetFormByEntityIdQuery('connectProjectPage');

    const [submitForm, { isSuccess: submitSuccess }] = useSubmitFormMutation();


    useEffect(() => {
        if (data) {
            let parsedForm;
            try {
                parsedForm = JSON.parse(data.data.json_form);
            } catch (error) {
                console.error('Error parsing JSON:', error);
                console.log('Problematic JSON string:', data.data.json_form);
                parsedForm = [];
            }
            console.log(parsedForm)
            setFormFields(parsedForm);

            const initialData = parsedForm.reduce((acc: Record<string, string>, field: FormField) => {
                if (field.name) {
                    acc[field.name] = '';
                }
                return acc;
            }, {});

            setFormData(initialData);
        }
    }, [data, isSuccess])



    const handleInputChange = (value: string, key: string) => {
        setFormData(prevData => ({ ...prevData, [key]: value }));
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

    const handleTenderingProcessComplete = () => {
        setIsTenderingComplete(true);
        setIsNewModalOpen(true);
    };

    const toggleStrategyVisibility = () => {
        setIsStrategyVisible(!isStrategyVisible);
    };

    const handleStrategyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedStrategy(event.target.value);
    };


    const areDatesSelected = formData.startdate && formData.enddate;


    const handleSumbitMilestoe = async () => {

        const formFieldAnswers = formFields.map(field => ({
            id: field.id,
            elementType: field.type,
            name: field.name || field.id,
            placeholder: field.placeholder,
            key: field.name,
            value: formData[field.name as keyof typeof formData]
        }));

        const buildFormSubmission = {
            form_builder_id: data?.data.id,
            name: data?.data.name,
            process_flow_id: data?.data?.process_flow_id,
            process_flow_step_id: data?.data?.process_flow_step_id,
            tag_id: data?.data?.tag_id,
            form_field_answers: JSON.stringify(formFieldAnswers),
        };
        await submitForm(buildFormSubmission).unwrap();

        if (submitSuccess) setIsModalOpen(false);
    };

    return (
        <div className="inline-flex flex-col items-start justify-start w-full h-full gap-2">
            <div className="flex flex-col items-start justify-start w-full h-full gap-6 p-4 bg-white rounded-xl">
                <div className="w-full justify-end items-center flex">
                    <div className="items-center gap-4 flex">
                        <div
                            onClick={() => setIsModalOpen(true)}
                            className="p-3 rounded-3xl border justify-center flex cursor-pointer"
                        >
                            <div className="text-[14px] leading-none">
                                {firstGasDate ? 'Adjust First Gas Date' : 'Set First Gas Date'}
                            </div>
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
                    <div className="mr-2 bg-[#D2F69E] px-2 py-1 rounded-[20px]">
                        <div className='text-[#266425] text-[12px] font-[700]'>{firstGasDate || 'Add a date'}</div>
                    </div>
                </div>
                <div className="w-full h-full p-5 space-y-6 border rounded-xl">
                    <div className="text-base font-bold font-['Mulish'] leading-none">SET PROJECT DATES</div>
                    {isLoading && <p>Loading form...</p>}
                    {isSuccess && formFields.length > 0 ? (
                        formFields.map(field => (
                            <Fragment key={field.id}>
                                <CustomInput
                                    required
                                    type={field.type}
                                    label={field.name}
                                    value={formData[field.name as keyof typeof formData]}
                                    handleChangeEvent={(value) => handleInputChange(value, field.name as keyof typeof formData)}
                                    placeholder={field.placeholder}
                                />
                            </Fragment>
                        ))
                    ) : (
                        <p>No form fields available.</p>
                    )}
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
                        <div className="text-base font-bold font-['Mulish'] leading-none">SET PROJECT MILESTONE</div>
                        <div className='flex flex-col justify-start gap-4 md:flex-row'>
                            <Button
                                type="tertiary"
                                label="Tendering Process"
                                action={() => setIsTenderingVisible(!isTenderingVisible)}
                                height="40px"
                                fontSize="16px"
                                radius="20px"
                                className='p-4'
                            />
                            <Button
                                type="tertiary"
                                label="Main Project Activities"
                                action={handleCreateCustomer}
                                height="40px"
                                fontSize="16px"
                                radius="20px"
                                className='p-4'
                                disabled={!isTenderingComplete}

                            />
                        </div>
                    </div>
                )}

                {isTenderingVisible && (
                    <div className="w-full h-full p-5 space-y-6 border rounded-xl">
                        {/* <div className="text-base font-bold font-['Mulish'] leading-none">SELECT MILESTONE OPTION</div> */}
                        <div className='flex flex-row gap-4 mt-4'>
                            <Button
                                type="secondary"
                                label="Select Project Strategy"
                                action={toggleStrategyVisibility}
                                color="#FFFFFF"
                                height="40px"
                                fontSize="16px"
                                radius="20px"
                                className='p-4'
                            />
                            <Button
                                type="secondary"
                                label="Setup Project Milestones"
                                action={handleTenderingProcessComplete}
                                color="#FFFFFF"
                                height="40px"
                                fontSize="16px"
                                radius="20px"
                                className='p-4'
                            />
                        </div>
                        {isStrategyVisible && (
                            <div className="mt-4">
                                <div className="space-y-2">
                                    <div className="custom-radio" >
                                        <input
                                            type="radio"
                                            id="openTendering"
                                            name="projectStrategy"
                                            value="Open Tendering"
                                            checked={selectedStrategy === "Open Tendering"}
                                            onChange={handleStrategyChange}
                                            className="mr-2"
                                        />
                                        <label htmlFor="openTendering" className="text-sm text-gray-700">Open Tendering</label>
                                    </div>
                                    <div className="custom-radio" data-testid='selectiveTendering'>
                                        <input
                                            type="radio"
                                            id="selectiveTendering"
                                            name="projectStrategy"
                                            value="Selective Tendering"
                                            checked={selectedStrategy === "Selective Tendering"}
                                            onChange={handleStrategyChange}
                                            className="mr-2"
                                        />
                                        <label htmlFor="selectiveTendering" className="text-sm text-gray-700">Selective Tendering</label>
                                    </div>
                                    <div className="custom-radio" data-testid='singleSourcing'>
                                        <input
                                            type="radio"
                                            id="singleSourcing"
                                            name="projectStrategy"
                                            value="Single Sourcing"
                                            checked={selectedStrategy === "Single Sourcing"}
                                            onChange={handleStrategyChange}
                                            className="mr-2"
                                        />
                                        <label htmlFor="singleSourcing" className="text-sm text-gray-700">Single Sourcing</label>
                                    </div>
                                </div>
                            </div>
                        )}

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
                        type="outline"
                        label="Cancel"
                        action={handleClose}
                        color="#FFFFFF"
                        width="100px"
                        height="40px"
                        fontSize="16px"
                        radius="20px"
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
                        radius="20px"
                    />,
                ]}
            >
                { formFields.length > 0 ? (
                        formFields.map(field => (
                            <Fragment key={field.id}>
                                <CustomInput
                                    required
                                    type={field.type}
                                    label={field.name}
                                    value={dataForm[field.name as keyof typeof dataForm]}
                                    handleChangeEvent={(value) => handleInputChange(value, field.name as keyof typeof dataForm)}
                                    placeholder={field.placeholder}
                                />
                            </Fragment>
                        ))
                    ) : (
                        <p>No form fields available.</p>
                    )}
        
            </Modal>

            <Modal
                isOpen={isNewModalOpen}
                onClose={handleCloseNewModal}
                title="Milestone 1"
                buttons={[
                    <Button
                        key="cancel"
                        type="outline"
                        label="Cancel"
                        action={handleCloseNewModal}
                        color="#FFFFFF"
                        width="150px"
                        height="40px"
                        fontSize="12px"
                        radius="20px"
                    />,
                    <Button
                        key="saveContinue"
                        type="secondary"
                        label="Save and Continue"
                        action={handleSumbitMilestoe}
                        color="#FFFFFF"
                        width="150px"
                        height="40px"
                        fontSize="12px"
                        radius="20px"
                    />,
                ]}
            >
                {isLoading && <p>Loading form...</p>}
                {isSuccess && formFields.length > 0 ? (
                    formFields.map(field => (
                        <Fragment key={field.id}>
                            <CustomInput
                                required
                                type={field.type}
                                label={field.name}
                                value={formData[field.name as keyof typeof formData]}
                                handleChangeEvent={(value) => handleInputChange(value, field.name as keyof typeof formData)}
                                placeholder={field.placeholder}
                            />
                        </Fragment>
                    ))
                ) : (
                    <p>No form fields available.</p>
                )}
            </Modal>
        </div>
    );
};

export default ConnectProject;

