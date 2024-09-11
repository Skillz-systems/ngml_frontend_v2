// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { ProcessFlow, ProcessFlowStep } from '../../../Pages/ProcessFlowGroup/component/types';
// import { RootState } from '../../store';

// interface ProcessFlowState {
//   processFlows: ProcessFlow[];
//   selectedFlow: ProcessFlow | null;
//   steps: ProcessFlowStep[];
// }

// const initialState: ProcessFlowState = {
//   processFlows: [],
//   selectedFlow: null,
//   steps: [],
// };

// const processFlowSlice = createSlice({
//   name: 'processFlow',
//   initialState,
//   reducers: {
//     setProcessFlows: (state, action: PayloadAction<ProcessFlow[]>) => {
//       state.processFlows = action.payload;
//     },
//     selectProcessFlow: (state, action: PayloadAction<ProcessFlow>) => {
//       state.selectedFlow = action.payload;
//       state.steps = action.payload.steps || [];
//     },
//     addProcessFlow: (state, action: PayloadAction<ProcessFlow>) => {
//       state.processFlows.push(action.payload);
//     },
//     updateProcessFlow: (state, action: PayloadAction<ProcessFlow>) => {
//       const index = state.processFlows.findIndex(flow => flow.id === action.payload.id);
//       if (index !== -1) {
//         state.processFlows[index] = action.payload;
//       }
//       state.selectedFlow = action.payload;
//     },
//     deleteProcessFlow: (state, action: PayloadAction<number>) => {
//       state.processFlows = state.processFlows.filter(flow => flow.id !== action.payload);
//       state.selectedFlow = null;
//       state.steps = [];
//     },
//     addStep: (state, action: PayloadAction<ProcessFlowStep>) => {
//       state.steps.push(action.payload);
//     },
//     updateStep: (state, action: PayloadAction<ProcessFlowStep>) => {
//       const index = state.steps.findIndex(step => step.id === action.payload.id);
//       if (index !== -1) {
//         state.steps[index] = action.payload;
//       }
//     },
//     deleteStep: (state, action: PayloadAction<number>) => {
//       state.steps = state.steps.filter(step => step.id !== action.payload);
//     },
//     clearSelectedFlow: (state) => {
//       state.selectedFlow = null;
//       state.steps = [];
//     }
//   },
// });

// export const {
//   setProcessFlows,
//   selectProcessFlow,
//   addProcessFlow,
//   updateProcessFlow,
//   deleteProcessFlow,
//   addStep,
//   updateStep,
//   deleteStep,
//   clearSelectedFlow,
// } = processFlowSlice.actions;

// export const selectProcessFlows = (state: RootState) => state.processFlow.processFlows;
// export const selectSelectedFlow = (state: RootState) => state.processFlow.selectedFlow;
// export const selectSteps = (state: RootState) => state.processFlow.steps;

// export default processFlowSlice.reducer;
