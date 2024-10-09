import { Button, Heading, Modal } from '@/Components';
import { Task, User, useAssignTaskMutation, useGetTasksQuery, useGetUsersQuery } from '@/Redux/Features/AssignTask/assignTaskService';
import { ArrowBack } from '@mui/icons-material';
import React, { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const TaskAssign: React.FC = () => {
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data: tasks, isLoading: tasksLoading } = useGetTasksQuery();
    const { data: users, isLoading: usersLoading } = useGetUsersQuery();
    const [assignTask, { isLoading: assigningTask }] = useAssignTaskMutation();

    const handleAssignTask = async (userId: number) => {
        if (selectedTask) {
            try {
                await assignTask({ taskId: selectedTask.id, userId }).unwrap();
                toast.success('Task assigned successfully');
                setIsModalOpen(false);
            } catch (error) {
                console.log(error);
                toast.error('Failed to assign task');
            }
        }
    };

    return (
        <div className="">
            <Link to={'/admin/settings'}>
                <div className='flex justify-center items-center border-2 h-[32px] w-[32px] rounded-[50%]'>
                    <ArrowBack color="success" style={{ fontSize: 'medium' }} />
                </div>
            </Link>

            <div className="flex flex-col h-full w-full bg-gray-100 p-6 mt-4 rounded-lg">
                <Heading size="h4" className="text-nnpcmediumgreen-950 mb-6">Task Assignment</Heading>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tasksLoading ? (
                        <p className="col-span-full text-center">Loading tasks...</p>
                    ) : (
                        tasks?.data.map((task: Task) => (
                            <div key={task.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-lg font-semibold mb-2">{task.name}</h3>
                                <p className="text-gray-600 mb-4">{task.description}</p>
                                <p className="text-sm text-gray-500 mb-4">Status: {task.status}</p>
                                <Button
                                    type="secondary"
                                    label="Assign Task"
                                    action={() => {
                                        setSelectedTask(task);
                                        setIsModalOpen(true);
                                    }}
                                    icon={<FaUserPlus className="mr-2" />}
                                    color="#FFFFFF"
                                    width="100%"
                                    height="40px"
                                    fontSize="14px"
                                    radius="20px"
                                />
                            </div>
                        ))
                    )}
                </div>

                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    size="large"
                    title="Assign Task"
                    subTitle={`Assign "${selectedTask?.name}" to a user`}
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
                        </div>
                    ]}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {usersLoading ? (
                            <p className="col-span-full text-center">Loading users...</p>
                        ) : (
                            users?.data.map((user: User) => (
                                <div key={user.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                                    <div>
                                        <p className="font-medium">{user.name}</p>
                                        <p className="text-sm text-gray-500">{user.email}</p>
                                    </div>
                                    <Button
                                        type="outline"
                                        label="Assign"
                                        action={() => handleAssignTask(user.id)}
                                        color="#4CAF50"
                                        width="80px"
                                        height="32px"
                                        fontSize="14px"
                                        radius="16px"
                                        disabled={assigningTask}
                                    />
                                </div>
                            ))
                        )}
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default TaskAssign;