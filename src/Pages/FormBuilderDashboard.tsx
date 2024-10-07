
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { BsFileEarmarkPlus } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/Components/FormBuilderComponents/ButtonComponent';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/Components/FormBuilderComponents/DialogComponent';
import FormCard from '@/Components/FormBuilderComponents/FormCard';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/Components/FormBuilderComponents/FormComponent';
import { Input } from '@/Components/FormBuilderComponents/InputComponent';
import SelectComponent from '@/Components/FormBuilderComponents/SelectComponent';
import { Textarea } from '@/Components/FormBuilderComponents/TextAreaComponent';
import { useGetFormsQuery, FormBuilderData } from '@/Redux/Features/FormBuilder/formBuilderService';
import { toast } from 'react-toastify';

const FormBuilderDashboard: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const { data, error, isLoading } = useGetFormsQuery();
  const [localForms, setLocalForms] = useState<FormBuilderData[]>([]);
  const navigate = useNavigate();


  useEffect(() => {
    const storedForms = localStorage.getItem('localForms');
    if (storedForms) {
      setLocalForms(JSON.parse(storedForms));
    }
  }, []);

  const formSchema = z.object({
    name: z.string().min(2, {
      message: 'Form name must be at least 2 characters.',
    }),
    description: z.string().min(5, {
      message: 'Form description must be at least 5 characters',
    }),
    process_flow_id: z.string().optional(),
    tag_id: z.string().optional(),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      process_flow_id: '',
      tag_id: '',
    },
  });

  const generateLocalId = (): number => {
    const existingIds = [...(Array.isArray(data?.data) ? data.data : []), ...localForms].map(form => form.id);
    let newId = Math.floor(Math.random() * 1000000);
    while (existingIds.includes(newId)) {
      newId = Math.floor(Math.random() * 1000000);
    }
    return newId;
  };

  const onSubmit = (values: FormValues) => {
    const newForm: FormBuilderData = {
      id: generateLocalId(),
      ...values,
      json_form: JSON.stringify([]),
      form_data: [],
    };

    const updatedForms = [...localForms, newForm];
    setLocalForms(updatedForms);
    localStorage.setItem('localForms', JSON.stringify(updatedForms));

    toast.success('Form created successfully!');
    setIsDialogOpen(false);
    form.reset();

    navigate(`/admin/settings/formbuilder/${newForm.id}`);

  };

  const handleFormSelect = (formId: number) => {
    navigate(`/admin/settings/formbuilder/${formId}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  const formData = [...(Array.isArray(data?.data) ? data.data : []), ...localForms];

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to={'/admin/settings'} className="inline-block mb-6">
        <div className='flex justify-center items-center border-2 h-[32px] w-[32px] rounded-full hover:bg-gray-100'>
          <ArrowBack color="primary" style={{ fontSize: 'medium' }} />
        </div>
      </Link>

      <h1 className="text-3xl font-bold mb-8">Form Builder Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-dark-green text-white p-4 text-center">
            <p className="text-lg font-semibold">Total Forms</p>
          </div>
          <div className="bg-light-green text-white p-6 text-center">
            <h2 className="text-3xl font-bold">{formData.length}</h2>
          </div>
        </div>
        {/* ... other stat cards ... */}
      </div>

      <h2 className="text-2xl font-bold mb-6">Your Forms</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-dark-green group">
              <BsFileEarmarkPlus className="w-12 h-12 text-gray-400 group-hover:text-dark-green mb-4" />
              <p className="text-xl font-semibold text-gray-600 group-hover:text-dark-green">
                Create new form
              </p>
            </div>
          </DialogTrigger>
          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Create Form</DialogTitle>
              <DialogDescription className="text-gray-600">
                Fill in the details to create a new form
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Form Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter the form name" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter the form description"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="process_flow_id"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Process Flow</FormLabel>
                        <FormControl>
                          <SelectComponent
                            field={field}
                            placeholder="Select a process flow"
                            options={['1t2y4ud73n', '2k3m5n8p0q']}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tag_id"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Tag</FormLabel>
                        <FormControl>
                          <SelectComponent
                            field={field}
                            placeholder="Select a tag"
                            options={['tag 1', 'tag 2']}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Create Form
                </Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>

        {formData.map((form: FormBuilderData) => (
          <div
            key={form.id}
            onClick={() => handleFormSelect(form.id)}
            className="cursor-pointer"
          >
            <FormCard
              formName={form.name}
              formStatus="Draft"
              dateCreated={new Date().toLocaleDateString()}
              formDescription={form.description || 'No description'}
              formId={form.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormBuilderDashboard;