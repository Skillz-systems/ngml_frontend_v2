/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCreateFormMutation, useGetTagsQuery } from '@/Redux/Features/FormBuilder/formBuilderService';
import { useGetProcessFlowsQuery } from '@/Redux/Features/ProcessFlow/processFlowService';
import { useGetLocationsQuery } from '@/Redux/Features/UserSettings/locationService';
import { ArrowBack } from '@mui/icons-material';
import { Key, useEffect, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { AiOutlineClear } from 'react-icons/ai';
import { BsFillCalendarDateFill, BsTextareaResize } from 'react-icons/bs';
import { FaFile, FaPencilAlt, FaSave, FaTimes, FaTrash } from 'react-icons/fa';
import { FiEyeOff } from 'react-icons/fi';
import { IoMdCheckbox } from 'react-icons/io';
import {
    MdAlternateEmail,
    MdOutlineLocationOn,
    MdPassword,
    MdTextFields,
} from 'react-icons/md';
import { RiListRadio } from 'react-icons/ri';
import { RxDropdownMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ItemTypes = {
    FORM_ELEMENT: 'formElement',
};

interface FormElementOption {
    label: string;
    value: string;
}

interface FormInterface {
    name?: string;
    description?: string;
    process_flow_id: string | number | undefined;
    tag_id?: string;
    json_form?: string;
    json_data: [];
}

interface FormElement {
    id: number;
    type:
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'tel'
    | 'select'
    | 'checkbox'
    | 'textarea'
    | 'radio'
    | 'file'
    | 'hidden'
    | 'location'
    | 'designation'
    | 'date';
    label: string;
    name: string;
    placeholder?: string;
    required: boolean;
    options?: FormElementOption[];
}

// interface FormElement {
//     id: number;
//     type:
//     | 'text'
//     | 'email'
//     | 'password'
//     | 'number'
//     | 'tel'
//     | 'select'
//     | 'checkbox'
//     | 'textarea'
//     | 'radio'
//     | 'file'
//     | 'hidden'
//     | 'location'
//     | 'designation'
//     | 'date';
//     label: string;
//     inputs: {
//         id: number;
//         name: string;
//         placeholder?: string;
//         required: boolean;
//         options?: FormElementOption[];
//     }[];
// }

const formElementTypes = [
    { type: 'text', label: 'Text' },
    { type: 'date', label: 'Date' },
    { type: 'hidden', label: 'Hidden' },
    { type: 'password', label: 'Password' },
    { type: 'file', label: 'File' },
    { type: 'select', label: 'Select' },
    { type: 'checkbox', label: 'Checkbox' },
    { type: 'textarea', label: 'TextArea' },
    { type: 'radio', label: 'Radio Group' },
    { type: 'location', label: 'Location' },
    { type: 'email', label: 'Email' },
];

const DraggableFormElement = ({
    type,
    label,
}: {
    type: string;
    label: string;
}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.FORM_ELEMENT,
        item: { type, label },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            className={`p-2 text-sm bg-white duration-300 transition-all flex flex-col items-center space-y-1 rounded-md justify-between border border-dotted cursor-move 
                ${isDragging ? 'opacity-60' : ''
                } hover:bg-green-100 border-solid `}
        >
            {label === 'Date' && (
                <BsFillCalendarDateFill className="text-green-800 size-5" />
            )}
            {label === 'Text' && <MdTextFields className="text-green-800 size-5" />}
            {label === 'Select' && (
                <RxDropdownMenu className="text-green-800 size-5" />
            )}

            {label === 'Checkbox' && (
                <IoMdCheckbox className="text-green-800 size-5" />
            )}
            {label === 'TextArea' && (
                <BsTextareaResize className="text-green-800 size-5" />
            )}
            {label === 'File' && <FaFile className="text-green-800 size-5" />}
            {label === 'Radio Group' && (
                <RiListRadio className="text-green-800 size-5" />
            )}
            {label === 'Password' && <MdPassword className="text-green-800 size-5" />}
            {label === 'Email' && (
                <MdAlternateEmail className="text-green-800 size-5" />
            )}
            {label === 'Hidden' && <FiEyeOff className="text-green-800 size-5" />}
            {label === 'Location' && (
                <MdOutlineLocationOn className="text-green-800 size-5" />
            )}
            {label}
        </div>
    );
};

const EditableFormElement = ({
    element,
    onUpdate,
    onDelete,
}: {
    element: FormElement;
    onUpdate: (updated: FormElement) => void;
    onDelete: () => void;
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedElement, setEditedElement] = useState<FormElement>(element);
    const { data: locations } = useGetLocationsQuery();

    const handleInputChange = (field: string, value: any) => {
        setEditedElement({
            ...editedElement,
            [field]: value,
        });
    };

    const handleSave = () => {
        onUpdate(editedElement);
        setIsEditing(false);
    };

    useEffect(() => {
        if (element.type === 'location' && locations?.data) {
            if (Array.isArray(locations.data)) {
                const locationOptions = locations.data.map((location) => ({
                    label: location.location.replace(/_/g, ' '),
                    value: location.id?.toString() ?? '',
                }));

                setEditedElement((prev) => ({
                    ...prev,
                    options: locationOptions,
                }));
            }
        }
    }, [element.type, locations]);

    return (
        <div className="bg-white p-3 rounded-lg mb-4">
            <div className="flex justify-between items-center">
                <h4 className="text-base font-semibold">
                    {element.label || 'Untitled'}
                </h4>
                <div className="flex space-x-2">
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="p-2 text-green-900 hover:bg-green-200 rounded-md "
                    >
                        <span className="sr-only">Edit</span>
                        {isEditing ? <FaTimes /> : <FaPencilAlt />}
                    </button>
                    <button
                        type="button"
                        onClick={onDelete}
                        className="p-2 text-nnpc-800 hover:bg-red-200 rounded"
                    >
                        <span className="sr-only">Delete</span>
                        <FaTrash />
                    </button>
                </div>
            </div>

            {isEditing ? (
                <div className="space-y-2">
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Element Label
                        </label>
                        <input
                            type="text"
                            value={editedElement.label}
                            onChange={(e) =>
                                handleInputChange('label', e.target.value)
                            }
                            className="flex h-10 w-full rounded-md border-[1.5px] border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-light-green disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Input Name
                        </label>
                        <input
                            type="text"
                            value={editedElement.name}
                            onChange={(e) =>
                                handleInputChange('name', e.target.value)
                            }
                            className="flex h-10 w-full rounded-md border-[1.5px] border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-light-green disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Element Placeholder
                        </label>
                        <input
                            type="text"
                            value={editedElement.placeholder}
                            onChange={(e) =>
                                handleInputChange('placeholder', e.target.value)
                            }
                            className="flex h-10 w-full rounded-md border-[1.5px] border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-light-green disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>


                    {/* Only show type selection for regular input elements */}
                    {(editedElement.type === 'text' ||
                        editedElement.type === 'email' ||
                        editedElement.type === 'password' ||
                        editedElement.type === 'number' ||
                        editedElement.type === 'file' ||
                        editedElement.type === 'hidden' ||
                        editedElement.type === 'date' ||
                        editedElement.type === 'tel') && (
                            <div>
                                <label
                                    htmlFor="elements"
                                    className="block text-sm font-medium mb-1"
                                >
                                    Input Type
                                </label>
                                <select
                                    id="elements"
                                    value={editedElement.type}
                                    onChange={(e) =>
                                        handleInputChange('type', e.target.value)
                                    }
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="text">Text</option>
                                    <option value="date">Date</option>
                                    <option value="email">Email</option>
                                    <option value="password">Password</option>
                                    <option value="number">Number</option>
                                    <option value="tel">Tel</option>
                                    <option value="file">File</option>
                                    <option value="hidden">Hidden</option>
                                </select>
                            </div>
                        )}

                    {/* Options management for select and radio elements */}
                    {(editedElement.type === 'select' || editedElement.type === 'radio') && (
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Options
                            </label>
                            <div className="space-y-2">
                                {editedElement.options?.map((option, index) => (
                                    <div key={index} className="flex space-x-2">
                                        <input
                                            type="text"
                                            value={option.label}
                                            onChange={(e) => {
                                                const newOptions = [...(editedElement.options || [])];
                                                newOptions[index] = {
                                                    ...newOptions[index],
                                                    label: e.target.value,
                                                };
                                                handleInputChange('options', newOptions);
                                            }}
                                            placeholder="Label"
                                            className="w-1/2 p-2 border rounded"
                                        />
                                        <input
                                            type="text"
                                            value={option.value}
                                            onChange={(e) => {
                                                const newOptions = [...(editedElement.options || [])];
                                                newOptions[index] = {
                                                    ...newOptions[index],
                                                    value: e.target.value,
                                                };
                                                handleInputChange('options', newOptions);
                                            }}
                                            placeholder="Value"
                                            className="w-1/2 p-2 border rounded"
                                        />
                                        <button
                                            onClick={() => {
                                                const newOptions = editedElement.options?.filter((_, i) => i !== index) || [];
                                                handleInputChange('options', newOptions);
                                            }}
                                            className="p-2 text-nnpc-800 hover:bg-red-100 rounded"
                                        >
                                            <span className="sr-only">Delete</span>
                                            <FaTimes />
                                        </button>
                                    </div>
                                ))}
                                <button
                                    onClick={() => {
                                        const newOptions = [
                                            ...(editedElement.options || []),
                                            { label: '', value: '' },
                                        ];
                                        handleInputChange('options', newOptions);
                                    }}
                                    className="ml-auto w-fit px-2 py-1.5 bg-nnpcmediumgreen-950 text-white rounded hover:bg-nnpcmediumgreen-800 text-sm"
                                >
                                    Add Option
                                </button>
                            </div>
                        </div>
                    )}

                    {(editedElement.type === 'text' || editedElement.type === 'textarea') && (
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Placeholder
                            </label>
                            <input
                                type="text"
                                value={editedElement.placeholder || ''}
                                onChange={(e) =>
                                    handleInputChange('placeholder', e.target.value)
                                }
                                className="flex h-10 w-full rounded-md border-[1.5px] border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-light-green disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                    )}

                    <div>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={editedElement.required}
                                onChange={(e) =>
                                    handleInputChange('required', e.target.checked)
                                }
                                className="checked:text-green-900 mr-3 text-green-900"
                            />
                            Required
                        </label>
                    </div>

                    <button
                        onClick={handleSave}
                        className="w-fit px-2 py-1.5 bg-green-900 text-white rounded duration-200 ease-in transition-all hover:bg-green-800 flex items-center justify-center text-sm"
                    >
                        <FaSave className="mr-2" /> Save Element
                    </button>
                </div>
            ) : (
                <div>
                    <div className="">
                        <label className="block text-sm font-medium">{editedElement.name}</label>
                    </div>
                    <div className="text-sm text-gray-500">
                        <p>Element Type: {element.type}</p>
                    </div>
                </div>
            )}
        </div>
    );
};
const FormBuilder = () => {
    const [formElements, setFormElements] = useState<FormElement[]>([]);

    const [createForm, { isLoading }] = useCreateFormMutation();
    const [form, setForm] = useState<FormInterface>({
        name: '',
        description: '',
        process_flow_id: '',
        tag_id: '',
        json_form: '',
        json_data: [],
    });
    const { data: backendProcessflows } = useGetProcessFlowsQuery();
    const { data: tags } = useGetTagsQuery();

    const handleFormChange =
        (key: string) =>
            (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
                const target = event.target;

                if (
                    target instanceof HTMLInputElement &&
                    (target.type === 'checkbox' || target.type === 'radio')
                ) {
                    setForm({ ...form, [key]: target.checked });
                } else {
                    setForm({ ...form, [key]: target.value });
                }
            };
    const handleAddFormElement = (item: { type: string; label: string }) => {
        const newElement: FormElement = {
            id: Date.now(),
            type: item.type as FormElement['type'],
            label: item.label,
            name: `${item.type}_${Date.now()}`,
            placeholder: `${item.label}_${Date.now()}`,
            required: false,
            options:
                item.type === 'select' || item.type === 'radio'
                    ? [{ label: 'Option 1', value: 'option1' }]
                    : undefined,
        };
        setFormElements((prevElements) => [...prevElements, newElement]);
    };

    const handleUpdateElement = (updatedElement: FormElement) => {
        setFormElements((prevElements) =>
            prevElements.map((element) =>
                element.id === updatedElement.id ? updatedElement : element
            )
        );
    };

    const handleDeleteElement = (id: number) => {
        setFormElements((prevElements) =>
            prevElements.filter((element) => element.id !== id)
        );
    };

    const handleCreateNewForm = () => {
        setForm({
            name: '',
            description: '',
            process_flow_id: '',
            tag_id: '',
            json_form: '',
            json_data: [],
        });
        setFormElements([]);
    };

    const handleSaveForm = async () => {
        const newForm: FormInterface = {
            name: form.name,
            description: form.description,
            process_flow_id: form.process_flow_id,
            tag_id: form.tag_id,
            json_form: JSON.stringify(formElements),
            // json_form: formElements,
            json_data: [],
        };
        console.log(newForm);

        if (form?.name?.trim() === '' || form?.description?.trim() === '' || form?.process_flow_id === '' || form?.tag_id?.trim() === '') {
            toast.error('All field are required');

            return;
        }


        try {
            await createForm(newForm).unwrap();
            // console.log(newForm)
            toast.success('form created successfully!');
        } catch (error) {
            console.error('Error submitting the process flow:', error);
            toast.error('Error creating form');
        }

        // alert('Form saved successfully!');
        handleCreateNewForm();
    };

    const [, drop] = useDrop(() => ({
        accept: ItemTypes.FORM_ELEMENT,
        drop: (item: { type: string; label: string }) => handleAddFormElement(item),
    }));

    return (
        <div className="flex flex-col h-full bg-transparent w-full rounded-xl">
            <div className="flex items-center justify-between p-1 mb-2 ">
                <Link to={'/admin/settings'}>
                    <div className="flex justify-center items-center border-2 h-[32px] w-[32px] rounded-[50%]">
                        <ArrowBack color="success" style={{ fontSize: 'medium' }} />
                    </div>
                </Link>

                {/* <div>
                    <h1 className="text-lg font-bold">Form Builder</h1>
                </div> */}
                <div className="flex space-x-2">
                    <button
                        onClick={handleCreateNewForm}
                        className="bg-nnpc-800 text-white px-2 py-1.5 rounded hover:bg-red-800 flex items-center text-sm duration-200 ease-in transition-all"
                    >
                        <AiOutlineClear className="mr-2" />
                        <span className="">Reset Form</span>
                    </button>
                    <button
                        onClick={handleSaveForm}
                        disabled={isLoading}
                        className="w-fit px-2 py-1.5 duration-200 ease-in transition-all bg-green-900 text-white rounded hover:bg-green-800 flex items-center text-sm disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        <span className="sr-only">Create form</span>
                        <FaSave className="mr-2" /> {isLoading ? 'Creating...' : 'Create Form'}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-4  gap-4">
                <div className="col-span-1 p-4 border-r bg-white h-fit rounded-lg">
                    <h2 className="text-xl font-bold mb-2">Form Elements</h2>

                    <div className="grid grid-cols-2 gap-2 mb-2">
                        {formElementTypes.map((element) => (
                            <DraggableFormElement
                                key={element.type}
                                type={element.type}
                                label={element.label}
                            />
                        ))}
                    </div>
                </div>

                <div
                    ref={drop}
                    className="col-span-3 p-4 overflow-y-auto rounded-xl bg-green-100  m-2 h-[28rem] scroll-smooth"
                >
                    <h2 className="text-xl font-bold mb-4">Form Preview</h2>

                    {/* Form Title and Description */}

                    <div className="mb-4 space-y-4">
                        <input
                            type="text"
                            placeholder="Form Name"
                            value={form.name}
                            onChange={handleFormChange('name')}
                            // onChange={(e) => set(e.target.value)}
                            className="flex h-10 w-full rounded-md border-[1.5px] border-input bg-background px-3 py-2 text-sm 
          ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium 
          placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-light-green 
          disabled:cursor-not-allowed disabled:opacity-50"
                        />
                        <input
                            type="text"
                            placeholder="Form Description"
                            value={form.description}
                            onChange={handleFormChange('description')}
                            className="flex h-10 w-full rounded-md border-[1.5px] border-input bg-background px-3 py-2 text-sm 
          ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium 
          placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-light-green 
          disabled:cursor-not-allowed disabled:opacity-50"
                        />

                        <div>
                            <label htmlFor="process_flow_id" className="sr-only">
                                ProcessFlow
                            </label>
                            <select
                                id="process_flow_id"
                                name="process_flow_id"
                                value={form.process_flow_id}
                                onChange={handleFormChange('process_flow_id')}
                                className="flex h-10 w-full rounded-md border-[1.5px] border-input bg-white px-3 py-2 text-sm 
          ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium 
          placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-light-green 
          disabled:cursor-not-allowed disabled:opacity-50 placeholder-shown:text-gray-400"
                            >
                                <option className="text-gray-500">Select a processflow</option>
                                {Array.isArray(backendProcessflows?.data) &&
                                    backendProcessflows.data.map((flow) => (
                                        <option key={flow.id} value={Number(flow.id)}>
                                            {flow.name.replace(/_/g, ' ')}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="tag_id" className="sr-only">
                                Tag
                            </label>
                            <select
                                id="tag_id"
                                name="tag_id"
                                value={form.tag_id}
                                onChange={handleFormChange('tag_id')}
                                className="flex h-10 w-full rounded-md border-[1.5px] border-input bg-white px-3 py-2 text-sm 
          ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium 
          placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-light-green 
          disabled:cursor-not-allowed disabled:opacity-50 placeholder-shown:text-gray-400"
                            >
                                <option className="text-gray-500">Select a tag</option>
                                {Array.isArray(tags?.data) &&
                                    tags.data.map(
                                        (tag: { id: Key | null | undefined; name: string }) => (
                                            <option key={tag.id} value={Number(tag.id)}>
                                                {tag.name.replace(/_/g, ' ')}
                                            </option>
                                        )
                                    )}
                            </select>
                        </div>
                    </div>

                    <h2 className="text-base font-bold mb-4">Form Elements</h2>

                    {formElements.map((element) => (
                        <EditableFormElement
                            key={element.id}
                            element={element}
                            onUpdate={handleUpdateElement}
                            onDelete={() => handleDeleteElement(element.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const FormBuilderPage = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <FormBuilder />
        </DndProvider>
    );
};

export default FormBuilderPage;
