// export type Frequency = 'daily' | 'weekly' | 'hourly' | 'monthly' | 'yearly' | 'none';
// export type FrequencyFor = 'users' | 'customers' | 'suppliers' | 'contractors' | 'none';
// export type StepType = 'create' | 'delete' | 'update' | 'approve_auto_assign' | 'approve_manual_assign';
// export type UserType = 'user' | 'supplier' | 'customer' | 'contractor';

// export interface ProcessFlow {
//   id: number;
//   name: string;
//   start_step_id: number | null;
//   frequency: Frequency;
//   status: boolean;
//   frequency_for: FrequencyFor;
//   day: string | null;
//   week: string | null;
//   created_at: string;
//   updated_at: string;
// }

// export interface ProcessFlowStep {
//   id: number;
//   name: string;
//   step_route: string;
//   assignee_user_route: string;
//   next_user_designation: number | null;
//   next_user_department: number | null;
//   next_user_unit: number | null;
//   process_flow_id: number | null;
//   next_user_location: number | null;
//   step_type: StepType;
//   user_type: UserType;
//   next_step_id: number | null;
//   status: boolean;
//   created_at: string;
//   updated_at: string;
// }

// export interface Route {
//   id: number;
//   name: string;
//   link: string;
//   status: boolean;
//   created_at: string;
//   updated_at: string;
// }



export type Frequency = 'daily' | 'weekly' | 'hourly' | 'monthly' | 'yearly' | 'none';
export type FrequencyFor = 'users' | 'customers' | 'suppliers' | 'contractors' | 'none';
export type StepType = 'create' | 'delete' | 'update' | 'approve_auto_assign' | 'approve_manual_assign';
export type UserType = 'user' | 'supplier' | 'customer' | 'contractor';

export interface ProcessFlow {
    id: number;
    name: string;
    start_step_id: number | null;
    frequency: Frequency;
    status: boolean;
    frequency_for: FrequencyFor;
    day: string | null;
    week: string | null;
    steps?: ProcessFlowStep[];
  
}

export interface ProcessFlowStep {
    id: number;
    name: string;
    step_route: string;
    assignee_user_route: string;
    next_user_designation: number | null;
    next_user_department: number | null;
    next_user_unit: number | null;
    process_flow_id: number | null;
    next_user_location: number | null;
    step_type: StepType;
    user_type: UserType;
    next_step_id: number | null;
    status: boolean;
}
