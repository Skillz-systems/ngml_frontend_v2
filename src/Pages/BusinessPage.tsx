import images from '../assets/index';
import { Badge, Chart, Heading } from '../Components/index';
import { getColorNames, getColorShades, getShadeNames, useColor } from '../Utils/colors';



const BusinessPage = () => {

  const primaryColor = useColor('nnpc', 500); // returns '#EC0000'
  const nncpShades = getColorShades('nnpc'); // returns { 100: '#00af50', 200: '#226844', ... }
  const colorNames = getColorNames(); // returns ['nnpc', 'gray', 'medium', 'dark', 'light', 'red', 'yellow']
  const mediumShadeNames = getShadeNames('medium'); // returns ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']


  interface ChartData {
    name: string; // Category/label for the data point
    value: number;
    dataset?: string; // Optional property for dataset name
  }

  const sampleData: ChartData[] = [
    { name: 'Jan', value: 120, dataset: 'Sales' },
    {
      name: 'Feb', value: 150, dataset: 'Sales'
    },
    { name: 'Mar', value: 100, dataset: 'Sales' },
    { name: 'Jan', value: 80, dataset: 'Expenses' },


  ];

  const data = [
    {
      'name': 'Page A',
      'uv': 4000,
      'pv': 2400,
      'amt': 2400
    },
    {
      'name': 'Page B',
      'uv': 3000,
      'pv': 1398,
      'amt': 2210
    },
    {
      'name': 'Page C',
      'uv': 2000,
      'pv': 9800,
      'amt': 2290
    },
    {
      'name': 'Page D',
      'uv': 2780,
      'pv': 3908,
      'amt': 2000
    },
    {
      'name': 'Page E',
      'uv': 1890,
      'pv': 4800,
      'amt': 2181
    },
    {
      'name': 'Page F',
      'uv': 2390,
      'pv': 3800,
      'amt': 2500
    },
    {
      'name': 'Page G',
      'uv': 3490,
      'pv': 4300,
      'amt': 2100
    }
  ]

  const dataTwo = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
      dataKey: 'jan', // added dataKey to identify which data attribute to use
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
      dataKey: 'feb', // added dataKey to identify which data attribute to use
    },
    // Add more data objects as needed
  ];

  const chartcolors = ['#8884d8', '#82ca9d', '#ff7f0e', '#ff0000', '#00ff00', '#0000ff']; // Add more colors as needed


  const dataSet = [
    { month: 'Jan', 'Amount Sold': 100, Delivered: 80, Requests: 120, Revenue: 500 },
    { month: 'Feb', 'Amount Sold': 200, Delivered: 150, Requests: 180, Revenue: 800 },
    { month: 'Mar', 'Amount Sold': 150, Delivered: 120, Requests: 200, Revenue: 600 },
    { month: 'Apr', 'Amount Sold': 300, Delivered: 250, Requests: 280, Revenue: 1200 },
    { month: 'May', 'Amount Sold': 250, Delivered: 200, Requests: 320, Revenue: 1000 },
  ];

  const configs = [
    { dataKey: 'Amount Sold', type: 'bar', color: '#8884d8' },
    { dataKey: 'Delivered', type: 'bar', color: '#82ca9d' },
    { dataKey: 'Requests', type: 'bar', color: '#ffc658' },
    { dataKey: 'Revenue', type: 'bar', color: '#ff7300' },
  ];


  const dataNNPC = [
    { month: 'Jan', 'Amount Sold': 100, Delivered: 80, Requests: 120, Revenue: 500 },
    { month: 'Feb', 'Amount Sold': 200, Delivered: 150, Requests: 180, Revenue: 800 },
    { month: 'Mar', 'Amount Sold': 150, Delivered: 120, Requests: 200, Revenue: 600 },
    { month: 'Apr', 'Amount Sold': 300, Delivered: 250, Requests: 280, Revenue: 1200 },
    { month: 'May', 'Amount Sold': 250, Delivered: 200, Requests: 320, Revenue: 1000 },
  ];

  const chartColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];
  return (
    <div>
      BusinessPage !!!

      <img src={images.nnpclogo} alt="logo" />
      <Badge type='primary'
        label='Dangote sugar'
        width='130px'
        height='40px'
        fontSize='16px'
        radius='8px'
        fontWeight='bold' />

      <div>
        <Heading as="h1" size="h2" className='italic'>
          This is a Heading <span className='text-medium-400'>Inside Heading Element</span>
        </Heading>
        <Heading as="div" size="h4" className='text-medium-400'>
          This is a Heading
        </Heading>
        <h1 style={{ color: primaryColor }}>Heading</h1>
        <p>NNPC Shades: {JSON.stringify(nncpShades)}</p>
        <p>Color Names: {colorNames.join(', ')}</p>
        <p>Medium Shade Names: {mediumShadeNames.join(', ')}</p>
      </div>

      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Bar Chart</h2>
        <Chart
          data={dataNNPC}
          chartType="bar"
          xAxisDataKey="month"
          yAxisLabel="NNPC"
          colors={chartColors}
        />

        <h2 className="text-2xl font-bold mb-4 mt-8">Line Chart</h2>
        <Chart
          data={dataNNPC}
          chartType="line"
          yAxisLabel="NNPC"
          xAxisDataKey="month"
          colors={chartColors}
        />
      </div>
      {/* <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Composed Chart</h2>
        <Chart data={dataSet} configs={configs} xAxisDataKey="month" />
      </div> */}
      {/* <Chart data={dataTwo} chartType="line" xAxisLabel="Month" colors={chartcolors} />
      <Chart data={sampleData} chartType="bars" xAxisLabel="Month" yAxisLabel="Sales" /> */}
    </div>
  );
}

export default BusinessPage;

