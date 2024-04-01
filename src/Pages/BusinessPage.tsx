import images from '../assets/index';
import { Badge, Chart, Heading } from '../Components/index';
import { getColorNames, getColorShades, getShadeNames, useColor } from '../Utils/colors';



const BusinessPage = () => {

  const primaryColor = useColor('nnpc', 500); // returns '#EC0000'
  const nncpShades = getColorShades('nnpc'); // returns { 100: '#00af50', 200: '#226844', ... }
  const colorNames = getColorNames(); // returns ['nnpc', 'gray', 'medium', 'dark', 'light', 'red', 'yellow']
  const mediumShadeNames = getShadeNames('medium'); // returns ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']
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
          title='Customer Consumption Chart'
        />

        <h2 className="text-2xl font-bold mb-4 mt-8">Line Chart</h2>
        <Chart
          data={dataNNPC}
          chartType="line"
          yAxisLabel="NNPC"
          xAxisDataKey="month"
          colors={chartColors}
          title='P & L for NNPC'
        />
        <Chart
          data={dataNNPC}
          chartType="area"
          yAxisLabel="NNPC"
          xAxisDataKey="month"
          colors={chartColors}
          title='Customer Consumption Chart'
        />
        <Chart
          data={[]}
          chartType="bar"
          yAxisLabel="NNPC"
          xAxisDataKey="month"
          colors={chartColors}
          title='NO DATA Chart'
        />
      </div>
    </div>
  );
}

export default BusinessPage;

