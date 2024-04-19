import InfoCard from '@/Components/InfoCardComponent/InfoCardComponent';
import { Button, CustomerListTable, Heading,  StatisticRectangleCard } from '../../Components/index';
import images from '../../assets/index';

const SuppliersPage: React.FC = () => {
   
   

    return (
        <div className="">
            <div className=' mr-[25px]'>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <Heading as="h4" size="h4" color='primaryColor' className="font-semibold text-gray-600">SUPPLIERS</Heading>
                    <div className='flex gap-[16px]'>
                    <Button
                        type='outline'
                        label='Create PDF'
                        radius='20px'
                        width='120px'
                        height='30px'
                        fontSize='10px'
                        action={() => {}}
                    />
                    <Button
                        type='outline'
                        label='New Supplier'
                        radius='20px'
                        width='120px'
                        height='30px'
                        fontSize='10px'
                        action={() => {}}

                    />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center gap-4 mt-6 ' >
                    <StatisticRectangleCard
                        title='Suppliers'
                        icon={<img src={images.customers} alt="staff icon" />}
                        value='9'
                        valueColor='text-nnpcmediumgreen-700'
                        iconBgColor='rounded-[5px] bg-nnpcmediumgreen-500'
                    />
                    <StatisticRectangleCard
                        title='Active Suppliers'
                        icon={<img src={images.customers} alt="staff icon" />}
                        value='9'
                        valueColor='text-black'
                        iconBgColor='bg-nnpc-50 rounded-[5px]'
                    />
                    <StatisticRectangleCard
                        title='Processing Suppliers'
                        icon={<img src={images.warning} alt="staff icon" />}
                        value='2'
                        valueColor='text-green-800'
                        backgroundColor='bg-nnpc-600'
                        iconBgColor='rounded-full bg-nnpc-700'
                    />
                </div>
            </div>
            <div className='mt-[20px] flex'>
                <InfoCard title={'YOOO GIRL'} number={'666'}/>
                <InfoCard title={'YOOO GIRL'} number={'666'}/>
            </div>
         
            <div className='w-full mt-10'>
                <CustomerListTable />
            </div>
        </div>
    );
};

export default SuppliersPage;