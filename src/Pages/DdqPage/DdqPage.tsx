import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, DocumentCard, Modal } from '../../Components/index';
import images from '../../assets/index';
import CustomerDdqViewEditPage from '../Customer/CustomerDdqViewEditPage/CustomerDdqViewEditPage';
import EditDdqPage from './EditDdqPage';

const DdqPage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [companyData, setCompanyData] = useState({
        companyName: '',
        rcNumber: '',
        natureOfBusiness: '',
        companyTelephoneNumber: '',
        companyMobileNumber: '',
        email: '',
        website: '',
        companyAddress: '',
        contactName: '',
        contactTelephone: '',
        contactEmail: '',
        contactAddress: '',
        title: '',
        firstName: '',
        otherName: '',
        lastName: '',
        phoneNumber: '',
        companyPosition: '',
        titlePlus: '',
        firstNamePlus: '',
        otherNamePlus: '',
        lastNamePlus: '',
        phoneNumberPlus: '',
        companyPositionPlus: '',
        jointVenture: ''
    });

    const [showDdq, setShowDdq] = useState(false)

    const navigate = useNavigate();
    const location = useLocation();

    const totalPages = 5;

    const generatePdf = async () => {
        const doc = new jsPDF('p', 'mm', 'a4');
        const element = document.getElementById('ddq-content');

        if (element) {
            const canvas = await html2canvas(element);
            const imgData = canvas.toDataURL('image/png');

            const imgWidth = 190;
            const pageHeight = 297;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            let heightLeft = imgHeight;
            let position = 10;

            doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            // Add additional pages if content exceeds one page
            while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            doc.save(`${companyData.companyName}_DDQ.pdf`);
        }
        setShowDdq(true);
    };

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const goToPreviousPage = () => {
        goToPage(currentPage - 1);
    };

    const goToNextPage = () => {
        goToPage(currentPage + 1);
    };

    const toggleModal = (open: boolean) => {
        setIsModalOpen(open);
        const searchParams = new URLSearchParams(location.search);

        if (open) {
            searchParams.set('editDdq', 'true');
        } else {
            searchParams.delete('editDdq');
        }

        navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
    };

    const handleEditButtonClick = () => {
        toggleModal(true);
    };

    const handlesaveAndContinue = () => {
        console.log('Creating company data:', companyData);
        toggleModal(false);
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const editDdq = searchParams.get('editDdq');

        if (editDdq === 'true') {
            setIsModalOpen(true);
        }
    }, [location.search]);

    return (
        <div className='bg-[#FFFFFF] p-4 rounded-xl'>
            <div className="rounded-xl border flex-col justify-start items-start bg-[#FFFFFF]">
                <div className="w-full h-[60px] px-3 py-2.5 bg-dark-50 border-b justify-between items-center flex">
                    <div className="text text-xl font-bold font-['Mulish'] leading-tight">Due Diligence Questionnaire</div>
                    <div className="px-4 py-2 rounded-[32px] border justify-center items-center gap-2.5 flex">
                        <div className="w-4 h-4 justify-center items-center flex">
                            <div className="w-4 h-4 p-[0.83px] justify-center items-center inline-flex cursor-pointer"><img src={images.edit} alt='icon' /></div>
                        </div>
                        <div className="text-base font-normal font-['Mulish'] leading-none tracking-tight cursor-pointer" onClick={handleEditButtonClick}>Edit DDQ</div>
                    </div>
                </div>
                <div className="bg-dark-50 justify-between items-start flex flex-col sm:flex-row">
                    <div className="w-full p-4 bg-dark-50 flex-col justify-start items-center border-r cursor-pointer" onClick={generatePdf}>
                        <DocumentCard
                            type="withoutLink"
                            title="Dangote Cement LTD"
                            subtitle="DDQ"
                            linkText="Last Updated"
                            linkText2="12/13/2023"
                            icon={<img src={images.files} alt="Copy Icon" className="w-5 h-5" />}
                            width="200px"
                            height="100%"
                        />
                        <div className="w-full p-2 mt-4 rounded-xl border justify-between items-center inline-flex">
                            <div className="text-slate-400 text-xs font-normal font-['Mulish'] leading-3">Page {currentPage} of {totalPages} showing</div>
                            <div className="justify-end items-center gap-2 flex">
                                <button
                                    onClick={goToPreviousPage}
                                    disabled={currentPage === 1}
                                    className={`w-8 h-8 p-2.5 rounded-[40px] border border-dark-100 flex-col justify-center items-center gap-2.5 inline-flex ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                                        }`}
                                >
                                    <img src={images.leftarrow} alt='icon1' />
                                </button>
                                <button
                                    onClick={goToNextPage}
                                    disabled={currentPage === totalPages}
                                    className={`w-8 h-8 p-2.5 rounded-[40px] border flex-col justify-center items-center gap-2.5 inline-flex ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                                        }`}
                                >
                                    <img src={images.rightarrow} alt='icon2' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => toggleModal(false)}
                    title="OWNERSHIP AND MANAGEMENT"
                    buttons={[
                        <div className='flex gap-2 mb-[-10px]'>
                            <div className='w-[120px]'>
                                <Button
                                    type="outline"
                                    label="Save and Close"
                                    action={() => toggleModal(false)}
                                    color="#FFFFFF"
                                    fontStyle="italic"
                                    width="100%"
                                    height="40px"
                                    fontSize="16px"
                                    radius="20px"
                                />
                            </div>
                            <div className='w-[260px]'>
                                <Button
                                    type="secondary"
                                    label="Save and Continue"
                                    action={handlesaveAndContinue}
                                    color="#FFFFFF"
                                    fontStyle="italic"
                                    width="100%"
                                    height="40px"
                                    fontSize="16px"
                                    radius="20px"
                                />
                            </div>
                        </div>
                    ]}
                >
                    <EditDdqPage companyData={companyData}
                        setCompanyData={setCompanyData} />
                </Modal>
            </div>
            {showDdq &&
                <div id="ddq-content">
                    <CustomerDdqViewEditPage companyData={companyData} />
                </div>
            }
        </div>
    );
};

export default DdqPage;