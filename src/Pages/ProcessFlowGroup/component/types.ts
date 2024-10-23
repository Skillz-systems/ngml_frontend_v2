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

export type Frequency =
  | 'daily'
  | 'weekly'
  | 'hourly'
  | 'monthly'
  | 'yearly'
  | 'none';
export type FrequencyFor =
  | 'users'
  | 'customers'
  | 'suppliers'
  | 'contractors'
  | 'none';
export type StepType =
  | 'create'
  | 'delete'
  | 'update'
  | 'approve_auto_assign'
  | 'approve_manual_assign';
export type UserType = 'user' | 'supplier' | 'customer' | 'contractor';

export interface ProcessFlow {
  id: number;
  name: string;
  start_step_id: number | null;
  start_user_designation?: string | null;
  start_user_department?: string | null;
  start_user_unit?: string | null;
  frequency: Frequency;
  status: boolean;
  frequency_for: FrequencyFor;
  day: string | null;
  week: string | null;
  steps?: ProcessFlowStep[];
}

export interface ProcessFlowStep {
  // id: number|string|null;
  //   name: string;
  //   step_route?: string|null;
  //   assignee_user_route?: string|null;
  //   next_user_designation?: string; // Changed from number | null to string | undefined
  //   next_user_department?: string;
  //   next_user_unit?: string;
  //   process_flow_id?: null;
  //   next_user_location?: null;
  //   step_type?: string;
  //   user_type?: string;
  //   next_step_id?: number | null;
  //   status: boolean;

  id: number;
  name: string;
  step_route: string;
  assignee_user_route: string;
  next_user_designation: string | null;
  next_user_department: string | null;
  next_user_unit: string | null;
  process_flow_id: string | null;
  next_user_location: string | null;
  step_type: StepType;
  user_type: UserType;
  next_step_id: number | null;
  status: boolean;
}
