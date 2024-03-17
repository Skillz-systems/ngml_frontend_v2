import { useState } from 'react';
import { FileType } from './Components/Fileuploadinput/FileTypes';

import Button from './Components/ButtonComponent/Button';
import FileUploadInput from './Components/Fileuploadinput/FileUploadInput';
import Modal from './Components/Modal/Modal';
import PasswordResetPage from './Pages/Passwordreset/PasswordResetPage';


// import StatisticRectangleCard from "./Components/Statisticrectanclecard/StatisticRectangleCard";
// import Records from '/assets/png-icons/Records.png'
// import Warning from '/assets/png-icons/Warning.png'
// import Staff from '/assets/png-icons/Staff.png'

function App() {


  // const [searchResults, setSearchResults] = useState<string[]>([]);

  // const handleSearch = (query: string) => {
  //     // Perform search operation here, for example, update searchResults state
  //     console.log("Performing search for:", query);
  // };
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <div className="">
        <p className="">Vite and React</p>
      </div> */}

      {/* <div style={{ paddingTop: '40px', marginBottom: '20px' }}>
        <SearchComponent />
      </div> */}
      {/* <div className="flex gap-8 items-center justify-center">
        <StatisticRectangleCard
          icon={<img src={Records} alt='Records' />}
          title="Contracts Created"
          backgroundColor="bg-white"
          valueColor="text-green-700"
          color="text-gray-900"
          size="w-96"
          iconBgColor="bg-green-600 rounded-[7px]"
          iconSize="w-5"
          value="227"
        />
        <StatisticRectangleCard
          icon={<img src={Warning} alt='Warning' />}
          title="Processing Contracts"
          backgroundColor="bg-customYellow"
          color="text-gray-900"
          size="w-96"
          iconBgColor="bg-red-200 rounded-full"
        />
        <StatisticRectangleCard
          icon={<img src={Staff} alt='Staff' />}
          title="Un-verified Staff"
          backgroundColor="bg-white"
          valueColor="text-gray-600"
          color="text-gray-400"
          size="w-72"
          iconBgColor="bg-green-400 rounded-[7px]"
          iconSize="w-5"
          value="2,305"
        />
      </div> */}
      {/* <div className="flex justify-center">
       <div className="w-[500px]">
      <ActivityLogCard 
        title="EOI REQUEST"
        text="Alberta Corporation Limited just sent in an EOI Request."
        dateTime={new Date()}
      />
      <ActivityLogCard 
        title="EOI REQUEST"
        text="Ayolla Obasanjo just approved the Aberta Corporation EOI Request."
        dateTime={new Date()}
      />
      <ActivityLogCard 
        title="SITE VISIT"
        text="Johnson Alaba has updated the site survey findings."
        dateTime={new Date()}
      />
      <ActivityLogCard 
        title="SITE VISIT"
        text="GET Technologies has picked a survey date."
        dateTime={new Date()}
      />
      <ActivityLogCard 
        title="DCQ"
        text="Benjamin Ayodele just updated the DCQ."
        dateTime={new Date()}
        button={<button className="bg-green-600 hover:bg-gray-100 text-white font-bold py-1 px-8 rounded-[30px]">View Request</button>}
      />
    </div>
    </div> */}
      {/* <ActivityLogCardContainer
        size="550px"
        heading="Recent Activity"
        icon={Rightarrow}
        headingBgColor="bg-gray-100"
      />
      <div className="mt-[40px]">
        <ActivityLogCardContainerWithButton
          size="full"
          heading="Recent Activity"
          icon={Rightarrow}
          headingBgColor="bg-customWhite"
        />
      </div> */}

      {/* <div className="">
        <div className="flex justify-center gap-[20px] w-[700px]">
          <DocumentCard
            type="withLink"
            icon="/assets/png-icons/Records.png"
            title="Dangote Cement"
            subtitle="October Invoice Advice"
            linkText="Invoice"
            linkText2="LINKED"
          />
          <DocumentCard
            type="withoutLink"
            icon={Records}
            title="Chicken Republic Ltd"
            subtitle="October Invoice Advice"
          />
          <DocumentCard
            type="withReport"
            icon="/assets/png-icons/Customers.png"
            title="Customers"
          />
        </div>
      </div> */}
      {/* <div className="mb-8">
        <FileUploadInput 
        maxSizeMB={1} 
        required title="Passport Photograph" 
        fileType={[FileType.JPEG, FileType.PNG]} 
        fileDescription='Scan the copy of your original document (pdf, png, jpg)'
        />
      </div>
      <div className="mb-8">
        <FileUploadInput 
        maxSizeMB={3} 
        required title="NYSC Certificate" 
        fileType={[FileType.PDF, FileType.DOCX]}
        fileDescription='Scan the copy of your original document (pdf, png, jpg, jpeng, word)'
        />
      </div> */}
      {/* <SearchInput
                onSearch={handleSearch}
                className="mt-4"
            />
            <ul>
                {searchResults.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul> */}
      <div className="flex justify-center items-center h-screen">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={toggleModal}
        >
          Open Modal
        </button>
        <Modal isOpen={isOpen} onClose={toggleModal}
          title="Create New Customer"
          subTitle='Only use this method if the customer is already an existing customer of NGML'
          size="medium"
          buttons={[
            <Button
              key="cancelButton"
              type="outline"
              label="Cancel"
              action={toggleModal}
              width="7rem"
              radius='20px'
              height='40px'
              color='white'
              backgroundColor='#ff0800'

            />,
            <Button
              key="submitButton"
              type="outline"
              label="Create Customer"
              action={toggleModal}
              width="16rem"
              radius='20px'
              height='40px'
              backgroundColor='white'
            />,
          ]}
        >
          {/* Your content goes here */}
          <FileUploadInput
            maxSizeMB={1}
            required title="Passport Photograph"
            fileType={[FileType.JPEG, FileType.PNG]}
            fileDescription='Scan the copy of your original document (pdf, png, jpg)'
          />
          <p>This is the content of the modal.</p>
        </Modal>
      </div>
    </>
  );
}

export default App;
