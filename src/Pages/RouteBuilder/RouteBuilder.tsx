/* eslint-disable @typescript-eslint/no-explicit-any */



// import { Button, Heading, Modal } from '@/Components';
// import { Route, useCreateRouteMutation, useDeleteRouteMutation, useGetRoutesQuery } from '@/Redux/Features/RouteBuilder/routeService';
// import { getRouteLists } from '@/Routes/Admin';
// import React, { useState } from 'react';
// import { VscSend } from 'react-icons/vsc';

// import { FaTrashCan } from 'react-icons/fa6';
// import { toast } from 'react-toastify';

// // import { useCreateProcessFlowMutation, useGetProcessFlowsQuery } from '@/Redux/Features/ProcessFlow/processFlowService';// Adjust the import path as needed

// const RouteBuilder: React.FC = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [routeName, setRouteName] = useState('');
//     const [routeLink, setRouteLink] = useState('');

//     const { data: routes, isLoading, isError, isSuccess } = useGetRoutesQuery();
//     const [createRoute] = useCreateRouteMutation();
//     const [deleteRoute] = useDeleteRouteMutation();

//     const routeOptions = getRouteLists();

//     const handleCreateRoute = async () => {
//         try {
//             await createRoute({ name: routeName, link: 'https://api.ngml.skillzserver.com' + routeLink, status: 1 }).unwrap();
//             setIsModalOpen(false);
//             setRouteName('');
//             setRouteLink('');
//             if (isSuccess) {
//                 toast.success('route created');
//             }

//         } catch (error) {
//             console.error('Failed to create route:', error);
//         }
//     };

//     const handleDeleteRoute = async (id: number) => {
//         try {
//             await deleteRoute(id).unwrap();
//         } catch (error) {
//             console.error('Failed to delete route:', error);
//         }
//     };

//     return (
//         <div className="flex flex-col h-full w-[100%]">
//             <div className="w-full flex-shrink-0 p-4 flex justify-between items-center rounded-xl">
//                 <Heading size="h6" className='text-nnpcmediumgreen-950 text-center'>Create Routes</Heading>
//                 <div className='gap-3 flex'>
//                     <button
//                         type='button'
//                         onClick={() => setIsModalOpen(true)}
//                         className="px-4 py-2 text-[14px] border flex items-center justify-center gap-1 bg-nnpc-200 font-[500] text-[white] hover:text-white rounded-md hover:bg-nnpc-300 duration-300 ease-out transition-all"
//                     >
//                         <VscSend />
//                         Create
//                     </button>
//                 </div>
//             </div>

//             <div className="w-full bg-nnpc-50/40 rounded-xl p-4">
//                 <h2 className="text-xl font-bold mb-2">Routes</h2>
//                 {isLoading && <p>Loading routes...</p>}
//                 {isError && <p>Error loading routes</p>}
//                 {routes?.data && routes.data.map((route: Route) => (
//                     <div key={route.id} className="w-full mb-2 flex justify-between items-center hover:bg-white duration-300 ease-in transition-all cursor-pointer p-2 rounded-md">
//                         <span className='capitalize font-medium'>{route.name}</span>
//                         <span>{route.link}</span>
//                         <button onClick={() => route.id && handleDeleteRoute(route.id)} className="text-red-500"><FaTrashCan /> <span className='sr-only'>delete</span></button>
//                     </div>
//                 ))}
//             </div>

//             <Modal
//                 isOpen={isModalOpen}
//                 onClose={() => setIsModalOpen(false)}
//                 size='medium'
//                 title='create routes'
//                 subTitle='Add routes to be used in the processflow and tasks'
//                 buttons={[
//                     <div key="modal-buttons" className='flex gap-2 mb-[-10px]'>
//                         <div className='w-[120px]'>
//                             <Button
//                                 type="outline"
//                                 label="Cancel"
//                                 action={() => setIsModalOpen(false)}
//                                 color="#FFFFFF"
//                                 width="100%"
//                                 height="40px"
//                                 fontSize="16px"
//                                 radius="20px"
//                             />
//                         </div>
//                         <div className='w-[260px]'>
//                             <Button
//                                 type="secondary"
//                                 label={isLoading ? 'Creating...' : 'Create Route'}
//                                 action={handleCreateRoute}
//                                 color="#FFFFFF"
//                                 width="100%"
//                                 height="40px"
//                                 fontSize="16px"
//                                 radius="20px"
//                                 disabled={isLoading}
//                             />
//                         </div>
//                     </div>
//                 ]}
//             >
//                 <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 capitalize">Route Name</label>
//                     <input
//                         id="name"
//                         type="text"
//                         name="name"
//                         value={routeName}
//                         onChange={(e) => setRouteName(e.target.value)}
//                         className="mt-1 block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-nnpc-200 focus:border-nnpc-200 p-2.5"
//                     />
//                     <label htmlFor="link" className="block text-sm font-medium text-gray-700 capitalize">Route</label>
//                     <select
//                         id="link"
//                         name="link"
//                         value={routeLink}
//                         onChange={(e) => setRouteLink(e.target.value)}
//                         className="mt-1 block w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-nnpc-200 focus:nnpc-300 p-2.5"
//                     >
//                         <option value="">Select a route</option>
//                         {Object.entries(routeOptions).map(([label, path]) => (
//                             <option key={path} value={path}>
//                                 {label.replace(/_/g, ' ')}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             </Modal>
//         </div>
//     );
// };

import { Button, Heading, Modal } from '@/Components';
import { useCreateRouteMutation, useDeleteRouteMutation, useGetRoutesQuery } from '@/Redux/Features/RouteBuilder/routeService';
import { getRouteLists } from '@/Routes/Admin';
import { ArrowBack } from '@mui/icons-material';

import { useState } from 'react';
import { FaTrashCan } from 'react-icons/fa6';
import { VscSend } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const RouteBuilder = () => {
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
            <Link to={'/admin/settings'}>
                <div className='flex justify-center items-center border-2 h-[32px] w-[32px] rounded-[50%]'>
                    <ArrowBack color="success" style={{ fontSize: 'medium' }} />
                </div>
            </Link>

            <div className="flex flex-col h-full w-full bg-gray-100 p-6 rounded-xl mt-4">
                <div className="flex justify-between items-center mb-6">
                    <Heading size="h4" className="text-nnpcmediumgreen-950">Route Builder</Heading>
                    <Button
                        type="secondary"
                        label="Create Route"
                        action={() => setIsModalOpen(true)}
                        icon={<VscSend className="mr-2" />}
                        className="px-4 py-2 text-sm"
                    />
                </div>

                <div className="bg-white rounded-xl p-6">
                    <h2 className="text-2xl font-bold mb-4 text-nnpcmediumgreen-950">Existing Routes</h2>
                    {isLoading && <p className="text-gray-600">Loading routes...</p>}
                    {isError && <p className="text-red-500">Error loading routes</p>}
                    {routes?.data && (
                        <div className="space-y-2">
                            {routes.data.map((route) => (
                                <div key={route.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300">
                                    <span className="capitalize font-medium text-gray-800">{route.name}</span>
                                    <span className="text-gray-600 truncate max-w-md">{route.link}</span>
                                    <Button
                                        type="tertiary"
                                        label={deletingRouteId === route.id ? 'Deleting...' : 'Delete'}
                                        // action={() => handleDeleteRoute(route?.id)}
                                        action={() => route?.id !== undefined ? handleDeleteRoute(route.id) : undefined}
                                        icon={<FaTrashCan />}
                                        className="px-3 py-1 text-sm rounded-lg space-x-2"
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
                    title='Create Routes'
                    subTitle='Add routes to be used in the processflow and tasks'
                    buttons={[
                        <div key="modal-buttons" className='flex gap-2 mb-[-10px]'>
                            <div className='w-[120px]'>
                                <Button
                                    type="outline"
                                    label="Cancel"
                                    action={() => setIsModalOpen(false)}
                                    color="#FFFFFF"
                                    width="100%"
                                    height="40px"
                                    fontSize="16px"
                                    radius="20px"
                                />
                            </div>
                            <div className='w-[260px]'>
                                <Button
                                    type="secondary"
                                    label={creating ? 'Creating...' : 'Create Route'}
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
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 capitalize">Route Name</label>
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

export default RouteBuilder;
