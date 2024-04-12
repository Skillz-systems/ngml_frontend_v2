import { Chart, StatisticDynamicCardTwo } from '../../Components/index';
import images from '../../assets/index';


const CustomerPageDetails = () => {

    const dataNNPC = [
        { month: 'Jan', 'Amount Sold': 100, Delivered: 80, Requests: 120, Revenue: 500 },
        { month: 'Feb', 'Amount Sold': 200, Delivered: 150, Requests: 180, Revenue: 800 },
        { month: 'Mar', 'Amount Sold': 150, Delivered: 120, Requests: 200, Revenue: 600 },
        { month: 'Apr', 'Amount Sold': 300, Delivered: 250, Requests: 280, Revenue: 1200 },
        { month: 'May', 'Amount Sold': 250, Delivered: 200, Requests: 320, Revenue: 1000 },
    ];

    const chartColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];

    return (
        <div className="grid grid-cols-1" >
            <div className="flex flex-col md:flex-row gap-6">
                <StatisticDynamicCardTwo
                    type='primary'
                    icon={<img src={images.firewood} alt="firewood icon" width='30px' />}
                    value={0}
                    yearOptions={[2021, 2022, 2023]}
                    content="Consumed Volume"
                    subcontent="(Scf)"
                    className="w-full md:w-[50%]"
                    iconColor="#ffff"
                />
                <StatisticDynamicCardTwo
                    type='secondary'
                    icon={<img src={images.firewood2} alt="firewood2 icon" width='30px' />}
                    value={0}
                    content="Yesterday's Consumed Volume"
                    subcontent="(Scf)"
                    className="w-full md:w-[50%]"
                    iconColor="text-black"
                    contentColor='text-nnpc-100 text-[2xl]'
                    subcontentColor='text-nnpc-100'
                    valueColor='text-nnpc-100'
                />
            </div>

            <div className="mt-6 md:mt-0">
                <div className='mt-[28px]'>
                    <Chart
                        data={dataNNPC}
                        chartType="line"
                        yAxisLabel="NNPC"
                        xAxisDataKey="month"
                        colors={chartColors}
                        title='Customer Consumption Chart'
                    />
                </div>
            </div>
        </div>
    );
}

export default CustomerPageDetails;