// import LinechartContent from './Components/ChartComponent/LinechartContent.jsx'

import AgreementTemplate from './Components/AgreementTemplateComponent/AgreementTemplate';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';



function App() {


  return (
    <>
      <div className="">
        <p className="">Vite and React</p>
      </div>

      <div style={{ paddingTop: '40px', marginBottom: '20px' }}>
        {/* <LinechartContent/> */}

        <AgreementTemplate
          icon={<StickyNote2OutlinedIcon />}
          heading="GSPA"
          title="Agreement"
          modalTitle="Agreement Template"
          modalContent={<p>
            This is a dynamic content for the modal. 
            This is a dynamic content for the modal. 
            This is a dynamic content for the modal. 
            This is a dynamic content for the modal.
            This is a dynamic content for the modal.
            This is a dynamic content for the modal.
            This is a dynamic content for the modal.
            This is a dynamic content for the modal.
            This is a dynamic content for the modal.
            This is a dynamic content for the modal.
            This is a dynamic content for the modal.
            This is a dynamic content for the modal.
            </p>}
        />

      </div>

    </>
  );
}

export default App;
