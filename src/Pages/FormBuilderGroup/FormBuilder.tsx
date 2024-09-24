/* eslint-disable @typescript-eslint/no-explicit-any */
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

import axios from 'axios';

type ElementType = { itemName: string; itemPosition: number };

const FormBuilder = () => {
    const { questions } = useQuestionContext();
    const [activeId, setActiveId] = useState<any>(null);
    const [replaceMode, setReplaceMode] = useState<boolean>(false);
    const [replaceIndex, setReplaceIndex] = useState<number | null>(null);
    const [isOverDropArea, setIsOverDropArea] = useState<boolean>(false);
    const dispatch = useDispatch();
    const elements = useSelector((state: any) => state.elements as ElementType[]);

    const handleDragStart = (event: any) => {
        setActiveId(event.active.id);
    };

    const handleDragEnd = (event: any) => {
        if (isOverDropArea) {
            if (replaceMode && replaceIndex !== null) {
                dispatch(
                    replaceElement({ index: replaceIndex, itemName: event.active.id })
                );
                setReplaceMode(false);
                setReplaceIndex(null);
            } else {
                const newPosition = elements.length + 1;
                const elementName = event.active.id;
                dispatch(
                    addElement({ itemName: elementName, itemPosition: newPosition })
                );
            }
        }
        setActiveId(null);
        setIsOverDropArea(false);


        console.log(elements)
    };

    const handleReplaceMode = (index: number) => {
        setReplaceMode(!replaceMode);
        setReplaceIndex(index);
    };

    const handleDropArea = (isOver: boolean) => {
        setIsOverDropArea(isOver);
    };

    console.log('QUESTIONS:', questions)

    const handlePublish = async () => {

        const formDetails = localStorage.getItem('currentForm')
        const formDetailsData = JSON.parse(formDetails)

        const formData = {
            name: formDetailsData?.name,
            json_form: JSON.stringify(questions),
            process_flow_id: 1,
            process_flow_step_id: 1,
            tag_id: 1,
            status: 1
        }

        try {

            // Make the POST request
            const response = await axios.post('https://api.ngml.skillzserver.com/formbuilder/api/forms/create', formData, {
                headers: {
                    Authorization: 'Bearer 231|ewCBKQ1j3dNTTYU1imOnIR3FLMvOPtRECcvvANIy04d89335'
                }
            });

            toast.success('Form created successfully!');

            // Handle the success response
            console.log('Success:', response.data);
        } catch (error: any) {
            // Error: update the toast and show error message
            toast.error(error?.response?.data?.message);

            // Handle the error response
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    }

    return (
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <div className="flex flex-col bg-[#eceef3]">
                <ToastContainer />
                <nav className="flex flex-row items-center justify-between p-4 border-b border-gray-400 h-[13vh] md:p-5 md:gap-4">
                    <h1 className="text-2xl font-bold w-[68%]">
                        Form:{' '}
                        <span className="font-normal text-gray-600">Enrollment Form</span>
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
                        >
                            <HiSaveAs className="text-lg" />
                            Save
                        </Button>
                        <Button className="w-[32%] gap-2 font-bold text-sm tracking-wide" onClick={handlePublish}>
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
    );
};

export default FormBuilder;
