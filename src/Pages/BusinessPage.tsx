import images from '../assets/index';
import { Badge } from '../Components/index';


const BusinessPage = () => {
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
    </div>
  );
}

export default BusinessPage;
