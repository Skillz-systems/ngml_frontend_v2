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