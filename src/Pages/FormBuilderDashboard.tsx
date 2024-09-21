import { Button } from '@/Components/FormBuilderComponents/ButtonComponent';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/Components/FormBuilderComponents/DialogComponent';
import FormCard from '@/Components/FormBuilderComponents/FormCard';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/Components/FormBuilderComponents/FormComponent';
import { Input } from '@/Components/FormBuilderComponents/InputComponent';
import SelectComponent from '@/Components/FormBuilderComponents/SelectComponent';
import { Textarea } from '@/Components/FormBuilderComponents/TextAreaComponent';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowBack } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsFileEarmarkPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { FormProps } from '../Data';
import { fetchForms } from '../services/formbuilder';

const FormBuilderDashboard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  // const navigate = useNavigate()

  const [data, setData] = useState<FormProps[] | null>(null);
  const [, setLoading] = useState<boolean>(true);
  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        setLoading(true);
        const result = await fetchForms();
        setData(result.data);

        console.log(result)

      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromAPI();
  }, []);



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

    // navigate('/create-form/new')
    setIsDialogOpen(false);
  }

  return (
    <div>
      <Link to={'/admin/settings'}>
        <div className='flex justify-center items-center border-2 h-[32px] w-[32px] rounded-[50%]'>
          <ArrowBack color="success" style={{ fontSize: 'medium' }} />
        </div>
      </Link>
      <div className="p-4 md:p-5">
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

          <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-4 md:justify-start md:gap-4 lg:gap-6">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger className="group w-[100%] md:w-[340px] bg-white px-6 border-[1.5px] border-dashed hover:border-solid hover:border-dark-green h-[200px] md:h-[190px] items-center justify-center flex flex-col gap-4 rounded-lg">
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

            {data && data.map((form) => (
              <FormCard
                key={form.id}
                formName={form.name}
                formStatus={'Draft'}
                dateCreated={'1 day ago'}
                formDescription={`
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                   minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                   aliquip ex ea commodo consequat.`}
                formId={0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default FormBuilderDashboard;
