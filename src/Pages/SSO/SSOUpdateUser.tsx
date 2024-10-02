// import { Designation, useGetDesignationsQuery } from '@/Redux/Features/UserSettings/designationService';
// import { Location, useGetLocationsQuery } from '@/Redux/Features/UserSettings/locationService';
// import { Unit, useGetUnitsQuery } from '@/Redux/Features/UserSettings/unitService';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import {
//     AuthContainer,
//     Button,
//     ContentContainer,
//     CustomInput,
// } from '../../Components/index';
// import images from '../../assets/index';
// import '../../index.css';

// const SSOUpdateUser: React.FC = () => {


//     const { data: designations } = useGetDesignationsQuery();
//     const { data: locations } = useGetLocationsQuery();
//     const { data: units } = useGetUnitsQuery();

//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         location: '',
//         designation: '',
//         unit: ''
//     });

//     // const keyValueOptions = [
//     //     { label: 'Option A', value: 'a' },
//     //     { label: 'Option B', value: 'b' },
//     //     { label: 'Option C', value: 'c' }
//     // ];


//     function isDesignationArray(data: Designation | Designation[]): data is Designation[] {
//         return Array.isArray(data);
//     }

//     function isLocationArray(data: Location | Location[]): data is Location[] {
//         return Array.isArray(data);
//     }

//     function isUnitArray(data: Unit | Unit[]): data is Unit[] {
//         return Array.isArray(data);
//     }
//     const designationOptions = designations?.data
//         ? (isDesignationArray(designations.data)
//             ? designations.data.map(item => ({
//                 label: item.role,
//                 value: item.id?.toString() ?? ''
//             }))
//             : [{
//                 label: designations.data.role,
//                 value: designations.data.id?.toString() ?? ''
//             }])
//         : [];

//     const locationOptions = locations?.data
//         ? (isLocationArray(locations.data)
//             ? locations.data.map(item => ({
//                 label: item.location,
//                 value: item.id?.toString() ?? ''
//             }))
//             : [{
//                 label: locations.data.location,
//                 value: locations.data.id?.toString() ?? ''
//             }])
//         : [];


//     const unitOptions = units?.data
//         ? (isUnitArray(units.data)
//             ? units.data.map(item => ({
//                 label: item.name,
//                 value: item.id?.toString() ?? ''
//             }))
//             : [{
//                 label: units.data.name,
//                 value: units.data.id?.toString() ?? ''
//             }])
//         : [];



//     const handleChange = (key: string) => (value: string) => {
//         setFormData({ ...formData, [key]: value });
//     };

//     return (
//         <div className="min-h-screen flex flex-col logingradient-bg w-[100%]">
//             <ToastContainer />
//             <div className="flex flex-col items-center justify-center flex-1 p-10 mb-6">
//                 <div className="w-[100%]">
//                     <AuthContainer>
//                         <h1 className="text-[12px] md:text-[18px] font-semibold text-white">
//                             Update Your Info
//                         </h1>
//                         <div className="w-[100%] mt-2">
//                             <div className="mx-auto space-y-4">
//                                 <CustomInput
//                                     type="select"
//                                     options={locationOptions}
//                                     value={formData.location}
//                                     handleChangeEvent={handleChange('location')}
//                                     placeholder="Select location"
//                                     styleVariant="customStyle1"
//                                     icon={<img src={images.email} alt="location" />}
//                                 />

//                                 <CustomInput
//                                     type="select"
//                                     options={unitOptions}
//                                     value={formData.unit}
//                                     handleChangeEvent={handleChange('unit')}
//                                     placeholder="Select unit"
//                                     styleVariant="customStyle1"
//                                     icon={<img src={images.email} alt="unit" />}
//                                 />

//                                 <CustomInput
//                                     type="select"
//                                     options={designationOptions}
//                                     value={formData.designation}
//                                     handleChangeEvent={handleChange('designation')}
//                                     placeholder="Select Designation"
//                                     styleVariant="customStyle1"
//                                     icon={<img src={images.email} alt="designation" />}
//                                 />

//                             </div>
//                             <div className="flex items-center justify-center mt-4">
//                                 <Button
//                                     type="primary"
//                                     label='Update'
//                                     action={() => navigate('/admin')}
//                                     color="#FFFFFF"
//                                     width="100%"
//                                     height="48px"
//                                     fontSize="16px"
//                                     radius="32px"

//                                 />
//                             </div>
//                         </div>
//                     </AuthContainer>
//                 </div>

//             </div>
//             <div className="mb-6 ml-6 mr-6">
//                 <ContentContainer
//                     type="translucent"
//                     width="100%"
//                     height="30px"
//                     borderRadius={32}
//                 >
//                     <div className="flex items-center justify-center w-full h-full">
//                         <p className="text-center text-[8px] md:text-[10px] text-[#E3EADA]">
//                             This Portal is a Property of NNPC Gas Marketing Limited
//                         </p>
//                     </div>
//                 </ContentContainer>
//             </div>
//         </div>
//     );
// };

// export default SSOUpdateUser;


// import {
//     Designation,
//     Location,
//     Unit,
//     useGetDesignationsQuery,
//     useGetLocationsQuery,
//     useGetUnitsQuery
// } from '@/Redux/Features/UserSettings';

import { Designation, useGetDesignationsQuery } from '@/Redux/Features/UserSettings/designationService';
import { Location, useGetLocationsQuery } from '@/Redux/Features/UserSettings/locationService';
import { Unit, useGetUnitsQuery } from '@/Redux/Features/UserSettings/unitService';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    AuthContainer,
    Button,
    ContentContainer,
    CustomInput,
} from '../../Components';
import images from '../../assets';
import '../../index.css';

interface FormData {
    location: string;
    designation: string;
    unit: string;
}

type DataType = Designation | Location | Unit;

function isDataArray<T>(data: T | T[]): data is T[] {
    return Array.isArray(data);
}

function transformToOptions<T extends DataType>(
    data: T | T[] | undefined,
    labelKey: keyof T
): Array<{ label: string; value: string }> {
    if (!data) return [];

    const items = isDataArray(data) ? data : [data];
    return items.map(item => ({
        label: String(item[labelKey]),
        value: item.id?.toString() ?? ''
    }));
}

const SSOUpdateUser: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        location: '',
        designation: '',
        unit: ''
    });

    // Fetch data with loading and error states
    const { data: designations, isLoading: isLoadingDesignations, isError: designationError } = useGetDesignationsQuery();
    const { data: locations, isLoading: isLoadingLocations, isError: locationError } = useGetLocationsQuery();
    const { data: units, isLoading: isLoadingUnits, isError: unitError } = useGetUnitsQuery();

    // Transform data to options
    const designationOptions = transformToOptions(designations?.data, 'role');
    const locationOptions = transformToOptions(locations?.data, 'location');
    const unitOptions = transformToOptions(units?.data, 'name');

    const isLoading = isLoadingDesignations || isLoadingLocations || isLoadingUnits;
    const hasError = designationError || locationError || unitError;

    const handleChange = (key: keyof FormData) => (value: string) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const isFormValid = () => {
        return Object.values(formData).every(value => value.trim() !== '');
    };

    const handleSubmit = async () => {
        try {
            if (!isFormValid()) {
                toast.error('Please fill in all fields');
                return;
            }
            // Add your API call here
            // await updateUserInfo(formData);
            toast.success('User information updated successfully');
            navigate('/admin');
        } catch (error) {
            toast.error('Failed to update user information');
            console.error('Update failed:', error);
        }
    };

    const inputFields = [
        { key: 'location' as const, options: locationOptions, placeholder: 'Select location' },
        { key: 'unit' as const, options: unitOptions, placeholder: 'Select unit' },
        { key: 'designation' as const, options: designationOptions, placeholder: 'Select Designation' },
    ];

    return (
        <div className="min-h-screen flex flex-col logingradient-bg w-full">
            <ToastContainer />
            <main className="flex flex-col items-center justify-center flex-1 p-10 mb-6">
                <div className="w-full">
                    <AuthContainer>
                        <h1 className="text-[12px] md:text-[18px] font-semibold text-white">
                            Update Your Info
                        </h1>
                        {isLoading && <span>loading....</span>}
                        {hasError && (
                            <div className="text-red-500 text-sm mb-4">
                                Error loading data. Please try again later.
                            </div>
                        )}
                        <div className="w-full mt-2">
                            <div className="mx-auto space-y-4">
                                {inputFields.map(({ key, options, placeholder }) => (
                                    <CustomInput
                                        key={key}
                                        type="select"
                                        options={options}
                                        value={formData[key]}
                                        handleChangeEvent={handleChange(key)}
                                        placeholder={placeholder}
                                        styleVariant="customStyle1"
                                        icon={<img src={images.email} alt={key} />}
                                    // disabled={isLoading}
                                    />
                                ))}
                            </div>
                            <div className="flex items-center justify-center mt-4">
                                <Button
                                    type="primary"
                                    label="Update"
                                    action={handleSubmit}
                                    color="#FFFFFF"
                                    width="100%"
                                    height="48px"
                                    fontSize="16px"
                                    radius="32px"
                                    disabled={isLoading || !isFormValid()}
                                />
                            </div>
                        </div>
                    </AuthContainer>
                </div>
            </main>
            <footer className="mb-6 mx-6">
                <ContentContainer
                    type="translucent"
                    width="100%"
                    height="30px"
                    borderRadius={32}
                >
                    <div className="flex items-center justify-center w-full h-full">
                        <p className="text-center text-[8px] md:text-[10px] text-[#E3EADA]">
                            This Portal is a Property of NNPC Gas Marketing Limited
                        </p>
                    </div>
                </ContentContainer>
            </footer>
        </div>
    );
};

export default SSOUpdateUser;