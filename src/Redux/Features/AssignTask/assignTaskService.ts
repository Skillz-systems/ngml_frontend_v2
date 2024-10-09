import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { api } from '../../api';
 
export interface Task {
    id: number;
    processflow_step: string | null;
    processflow: string | null;
    task_status: string;
    assignment_status: string;
    processflow_history: string | null;
    entity: string;
    entity_site_id: string;
}
 
export interface User {
    id: number;
    name: string;
    email: string;
}
 
export interface TasksData {
    data: Task[];
}
 
export interface UsersData {
    data: User[];
}
 
type ErrorResponse = {
    success: boolean;
    message: string;
};
 
 
// export const sampleTasks: Task[] = [
//   { id: 1, name: 'Implement login page', description: 'Create a responsive login page with form validation', status: 'To Do' },
//   { id: 2, name: 'Design database schema', description: 'Design the database schema for the user management system', status: 'In Progress' },
//   { id: 3, name: 'Write API documentation', description: 'Document all API endpoints using Swagger', status: 'To Do' },
//   { id: 4, name: 'Optimize image loading', description: 'Implement lazy loading for images to improve performance', status: 'To Do' },
//   { id: 5, name: 'Set up CI/CD pipeline', description: 'Configure Jenkins for continuous integration and deployment', status: 'In Progress' },
// ];
 
export const sampleUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com' },
  { id: 4, name: 'Alice Brown', email: 'alice.brown@example.com' },
  { id: 5, name: 'Charlie Davis', email: 'charlie.davis@example.com' },
];
 
export const taskAssignApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getTasks: builder.query<TasksData, void>({
            query: () => '/automator/api/unassignedtasks',
            providesTags: ['Tasks'],
            transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) => {
                const errorResponse: ErrorResponse = baseQueryReturnValue.data as ErrorResponse;
                return errorResponse;
            },
        }),
 
        getUsers: builder.query<UsersData, number>({
            query: (id) => `/automator/api/task-assignable-users/${id}`,
            providesTags: ['Users'],
            transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) => {
                const errorResponse: ErrorResponse = baseQueryReturnValue.data as ErrorResponse;
                return errorResponse;
            },
        }),
 
        assignTask: builder.mutation<{ success: boolean; message: string }, { taskId: number; userId: number }>({
            query: ({ taskId, userId }) => ({
                url: '/automator/api/assign-task-to-user',
                method: 'POST',
                body: { task_Id: taskId, user_Id: userId },
            }),
            invalidatesTags: ['AssignTasks'],
            transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) => {
                const errorResponse: ErrorResponse = baseQueryReturnValue.data as ErrorResponse;
                return errorResponse;
            },
        }),
    }),
 
    overrideExisting: false,
});
 
export const {
    useGetTasksQuery,
    useGetUsersQuery,
    useAssignTaskMutation,
} = taskAssignApi;