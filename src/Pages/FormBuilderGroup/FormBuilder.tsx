// import { Button } from '@/Components/FormBuilder/ButtonComponent';
// import DraggableField from '@/Components/FormBuilder/DraggableField';
// import DropArea from '@/Components/FormBuilder/DropArea';
// import PreviewDialogBtn from '@/Components/FormBuilder/PreviewDialogBtn';
// import { addElement, replaceElement } from '@/Redux/FormBuilder/dropElementSlice';
// import { useQuestionContext } from '@/Redux/FormBuilder/QuestionContext';
// import { DndContext, DragOverlay } from '@dnd-kit/core';
// import { useState } from 'react';
// import { HiSaveAs } from 'react-icons/hi';
// import { MdOutlinePublish, MdPreview } from 'react-icons/md';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast, ToastContainer } from 'react-toastify';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { ArrowBack } from '@mui/icons-material';

// type ElementType = { itemName: string; itemPosition: number };

// const FormBuilder = () => {
//     const { questions } = useQuestionContext();
//     const [activeId, setActiveId] = useState<any>(null);
//     const [replaceMode, setReplaceMode] = useState<boolean>(false);
//     const [replaceIndex, setReplaceIndex] = useState<number | null>(null);
//     const [isOverDropArea, setIsOverDropArea] = useState<boolean>(false);
//     const dispatch = useDispatch();
//     const elements = useSelector((state: any) => state.elements as ElementType[]);

//     const formDetails = localStorage.getItem('currentForm');
//     const formDetailsData = formDetails ? JSON.parse(formDetails) : { name: 'Enter Form Name' };
//     const formName = formDetailsData.name;

//     const handleDragStart = (event: any) => {
//         setActiveId(event.active.id);
//     };

//     const handleDragEnd = (event: any) => {
//         if (isOverDropArea) {
//             if (replaceMode && replaceIndex !== null) {
//                 dispatch(replaceElement({ index: replaceIndex, itemName: event.active.id }));
//                 setReplaceMode(false);
//                 setReplaceIndex(null);
//             } else {
//                 const newPosition = elements.length + 1;
//                 const elementName = event.active.id;
//                 dispatch(addElement({ itemName: elementName, itemPosition: newPosition }));
//             }
//         }
//         setActiveId(null);
//         setIsOverDropArea(false);
//     };

//     const handleReplaceMode = (index: number) => {
//         setReplaceMode(!replaceMode);
//         setReplaceIndex(index);
//     };

//     const handleDropArea = (isOver: boolean) => {
//         setIsOverDropArea(isOver);
//     };

//     const handlePublish = async () => {
//         const formData = {
//             name: formDetailsData?.name,
//             json_form: JSON.stringify(questions),
//             process_flow_id: 1,
//             process_flow_step_id: 1,
//             tag_id: 1,
//             status: 1
//         };

//         try {
//             const response = await axios.post('https://api.ngml.skillzserver.com/formbuilder/api/forms/create', formData, {
//                 headers: {
//                     Authorization: 'Bearer 231|ewCBKQ1j3dNTTYU1imOnIR3FLMvOPtRECcvvANIy04d89335'
//                 }
//             });

//             toast.success('Form created successfully!');
//             console.log('Success:', response.data);
//         } catch (error: any) {
//             toast.error(error?.response?.data?.message || 'Error occurred while creating form');
//             console.error('Error:', error.response ? error.response.data : error.message);
//         }
//     };

//     return (
//         <div>
//             <Link to={'/admin/settings/formbuilder'}>
//                 <div className='flex justify-center items-center border-2 h-[32px] w-[32px] rounded-[50%] mb-3'>
//                     <ArrowBack color="success" style={{ fontSize: 'medium' }} />
//                 </div>
//             </Link>
//             <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
//                 <div className="flex flex-col bg-[#eceef3]">
//                     <ToastContainer />
//                     <nav className="flex flex-row items-center justify-between p-4 border-b border-gray-400 h-[13vh] md:p-5 md:gap-4">
//                         <h1 className="text-2xl font-bold w-[68%]">
//                             Form: <span className="font-normal text-gray-600">{formName}</span>
//                         </h1>
//                         <div className="flex flex-row items-center justify-between gap-1 w-[32%]">
//                             <Button
//                                 variant={'outline'}
//                                 title={'Preview the form'}
//                                 className="w-[32%] gap-2 font-bold text-sm tracking-wide"
//                             >
//                                 <MdPreview className="text-lg" />
//                                 <PreviewDialogBtn />
//                             </Button>
//                             <Button
//                                 variant={'outline'}
//                                 title={'Save and edit later'}
//                                 className="w-[32%] gap-2 font-bold text-sm tracking-wide"
//                             >
//                                 <HiSaveAs className="text-lg" />
//                                 Save
//                             </Button>
//                             <Button className="w-[32%] gap-2 font-bold text-sm tracking-wide" onClick={handlePublish}>
//                                 <MdOutlinePublish className="text-lg" />
//                                 Publish
//                             </Button>
//                         </div>
//                     </nav>
//                     <main className="flex flex-row items-start justify-between h-[87vh]">
//                         <section className="flex flex-col items-start px-8 py-6 w-[76%] h-full bg-repeat bg-white bg-[url(/paper.svg)]">
//                             <DropArea
//                                 onDrop={handleDragEnd}
//                                 handleReplaceMode={handleReplaceMode}
//                                 replaceIndex={replaceIndex}
//                                 replaceMode={replaceMode}
//                                 handleDropArea={handleDropArea}
//                             />
//                         </section>
//                         <section className="flex flex-col space-y-4 items-start w-[24%] h-full p-4 overflow-y-auto border-l border-gray-400">
//                             <h2 className="w-full pb-2 font-semibold border-b border-gray-400">
//                                 Drag and drop elements
//                             </h2>
//                             <div className="flex flex-col w-full space-y-2">
//                                 <h3 className="text-gray-600">Layout Elements</h3>
//                                 <div className="flex flex-wrap w-full gap-2">
//                                     <DraggableField name="title" />
//                                     <DraggableField name="subtitle" />
//                                     <DraggableField name="separator" />
//                                     <DraggableField name="spacer" />
//                                 </div>
//                             </div>
//                             <div className="flex flex-col w-full space-y-2">
//                                 <h3 className="text-gray-600">Form Fields</h3>
//                                 <div className="flex flex-wrap w-full gap-2">
//                                     <DraggableField name="text" />
//                                     <DraggableField name="textarea" />
//                                     <DraggableField name="number" />
//                                     <DraggableField name="dropdown" />
//                                     <DraggableField name="checkbox" />
//                                     <DraggableField name="radiobox" />
//                                     <DraggableField name="date" />
//                                     <DraggableField name="time" />
//                                 </div>
//                             </div>
//                         </section>
//                     </main>
//                     <DragOverlay>
//                         {activeId ? <DraggableField name={activeId} /> : null}
//                     </DragOverlay>
//                 </div>
//             </DndContext>
//         </div>
//     );
// };

// export default FormBuilder;








import { Button } from '@/Components/FormBuilder/ButtonComponent';
import DraggableField from '@/Components/FormBuilder/DraggableField';
import DropArea from '@/Components/FormBuilder/DropArea';
import PreviewDialogBtn from '@/Components/FormBuilder/PreviewDialogBtn';
import { addElement, replaceElement } from '@/Redux/FormBuilder/dropElementSlice';
import { useQuestionContext } from '@/Redux/FormBuilder/QuestionContext';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { useState } from 'react';
import { HiSaveAs } from 'react-icons/hi';
import { MdOutlinePublish, MdPreview } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import {  useSubmitFormMutation } from '@/Redux/Features/FormBuilder/formBuilderService';

type ElementType = {
    id: any; itemName: string; itemPosition: number 
};

const FormBuilder = () => {
    const { questions } = useQuestionContext();
    const [activeId, setActiveId] = useState<any>(null);
    const [replaceMode, setReplaceMode] = useState<boolean>(false);
    const [replaceIndex, setReplaceIndex] = useState<number | null>(null);
    const [isOverDropArea, setIsOverDropArea] = useState<boolean>(false);
    const dispatch = useDispatch();
    const elements = useSelector((state: any) => state.elements as ElementType[]);
    const [submitForm] = useSubmitFormMutation();


    const formDetails = localStorage.getItem('currentForm');
    const formDetailsData = formDetails ? JSON.parse(formDetails) : { name: 'Enter Form Name' };
    const formName = formDetailsData.name;

    const handleDragStart = (event: any) => {
        setActiveId(event.active.id);
    };

    const handleDragEnd = (event: any) => {
        if (isOverDropArea) {
            if (replaceMode && replaceIndex !== null) {
                dispatch(replaceElement({ index: replaceIndex, itemName: event.active.id }));
                setReplaceMode(false);
                setReplaceIndex(null);
            } else {
                const newPosition = elements.length + 1;
                const elementName = event.active.id;
                dispatch(addElement({ itemName: elementName, itemPosition: newPosition }));
            }
        }
        setActiveId(null);
        setIsOverDropArea(false);
    };

    const handleReplaceMode = (index: number) => {
        setReplaceMode(!replaceMode);
        setReplaceIndex(index);
    };

    const handleDropArea = (isOver: boolean) => {
        setIsOverDropArea(isOver);
    };



    // const handleSave = async () => {
    //     const formFieldAnswers = elements.map(el => ({
    //         field_id: el.id, 
    //         answer: '', 
    //     }));

    //     const formData: FormSubmission = {
    //         form_field_answers: JSON.stringify(formFieldAnswers), 
    //     };

    //     try {
    //         const response = await submitForm(formData).unwrap(); 
    //         toast.success('Form saved successfully!');
    //         console.log('Success:', response);
    //     } catch (error: any) {
    //         toast.error(error?.message || 'Error occurred while saving the form');
    //         console.error('Error:', error);
    //     }
    // };




    const handleSave = async () => {
        const formFieldAnswers = elements.map(el => ({
            field_id: el.id,
            answer: '',
        }));
        const formData = {
            name: formDetailsData?.name,
            json_form: JSON.stringify(questions),
            process_flow_id: 1,
            process_flow_step_id: 1,
            tag_id: 1,
            status: 1,
            form_data: elements.map((el, index) => ({
                id: index + 1,
                name: el.itemName,
                elementType: el.itemName,
            })),
            form_field_answers: JSON.stringify(formFieldAnswers),

        };

        try {
            const response = await submitForm(formData).unwrap();
            toast.success('Form saved successfully!');
            console.log('Success:', response);
        } catch (error: any) {
            toast.error(error?.message || 'Error occurred while saving the form');
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Link to={'/admin/settings/formbuilder'}>
                <div className='flex justify-center items-center border-2 h-[32px] w-[32px] rounded-[50%] mb-3'>
                    <ArrowBack color="success" style={{ fontSize: 'medium' }} />
                </div>
            </Link>
            <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
                <div className="flex flex-col bg-[#eceef3]">
                    <ToastContainer />
                    <nav className="flex flex-row items-center justify-between p-4 border-b border-gray-400 h-[13vh] md:p-5 md:gap-4">
                        <h1 className="text-2xl font-bold w-[68%]">
                            Form: <span className="font-normal text-gray-600">{formName}</span>
                        </h1>
                        <div className="flex flex-row items-center justify-between gap-1 w-[32%]">
                            <Button
                                variant={'outline'}
                                title={'Preview the form'}
                                className="w-[32%] gap-2 font-bold text-sm tracking-wide"
                            >
                                <MdPreview className="text-lg" />
                                <PreviewDialogBtn />
                            </Button>
                            <Button
                                variant={'outline'}
                                title={'Save and edit later'}
                                className="w-[32%] gap-2 font-bold text-sm tracking-wide"
                                onClick={handleSave}
                            >
                                <HiSaveAs className="text-lg" />
                                Save
                            </Button>
                            <Button className="w-[32%] gap-2 font-bold text-sm tracking-wide" onClick={handleSave}>
                                <MdOutlinePublish className="text-lg" />
                                Publish
                            </Button>
                        </div>
                    </nav>
                    <main className="flex flex-row items-start justify-between h-[87vh]">
                        <section className="flex flex-col items-start px-8 py-6 w-[76%] h-full bg-repeat bg-white bg-[url(/paper.svg)]">
                            <DropArea
                                onDrop={handleDragEnd}
                                handleReplaceMode={handleReplaceMode}
                                replaceIndex={replaceIndex}
                                replaceMode={replaceMode}
                                handleDropArea={handleDropArea}
                            />
                        </section>
                        <section className="flex flex-col space-y-4 items-start w-[24%] h-full p-4 overflow-y-auto border-l border-gray-400">
                            <h2 className="w-full pb-2 font-semibold border-b border-gray-400">
                                Drag and drop elements
                            </h2>
                            <div className="flex flex-col w-full space-y-2">
                                <h3 className="text-gray-600">Layout Elements</h3>
                                <div className="flex flex-wrap w-full gap-2">
                                    <DraggableField name="title" />
                                    <DraggableField name="subtitle" />
                                    <DraggableField name="separator" />
                                    <DraggableField name="spacer" />
                                </div>
                            </div>
                            <div className="flex flex-col w-full space-y-2">
                                <h3 className="text-gray-600">Form Fields</h3>
                                <div className="flex flex-wrap w-full gap-2">
                                    <DraggableField name="text" />
                                    <DraggableField name="textarea" />
                                    <DraggableField name="number" />
                                    <DraggableField name="dropdown" />
                                    <DraggableField name="checkbox" />
                                    <DraggableField name="radiobox" />
                                    <DraggableField name="date" />
                                    <DraggableField name="time" />
                                </div>
                            </div>
                        </section>
                    </main>
                    <DragOverlay>
                        {activeId ? <DraggableField name={activeId} /> : null}
                    </DragOverlay>
                </div>
            </DndContext>
        </div>
    );
};

export default FormBuilder;



