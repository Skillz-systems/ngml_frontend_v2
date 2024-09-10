/* eslint-disable @typescript-eslint/no-explicit-any */
export function resetProcessFlowIds(processFlow: any): any {
  const resetFlow = { ...processFlow };
  
 
  resetFlow.id = null;
  resetFlow.start_step_id = null;

  // Reset ids in steps
  resetFlow.steps = resetFlow.steps.map((step: any) => ({
    ...step,
    id: null,
    process_flow_id: null,
    next_step_id: null
  }));

  return resetFlow;
}
