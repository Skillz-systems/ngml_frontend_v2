import { Button } from '@/Components/FormBuilder/ButtonComponent';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/Components/FormBuilder/DialogComponent';
import FormCard from '@/Components/FormBuilder/FormCard';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/Components/FormBuilder/FormComponent';
import { Input } from '@/Components/FormBuilder/InputComponent';
import SelectComponent from '@/Components/FormBuilder/SelectComponent';
import { Textarea } from '@/Components/FormBuilder/TextAreaComponent';
import { useGetFormsQuery } from '@/Redux/Features/FormBuilder/formBuilderService';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowBack } from '@mui/icons-material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsFileEarmarkPlus } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { z } from 'zod';

const FormBuilderDashboard = () => {

    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const { data: forms, error, isLoading } = useGetFormsQuery();


    const navigate = useNavigate()

    const formSchema = z.object({
        name: z.string().min(2, {
            message: 'Form name must be at least 2 characters.',
        }),
        description: z.string().min(5, {
            message: 'Form description must be at least 5 characters',
        }),
        processFlowId: z.string().nonempty({
            message: 'Process Flow Id cannot be empty',
        }),
        tag: z.string().nonempty({
            message: 'Tag cannot be empty',
        }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            description: '',
            processFlowId: '',
            tag: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        localStorage.setItem('currentForm', JSON.stringify(values))
        navigate('/admin/settings/formbuilder/1')
        setIsDialogOpen(false);
    }

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading forms!</p>;


    return (
        <div>
            <Link to={'/admin/settings'}>
                <div className='flex justify-center items-center border-2 h-[32px] w-[32px] rounded-[50%]'>
                    <ArrowBack color="success" style={{ fontSize: 'medium' }} />
                </div>
            </Link>
            <div className="p-4 md:p-5 bg-[#eceef3]" >
                <ToastContainer />
                <div>
                    <h1 className="mb-4 text-3xl font-bold">Form Builder</h1>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div>
                            <div className="p-4 text-center text-white rounded-tl-lg rounded-tr-lg bg-dark-green">
                                <p className="text-base">Total Forms</p>
                            </div>
                            <div className="p-4 text-center text-white rounded-bl-lg rounded-br-lg bg-light-green">
                                <h2 className="mb-2 text-2xl font-bold">10</h2>
                            </div>
                        </div>

                        <div>
                            <div className="p-4 text-center text-white rounded-tl-lg rounded-tr-lg bg-dark-green">
                                <p className="text-base">Published Forms</p>
                            </div>
                            <div className="p-4 text-center text-white rounded-bl-lg rounded-br-lg bg-light-green">
                                <h2 className="mb-2 text-2xl font-bold">10</h2>
                            </div>
                        </div>

                        <div>
                            <div className="p-4 text-center text-white rounded-tl-lg rounded-tr-lg bg-dark-green">
                                <p className="text-base">Drafts</p>
                            </div>
                            <div className="p-4 text-center text-white rounded-bl-lg rounded-br-lg bg-light-green">
                                <h2 className="mb-2 text-2xl font-bold">10</h2>
                            </div>
                        </div>

                        <div></div>
                    </div>

                    <div className="my-8 border-t border-gray-400"></div>

                    <h1 className="mb-4 text-3xl font-bold">Your forms</h1>

                    <div className="my-8 border-t border-gray-400"></div>

                    <div className="flex flex-wrap  justify-between gap-x-2 gap-y-4 md:justify-start md:gap-4 lg:gap-6">
                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <DialogTrigger className="group w-[48.5%] md:w-[31.5%] lg:w-[23.5%] bg-white px-6 border-[1.5px] border-dashed hover:border-solid hover:border-dark-green h-[200px] md:h-[190px] items-center justify-center flex flex-col gap-4 rounded-lg">
                                <BsFileEarmarkPlus className="w-8 h-8 group-hover:text-dark-green" />
                                <p className="text-xl font-bold group-hover:text-dark-green group-hover:cursor-pointer">
                                    Create new form
                                </p>
                            </DialogTrigger>
                            <DialogContent className="bg-white">
                                <DialogHeader className="gap-0">
                                    <DialogTitle className="text-xl font-bold">
                                        Create Form
                                    </DialogTitle>
                                    <DialogDescription className="text-gray-600">
                                        Create a new form to start collecting responses
                                    </DialogDescription>
                                </DialogHeader>
                                <Form {...form}>
                                    <form
                                        onSubmit={form.handleSubmit(onSubmit)}
                                        className="space-y-4"
                                    >
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-semibold">Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter the form name" {...field} />
                                                    </FormControl>
                                                    <FormMessage className="text-color-bright-red" />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="description"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-semibold">
                                                        Description
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            placeholder="Enter the form description"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage className="text-color-bright-red" />
                                                </FormItem>
                                            )}
                                        />
                                        <div className="flex flex-row w-full gap-4">
                                            <FormField
                                                control={form.control}
                                                name="processFlowId"
                                                render={({ field }) => (
                                                    <FormItem className="w-1/2">
                                                        <FormLabel>Process Flow Id</FormLabel>
                                                        <FormControl>
                                                            <SelectComponent
                                                                field={field}
                                                                placeholder={'Select a process flow id'}
                                                                options={['1t2y4ud73n', '2k3m5n8p0q']}
                                                            />
                                                        </FormControl>
                                                        <FormMessage className="text-color-bright-red" />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="tag"
                                                render={({ field }) => (
                                                    <FormItem className="w-1/2">
                                                        <FormLabel>Tag</FormLabel>
                                                        <FormControl>
                                                            <SelectComponent
                                                                field={field}
                                                                placeholder={'Select a tag'}
                                                                options={['tag 1', 'tag 2']}
                                                            />
                                                        </FormControl>
                                                        <FormMessage className="text-color-bright-red" />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <Button type="submit" className="w-full">
                                            Submit
                                        </Button>
                                    </form>
                                </Form>
                            </DialogContent>
                        </Dialog>
                        <div className='grid grid-cols-3 w-[100%] gap-5'>
                            {forms?.data?.map(form => (
                                 <FormCard
                                 key={form.id}
                                 formName={form.name}
                                 formStatus={form.status}
                                 dateCreated={new Date(form.created_at).toLocaleDateString()}
                                 formDescription={form.description}
                                 formId={form.id}
                             />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FormBuilderDashboard;

