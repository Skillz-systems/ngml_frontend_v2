/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Heading, Modal } from '@/Components';
import { useCreateRouteMutation, useDeleteRouteMutation, useGetRoutesQuery } from '@/Redux/Features/RouteBuilder/routeService';
import { getRouteLists } from '@/Routes/Admin';

import { useState } from 'react';
import { FaTrashCan } from 'react-icons/fa6';
import { VscSend } from 'react-icons/vsc';
import { toast } from 'react-toastify';

const Unit = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [routeName, setRouteName] = useState('');
    const [routeLink, setRouteLink] = useState('');
    const [deletingRouteId, setDeletingRouteId] = useState<number | null>(null);

    const { data: routes, isLoading, isError } = useGetRoutesQuery();
    const [createRoute, { isLoading: creating }] = useCreateRouteMutation();
    const [deleteRoute] = useDeleteRouteMutation();

    const routeOptions = getRouteLists();

    // Handles creation of a new route
    const handleCreateRoute = async () => {
        try {
            await createRoute({
                name: routeName,
                link: `https://api.ngml.skillzserver.com${routeLink}`,
                status: 1
            }).unwrap();
            setIsModalOpen(false);
            setRouteName('');
            setRouteLink('');
            toast.success('Route created successfully');
        } catch (error) {
            console.error('Failed to create route:', error);
            toast.error('Failed to create route');
        }
    };

    // Handles deletion of a route
    const handleDeleteRoute = async (id: number) => {
        setDeletingRouteId(id);
        try {
            await deleteRoute(id).unwrap();
            toast.success('Route deleted successfully');
        } catch (error) {
            console.error('Failed to delete route:', error);
            toast.error('Failed to delete route');
        } finally {
            setDeletingRouteId(null);
        }
    };

    return (
        <div className="">

            <div className="flex flex-col h-full w-full bg-gray-100 p-6 rounded-xl mt-4">
                <div className="flex justify-between items-center mb-6">
                    <Heading size="h4" className="text-nnpcmediumgreen-950">Units</Heading>
                    <Button
                        type="secondary"
                        label="Create Unit"
                        action={() => setIsModalOpen(true)}
                        icon={<VscSend className="mr-2" />}
                        className="px-4 py-2 text-sm rounded-full"
                    />
                </div>

                <div className="bg-white rounded-xl p-6">
                    {/* <h2 className="text-2xl font-bold mb-4 text-nnpcmediumgreen-950">Existing</h2> */}
                    {isLoading && <p className="text-gray-600">Loading units...</p>}
                    {isError && <p className="text-red-500">Error loading unts</p>}
                    {routes?.data && (
                        <div className="space-y-2">
                            {routes.data.map((route) => (
                                <div key={route.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300">
                                    <span className="capitalize font-medium text-gray-800">{route.name}</span>
                                    {/* <span className="text-gray-600 truncate max-w-md">{route.link}</span> */}
                                    <Button
                                        type="tertiary"
                                        label={deletingRouteId === route.id ? 'Deleting...' : 'Delete'}
                                        // action={() => handleDeleteRoute(route?.id)}
                                        action={() => route?.id !== undefined ? handleDeleteRoute(route.id) : undefined}
                                        icon={<FaTrashCan />}
                                        className="px-3 py-1 text-sm rounded-full space-x-2"
                                        disabled={deletingRouteId === route.id}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    size='medium'
                    title='Create Units'
                    subTitle='Add units to be used in user settings'
                    buttons={[
                        <div key="modal-buttons" className='flex gap-2 mb-[-10px]'>
                            <div className='w-[120px]'>
                                <Button
                                    action={() => setIsModalOpen(false)}
                                    className='rounded-full'
                                    type="outline"
                                    label="Cancel"
                                    color="#FFFFFF"
                                    width="100%"
                                    height="40px"
                                    fontSize="16px"
                                    radius="20px"
                                />
                            </div>
                            <div className='w-[260px]'>
                                <Button
                                    className='rounded-full'
                                    type="secondary"
                                    label={creating ? 'Creating...' : 'Create Unit'}
                                    action={handleCreateRoute}
                                    color="#FFFFFF"
                                    width="100%"
                                    height="40px"
                                    fontSize="16px"
                                    radius="20px"
                                    disabled={creating}
                                />
                            </div>
                        </div>
                    ]}
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 capitalize">Unit Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={routeName}
                            onChange={(e) => setRouteName(e.target.value)}
                            className="mt-1 block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-nnpc-200 focus:border-nnpc-200 p-2.5"
                        />
                        <label htmlFor="link" className="block text-sm font-medium text-gray-700 capitalize">Route</label>
                        <select
                            id="link"
                            name="link"
                            value={routeLink}
                            onChange={(e) => setRouteLink(e.target.value)}
                            className="mt-1 block w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-nnpc-200 focus:border-nnpc-200 p-2.5"
                        >
                            <option value="">Select a route</option>
                            {Object.entries(routeOptions).map(([label, path]) => (
                                <option key={path} value={path}>
                                    {label.replace(/_/g, ' ')}
                                </option>
                            ))}
                        </select>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default Unit;
