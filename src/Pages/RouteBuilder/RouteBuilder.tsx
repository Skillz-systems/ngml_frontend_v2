/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { PlusCircle, Trash2, Plus, X } from 'lucide-react';
// import { addFieldToStep, addStep, removeFieldFromStep, removeStep, updateField } from '@/Redux/Features/RouteBuilder/RouteBuilderService';
// import { Link } from 'react-router-dom';
// import { ArrowBack } from '@mui/icons-material';


// const RouteBuilder: React.FC = () => {
//     const dispatch = useDispatch();
//     const steps = useSelector((state: any) => state.routeBuilder.steps);

//     const [newFieldName, setNewFieldName] = useState('');

//     const handleAddStep = () => {
//         dispatch(addStep());
//     };

//     const handleUpdateField = (stepId: string, fieldId: string, value: string) => {
//         dispatch(updateField({ stepId, fieldId, value }));
//     };

//     const handleAddFieldToStep = (stepId: string) => {
//         if (!newFieldName.trim()) return;
//         dispatch(addFieldToStep({ stepId, fieldName: newFieldName }));
//         setNewFieldName('');
//     };

//     const handleRemoveFieldFromStep = (stepId: string, fieldId: string) => {
//         dispatch(removeFieldFromStep({ stepId, fieldId }));
//     };

//     const handleRemoveStep = (id: string) => {
//         dispatch(removeStep(id));
//     };

//     return (
//         <div>
//             <Link to={'/admin/settings'}>
//                 <div className='flex justify-center items-center border-2 h-[32px] w-[32px] rounded-[50%]'>
//                     <ArrowBack color="success" style={{ fontSize: 'medium' }} />
//                 </div>
//             </Link>
//             <div className="text-[28px] font-bold mb-4 mt-4"> Route Builder</div>

//             <div className="max-w-2xl mx-auto p-4">
//                 {steps.map((step, index) => (
//                     <div key={step.id} className="mb-6 p-4 border rounded-lg shadow-sm">
//                         <div className="flex justify-between items-center mb-2">
//                             <span className="font-semibold">Step {index + 1}</span>
//                             <button
//                                 onClick={() => handleRemoveStep(step.id)}
//                                 className="text-red-500 hover:text-red-700"
//                             >
//                                 <Trash2 size={20} />
//                             </button>
//                         </div>
//                         {step.fields.map(field => (
//                             <div key={field.id} className="mb-2 flex items-center ">
//                                 <input
//                                     type="text"
//                                     value={field.value}
//                                     onChange={(e) => handleUpdateField(step.id, field.id, e.target.value)}
//                                     placeholder={field.name}
//                                     className="flex-grow p-2 border rounded mr-2 outline-none "
//                                 />
//                                 {field.id !== 'name' && field.id !== 'address' && (
//                                     <button
//                                         onClick={() => handleRemoveFieldFromStep(step.id, field.id)}
//                                         className="text-red-500 hover:text-red-700 outline-none "
//                                     >
//                                         <X size={20} />
//                                     </button>
//                                 )}
//                             </div>
//                         ))}
//                         <div className="mt-2 flex">
//                             <input
//                                 type="text"
//                                 value={newFieldName}
//                                 onChange={(e) => setNewFieldName(e.target.value)}
//                                 placeholder="New field name"
//                                 className="flex-grow p-2 border rounded-l outline-none "
//                             />
//                             <button
//                                 onClick={() => handleAddFieldToStep(step.id)}
//                                 className="bg-[#285C2B] text-white p-2 rounded-r hover:bg-green-600"
//                             >
//                                 <Plus size={20} />
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//                 <button
//                     onClick={handleAddStep}
//                     className="flex items-center justify-center w-full p-2 mt-4 bg-[#285C2B] text-white rounded hover:bg-[#4FA731]"
//                 >
//                     <PlusCircle size={20} className="mr-2" />
//                     Add Step
//                 </button>
//             </div></div>

//     );
// };

// export default RouteBuilder;




















// import { addFieldToStep, addStep, removeFieldFromStep, removeStep, updateField } from '@/Redux/Features/RouteBuilder/RouteBuilderService';
// import { ArrowBack } from '@mui/icons-material';
// import { Plus, PlusCircle, Trash2, X } from 'lucide-react';
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';


// const RouteBuilder: React.FC = () => {
//     const dispatch = useDispatch();
//     const steps = useSelector((state: any) => state.routeBuilder.steps);

//     const [newFieldNames, setNewFieldNames] = useState<{ [key: string]: string }>({});


//     const handleAddStep = () => {
//         dispatch(addStep());
//     };

//     const handleUpdateField = (stepId: string, fieldId: string, value: string) => {
//         dispatch(updateField({ stepId, fieldId, value }));
//     };

//     const handleAddFieldToStep = (stepId: string) => {
//         if (!newFieldNames[stepId]?.trim()) return;
//         dispatch(addFieldToStep({ stepId, fieldName: newFieldNames[stepId] }));
//         setNewFieldNames(prev => ({ ...prev, [stepId]: '' }));
//     };

//     const handleRemoveFieldFromStep = (stepId: string, fieldId: string) => {
//         dispatch(removeFieldFromStep({ stepId, fieldId }));
//     };

//     const handleRemoveStep = (id: string) => {
//         dispatch(removeStep(id));
//     };

//     return (
//         <div>
//             <Link to={'/admin/settings'}>
//                 <div className='flex justify-center items-center border-2 h-[32px] w-[32px] rounded-[50%]'>
//                     <ArrowBack color="success" style={{ fontSize: 'medium' }} />
//                 </div>
//             </Link>
//             <div className="text-[28px] font-bold mb-4 mt-4"> Route Builder</div>

//             <div className="max-w-2xl mx-auto p-4">
//                 {steps.map((step, index) => (
//                     <div key={step.id} className="mb-6 p-4 border rounded-lg shadow-sm">
//                         <div className="flex justify-between items-center mb-2">
//                             <span className="font-semibold">Step {index + 1}</span>
//                             <button
//                                 onClick={() => handleRemoveStep(step.id)}
//                                 className="text-red-500 hover:text-red-700"
//                             >
//                                 <Trash2 size={20} />
//                             </button>
//                         </div>
//                         {step.fields.map(field => (
//                             <div key={field.id} className="mb-2 flex items-center ">
//                                 <input
//                                     type="text"
//                                     value={field.value}
//                                     onChange={(e) => handleUpdateField(step.id, field.id, e.target.value)}
//                                     placeholder={field.name}
//                                     className="flex-grow p-2 border rounded mr-2 outline-none "
//                                 />
//                                 {field.id !== 'name' && field.id !== 'address' && (
//                                     <button
//                                         onClick={() => handleRemoveFieldFromStep(step.id, field.id)}
//                                         className="text-red-500 hover:text-red-700 outline-none "
//                                     >
//                                         <X size={20} />
//                                     </button>
//                                 )}
//                             </div>
//                         ))}
//                         <div className="mt-2 flex">
//                             <input
//                                 type="text"
//                                 value={newFieldNames[step.id] || ''}
//                                 onChange={(e) => setNewFieldNames(prev => ({ ...prev, [step.id]: e.target.value }))}
//                                 placeholder="New field name"
//                                 className="flex-grow p-2 border rounded-l outline-none "
//                             />
//                             <button
//                                 onClick={() => handleAddFieldToStep(step.id)}
//                                 className="bg-[#285C2B] text-white p-2 rounded-r hover:bg-green-600"
//                             >
//                                 <Plus size={20} />
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//                 <button
//                     onClick={handleAddStep}
//                     className="flex items-center justify-center w-full p-2 mt-4 bg-[#285C2B] text-white rounded hover:bg-[#4FA731]"
//                 >
//                     <PlusCircle size={20} className="mr-2" />
//                     Add Step
//                 </button>
//             </div></div>

//     );
// };

// export default RouteBuilder;


const RouteBuilder = () => {
    return (
        <div>RouteBuilder</div>
    )
}

export default RouteBuilder