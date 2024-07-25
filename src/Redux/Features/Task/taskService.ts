import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { api } from '../../api';

type Task = {
  description: string | undefined;
  id: number;
  user_id: number;
  title: string;
  route: string;
  start_time: string;
  end_time: string;
  task_status: boolean;
}

type TaskResponse = {
  map(arg0: (activity: any, index: number) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  data: Task[] | [];
}

type ErrorResponse = {
  error: string;
};

type TasksQueryParams = {
  userId: number;
};

export const notificationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    tasks: builder.query<TaskResponse, TasksQueryParams>({
      query: ({ userId }) => ({
        url: `/notification/api/tasks/${userId}`,
        method: 'GET',
      }),
      transformResponse: (response: TaskResponse | ErrorResponse) => {
        if ('error' in response) {
          throw new Error(response.error);
        }
        return response;
      },
      transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) => {
        const errorResponse: ErrorResponse =
          baseQueryReturnValue.data as ErrorResponse;
        return errorResponse;
      },
     
    }),  
  }),
//   overrideExisting:false
});

export const { useTasksQuery } = notificationApi;