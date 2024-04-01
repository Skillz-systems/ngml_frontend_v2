import images from '../assets/index';
import { Badge, Heading } from '../Components/index';
import { getColorNames, getColorShades, getShadeNames, useColor } from '../Utils/colors';

const BusinessPage = () => {

  const primaryColor = useColor('nnpc', 500); // returns '#EC0000'
  const nncpShades = getColorShades('nnpc'); // returns { 100: '#00af50', 200: '#226844', ... }
  const colorNames = getColorNames(); // returns ['nnpc', 'gray', 'medium', 'dark', 'light', 'red', 'yellow']
  const mediumShadeNames = getShadeNames('medium'); // returns ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']
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
    </div>
  );
}

export default BusinessPage;
