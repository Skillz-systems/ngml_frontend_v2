import { Button, Heading, Modal } from '@/Components';
import { useCreateHeadOfUnitMutation, useDeleteHeadOfUnitMutation, useGetHeadsOfUnitQuery, useUpdateHeadOfUnitMutation } from '@/Redux/Features/HeadofUnit/headofUnitService';
import { ArrowBack } from '@mui/icons-material';
import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
// import { FaEdit, FaTrashCan } from 'react-icons/fa';
import { VscSend } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import sampleData from './sampleData.json';

interface HeadOfUnit {
    id: number;
    name: string;
    email: string;
    department: string;
}


const HeadofUnits: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentUnit, setCurrentUnit] = useState<HeadOfUnit | null>(null);
    const [headsOfUnit] = useState<HeadOfUnit[]>(sampleData.data);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');

    const { isLoading } = useGetHeadsOfUnitQuery();
    const [createHeadOfUnit, { isLoading: isCreating }] = useCreateHeadOfUnitMutation();
    const [updateHeadOfUnit, { isLoading: isUpdating }] = useUpdateHeadOfUnitMutation();
    const [deleteHeadOfUnit, { isLoading: isDeleting }] = useDeleteHeadOfUnitMutation();

    const handleOpenModal = (unit?: HeadOfUnit) => {
        if (unit) {
            setIsEditMode(true);
            setCurrentUnit(unit);
            setName(unit.name);
            setEmail(unit.email);
            setDepartment(unit.department);
        } else {
            setIsEditMode(false);
            setCurrentUnit(null);
            setName('');
            setEmail('');
            setDepartment('');
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setIsEditMode(false);
        setCurrentUnit(null);
        setName('');
        setEmail('');
        setDepartment('');
    };

    const handleSubmit = async () => {
        try {
            if (isEditMode && currentUnit) {
                await updateHeadOfUnit({ id: currentUnit.id, name, email, department }).unwrap();
                toast.success('Head of Unit updated successfully');
            } else {
                await createHeadOfUnit({ name, email, department }).unwrap();
                toast.success('Head of Unit created successfully');
            }
            handleCloseModal();
        } catch (error) {
            console.error('Failed to save Head of Unit:', error);
            toast.error('Failed to save Head of Unit');
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteHeadOfUnit(id).unwrap();
            toast.success('Head of Unit deleted successfully');
        } catch (error) {
            console.error('Failed to delete Head of Unit:', error);
            toast.error('Failed to delete Head of Unit');
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <Link to={'/admin/settings'}>
                <div className='flex justify-center items-center border-2 h-[32px] w-[32px] rounded-[50%] mb-4'>
                    <ArrowBack color="success" style={{ fontSize: 'medium' }} />
                </div>
            </Link>

            <div className="bg-white rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                    <Heading size="h4" className="text-nnpcmediumgreen-950">Head of Unit Management</Heading>
                    <Button
                        type="secondary"
                        label="Add Head of Unit"
                        action={() => handleOpenModal()}
                        icon={<VscSend className="mr-2" />}
                        className="px-4 py-2 text-sm rounded-full"
                    />
                </div>

                {isLoading && <p className="text-gray-600">Loading heads of unit...</p>}
                {/* {isError && <p className="text-red-500">Error loading heads of unit</p>} */}
                {headsOfUnit && (
                    <div className="space-y-4">
                        {headsOfUnit?.map((unit: HeadOfUnit) => (
                            <div key={unit.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300">
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-800">{unit.name}</h3>
                                    <p className="text-gray-600">{unit.email}</p>
                                    <p className="text-gray-500 text-sm">{unit.department}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <Button
                                        type="secondary"
                                        label="Edit"
                                        action={() => handleOpenModal(unit)}
                                        icon={<FaEdit />}
                                        className="px-3 py-1 text-sm rounded-full"
                                    />
                                    <Button
                                        type="tertiary"
                                        label="Delete"
                                        action={() => handleDelete(unit.id)}
                                        icon={<FaTrash />}
                                        className="px-3 py-1 text-sm rounded-full"
                                        disabled={isDeleting}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                size="medium"
                title={isEditMode ? 'Edit Head of Unit' : 'Add Head of Unit'}
                subTitle={isEditMode ? 'Update the details of the Head of Unit' : 'Enter the details for the new Head of Unit'}
                buttons={[
                    <div key="modal-buttons" className="flex gap-2">
                        <div className='w-[120px]'>

                            <Button
                                type="outline"
                                label="Cancel"
                                action={handleCloseModal}
                                className='rounded-full'

                                color="#FFFFFF"
                                width="100%"
                                height="40px"
                                fontSize="16px"
                                radius="20px"
                            />
                        </div>
                        <div className='w-[140px]'>

                            <Button
                                type="secondary"
                                label={isEditMode ? (isUpdating ? 'Updating...' : 'Update') : (isCreating ? 'Creating...' : 'Create')}
                                action={handleSubmit}
                                className='rounded-full'
                                width="100%"
                                height="40px"
                                fontSize="16px"
                                radius="20px"
                                disabled={isCreating || isUpdating}
                            />
                        </div>
                    </div>
                ]}
            >
                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-nnpc-200 focus:border-nnpc-200 p-2.5"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-nnpc-200 focus:border-nnpc-200 p-2.5"
                        />
                    </div>
                    <div>
                        <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
                        <input
                            id="department"
                            type="text"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            className="mt-1 block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-nnpc-200 focus:border-nnpc-200 p-2.5"
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default HeadofUnits;



// import { Button, Heading, Modal } from '@/Components';
// import { useCreateHeadOfUnitMutation, useGetHeadsOfUnitQuery } from '@/Redux/Features/HeadofUnit/headofUnitService';
// import { useGetLocationsQuery } from '@/Redux/Features/UserSettings/locationService';
// import { useGetAllStaffQuery } from '@/Redux/Features/UserSettings/staffService';
// import { useGetUnitsQuery } from '@/Redux/Features/UserSettings/unitService';
// import { ArrowBack } from '@mui/icons-material';
// import { useState } from 'react';
// import { FaTrashCan } from 'react-icons/fa6';
// import { VscSend } from 'react-icons/vsc';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const HeadofUnits = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [formData, setFormData] = useState({
//         user_id: '',
//         unit_id: '',
//         location_id: '',
//         status: '1'
//     });
//     const [deletingUnitId, setDeletingUnitId] = useState<number | null>(null);

//     const handleChange = (key: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//         const target = event.target;

//         if (target instanceof HTMLInputElement && (target.type === 'checkbox' || target.type === 'radio')) {
//             setFormData({ ...formData, [key]: target.checked });
//         } else {
//             setFormData({ ...formData, [key]: target.value });
//         }
//     };

//     const { data: locations } = useGetLocationsQuery();
//     const { data: units } = useGetUnitsQuery();
//     const { data: staff, isLoading: staffLoading, isError: staffError } = useGetAllStaffQuery();
//     const [createHeadOfUnit, { isLoading: creating }] = useCreateHeadOfUnitMutation();
//     const { data: heads } = useGetHeadsOfUnitQuery();

//     const handleCreate = async () => {
//         try {
//             await createHeadOfUnit(formData).unwrap();
//             setIsModalOpen(false);
//             toast.success('Unit head assigned successfully');
//             setFormData({ user_id: '', location_id: '', unit_id: '', status: '1' });
//         } catch (error) {
//             console.error('Failed to create route:', error);
//             toast.error('Failed to assign unit head');
//         }
//     };

//     const handleDelete = async (id: number) => {
//         setDeletingUnitId(id);
//         try {
//             // Uncomment and implement the actual delete function
//             toast.success('Unit deleted successfully: ' + id);
//         } catch (error) {
//             console.error('Failed to delete unit:', error);
//         } finally {
//             setDeletingUnitId(null);
//         }
//     };

//     // const headIds = heads?.data.map(head => head.user_id) || [];


//     const getLocationName = (locationId: string) => {
//         const location = locations?.data.find(loc => loc.id?.toString() === locationId);
//         return location ? location.location.replace(/_/g, ' ') : 'Unknown Location';
//     };

//     const getUnitName = (unitId: string) => {
//         const unit = units?.data.find(u => u.id?.toString() === unitId);
//         return unit ? unit.name.replace(/_/g, ' ') : 'Unknown Unit';
//     };


//     return (
//         <div className="min-h-screen">
//             <Link to={'/admin/settings'}>
//                 <div className='flex justify-center items-center border-2 h-[32px] w-[32px] rounded-[50%] mb-4'>
//                     <ArrowBack color="success" style={{ fontSize: 'medium' }} />
//                 </div>
//             </Link>

//             <div className="flex flex-col h-full w-full bg-gray-100 p-6 rounded-xl mt-4">
//                 <div className="flex justify-between items-center mb-6">
//                     <Heading size="h4" className="text-nnpcmediumgreen-950">Unit Heads</Heading>
//                     <Button
//                         type="secondary"
//                         label="Assign unit Heads"
//                         action={() => setIsModalOpen(true)}
//                         icon={<VscSend className="mr-2" />}
//                         className="px-4 py-2 text-sm rounded-full"
//                     />
//                 </div>

//                 <div className="bg-white rounded-xl p-6">
//                     {staffLoading && <p className="text-gray-600">Loading ...</p>}
//                     {staffError && <p className="text-red-500">Error loading...</p>}

//                     {/* {Array.isArray(staff?.data?.data) && (
//                         <div className="space-y-2">
//                             {staff.data.data
//                                 .filter(item => headIds.includes(item.id?.toString() || ''))
//                                 .map(item => (
//                                     <div key={item.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300">
//                                         <div>
//                                             <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
//                                             <p className="text-gray-600">{item.email}</p>

//                                         </div>
//                                         <div className="flex space-x-2">
//                                             <Button
//                                                 type="tertiary"
//                                                 label={deletingUnitId === item.id ? 'Deleting...' : 'Delete'}
//                                                 action={() => item.id !== undefined ? handleDelete(item.id) : undefined}
//                                                 icon={<FaTrashCan />}
//                                                 className="px-3 py-1 text-sm rounded-full space-x-2"
//                                                 disabled={deletingUnitId === item.id}
//                                             />
//                                         </div>
//                                     </div>
//                                 ))}
//                         </div>
//                     )} */}

//                     {Array.isArray(heads?.data) && (
//                         <div className="space-y-2">
//                             {heads.data.map(head => {
//                                 const staffMember = staff?.data?.data.find(item => item.id?.toString() === head.user_id);
//                                 return (
//                                     <div key={head.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300">

//                                         <div className="flex">

//                                             <div>
//                                                 <h3 className="font-semibold text-lg text-gray-800">{staffMember?.name}</h3>
//                                                 <p className="text-gray-600">{staffMember?.email}</p>


//                                             </div>
//                                             <div className="">


//                                                 <p className="text-gray-500">Unit: {getUnitName(head.unit_id)}</p>
//                                                 <p className="text-gray-500">Location: {getLocationName(head.location_id)}</p>
//                                             </div>
//                                         </div>
//                                         <div className="flex space-x-2">
//                                             <Button
//                                                 type="tertiary"
//                                                 label={deletingUnitId === head.id ? 'Deleting...' : 'Delete'}
//                                                 action={() => head.id !== undefined ? handleDelete(head.id) : undefined}
//                                                 icon={<FaTrashCan />}
//                                                 className="px-3 py-1 text-sm rounded-full space-x-2"
//                                                 disabled={deletingUnitId === head.id}
//                                             />
//                                         </div>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     )}
//                 </div>

//                 <Modal
//                     isOpen={isModalOpen}
//                     onClose={() => setIsModalOpen(false)}
//                     size='medium'
//                     title='Assign Unit Heads'
//                     subTitle='Manage all unit heads to be used in user settings'
//                     buttons={[
//                         <div key="modal-buttons" className='flex gap-2 mb-[-10px]'>
//                             <div className='w-[120px]'>
//                                 <Button
//                                     action={() => setIsModalOpen(false)}
//                                     className='rounded-full'
//                                     type="outline"
//                                     label="Cancel"
//                                     color="#FFFFFF"
//                                     width="100%"
//                                     height="40px"
//                                     fontSize="16px"
//                                     radius="20px"
//                                 />
//                             </div>
//                             <div className='w-[260px]'>
//                                 <Button
//                                     className='rounded-full'
//                                     type="secondary"
//                                     label={creating ? 'Assigning...' : 'Assign Unit Head'}
//                                     action={handleCreate}
//                                     color="#FFFFFF"
//                                     width="100%"
//                                     height="40px"
//                                     fontSize="16px"
//                                     radius="20px"
//                                     disabled={creating}
//                                 />
//                             </div>
//                         </div>
//                     ]}
//                 >
//                     <div className="space-y-2">
//                         <div>
//                             <label htmlFor="user_id" className="block text-sm font-medium text-gray-700 capitalize">Users</label>
//                             <select
//                                 id="user_id"
//                                 name="user_id"
//                                 value={formData.user_id}
//                                 onChange={handleChange('user_id')}
//                                 className="mt-1 block w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-nnpc-200 focus:border-nnpc-200 p-2.5"
//                             >
//                                 <option>Select user</option>
//                                 {Array.isArray(staff?.data?.data) && staff.data.data?.map((aStaff) => (
//                                     <option key={aStaff.id} value={aStaff.id}>
//                                         {aStaff.name.replace(/_/g, ' ')}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>

//                         <div>
//                             <label htmlFor="unit_id" className="block text-sm font-medium text-gray-700 capitalize">Unit</label>
//                             <select
//                                 id="unit_id"
//                                 name="unit_id"
//                                 value={formData.unit_id}
//                                 onChange={handleChange('unit_id')}
//                                 className="mt-1 block w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-nnpc-200 focus:border-nnpc-200 p-2.5"
//                             >
//                                 <option>Select unit</option>
//                                 {Array.isArray(units?.data) && units.data.map((unit) => (
//                                     <option key={unit.id} value={unit.id}>
//                                         {unit.name.replace(/_/g, ' ')}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>

//                         <div>
//                             <label htmlFor="location_id" className="block text-sm font-medium text-gray-700 capitalize">Location</label>
//                             <select
//                                 id="location_id"
//                                 name="location_id"
//                                 value={formData.location_id}
//                                 onChange={handleChange('location_id')}
//                                 className="mt-1 block w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-nnpc-200 focus:border-nnpc-200 p-2.5"
//                             >
//                                 <option>Select a location</option>
//                                 {Array.isArray(locations?.data) && locations.data.map((location) => (
//                                     <option key={location.id} value={location.id}>
//                                         {location.location.replace(/_/g, ' ')}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>
//                     </div>
//                 </Modal>
//             </div>
//         </div>
//     );
// };

// export default HeadofUnits;



const HeadOld = () => {
    return (
        <div>HeadOld</div>
    )
}

export default HeadOld

