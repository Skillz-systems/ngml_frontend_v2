import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GasConsumptionCertificate from '../../Components/GasConsumptionCertificate/GasConsumptionCertificate';
import images from '../../assets/index';

/**
 * InvoicePage Component
 * 
 * This component represents an invoice page that displays a document preview with pagination controls.
 * Users can navigate through the pages and perform actions such as rejecting the invoice, linking an invoice,
 * or closing the invoice page. The page contains details about the invoice, and an area to preview the document.
 * 
 * @component
 * @example
 * <InvoicePage />
 * 
 * @returns {JSX.Element} - The rendered InvoicePage component.
 */

const InvoicePage: React.FC = () => {


    // Hooks and State
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 68;

    // Page Navigation Handlers
    /**
     * Go to the next page if it exists.
     */
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    };

    /**
    * Go to the previous page if it exists.
    */
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Close Handler
    /**
     * Close the invoice page and navigate back.
     */
    const handleClose = () => {
        navigate(-1)
    };

    return (
        <div className="w-full h-full">
            <div className="w-full h-fit pt-8 bg-[#FFFFFF] bg-opacity-50 rounded-lg">
                <div className="flex flex-col items-center justify-between px-8 mb-6 sm:flex-row">
                    <div className="text-center text-3xl text-[#49526A] font-semibold">October Invoice Advice</div>
                    <div className="flex items-center gap-2">
                        <div className="px-2 py-1 border rounded-3xl">
                            <div className="text-[#49526A] text-base font-normal">Reject Invoice Advice</div>
                        </div>
                        <div className="px-2 py-1 border rounded-3xl">
                            <div className="text-[#49526A] text-base font-normal">Link Invoice</div>
                        </div>
                        <div className="flex items-center justify-center gap-1 p-2 border cursor-pointer rounded-3xl" onClick={handleClose}>
                            <div className="flex items-center justify-center w-4 h-4">
                                <img src={images.cancel} alt="close icon" width={'10px'} />
                            </div>
                            <div className="text-center text-[#808080] text-xs font-normal">Close</div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between w-full px-5 py-2 bg-nnpc-50">
                    <div className="text-[#49526A] text-sm font-semibold">DETAILS</div>
                    <div className="text-[#49526A] text-sm font-semibold">DOCUMENT PREVIEW</div>
                </div>

                <div className="flex flex-col w-full h-full sm:flex-row">
                    <div className="w-full p-4 space-y-4 border-r">
                        <div className="flex items-center justify-between w-full p-2 border rounded-lg">
                            <div className="p-1 bg-[#EAEEF2] rounded-sm">
                                <div className="text-center text-[#49526A] text-xs font-semibold">MONTH</div>
                            </div>
                            <div className="text-center text-[#49526A] text-xs font-normal">October</div>
                        </div>
                        <div className="flex items-center justify-between w-full p-2 border rounded-lg">
                            <div className="p-1 bg-[#EAEEF2] rounded-sm">
                                <div className="text-xs font-semibold text-center">Generated on</div>
                            </div>
                            <div className="text-xs font-semibold text-center">03/Nov/2023</div>
                        </div>
                    </div>
                    <div className="w-full p-4 bg-[#FFFFFF] rounded-xl flex justify-center">
                        <img className="relative w-full h-full border rounded-xl" src={`https://via.placeholder.com/706x1000?text=Page+${currentPage}`} />
                    </div>
                    <div className="flex justify-center">
                        <div className="h-12 border-l">
                            <div className="flex items-center justify-between p-2 border-b">
                                <div className="text-[#49526A] text-xs font-semibold">Page {currentPage} of {totalPages} showing</div>
                                <div className="flex items-center gap-2">
                                    <button
                                        className="w-8 h-8 p-2.5 rounded-3xl border flex-col justify-center items-center gap-2.5 inline-flex"
                                        onClick={handlePreviousPage}
                                        disabled={currentPage <= 1}
                                    >
                                        <div className="w-4 h-4">
                                            <img src={images.leftarrow} alt='left arrow icon' />
                                        </div>
                                    </button>
                                    <button
                                        className="w-8 h-8 p-2.5 rounded-3xl border flex-col justify-center items-center gap-2.5 inline-flex"
                                        onClick={handleNextPage}
                                        disabled={currentPage >= totalPages}
                                    >
                                        <div className="w-4 h-4">
                                            <img src={images.rightarrow} alt='right arrow icon' />
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="flex-col w-full border-l md:w-60">
                                <div className="flex flex-row h-full p-4 space-y-3 sm:flex-col">
                                    {[1, 2, 3, 4, 5].map(page => (
                                        <div key={page} className="h-full">
                                            <div className="text-[#808080] text-xs font-normal">Page {page}</div>
                                            <img className="h-full p-2.5 rounded-lg border" src={`https://via.placeholder.com/202x280?text=Page+${page}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvoicePage;