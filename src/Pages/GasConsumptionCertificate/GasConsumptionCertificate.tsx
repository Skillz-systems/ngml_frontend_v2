import React, { useState } from 'react';
import images from '../../assets/index';

interface GasConsumptionCertificateProps {
    refNumber: string;
    date: string;
    certificateNumber: string;
    department: string;
    buyerName: string;
    period: string;
    gasQuantity: string;
    initialBuyerRepName: string;
    initialSellerRepName: string;
}

const GasConsumptionCertificate: React.FC<GasConsumptionCertificateProps> = ({
    refNumber,
    date,
    certificateNumber,
    department,
    buyerName,
    period,
    gasQuantity,
    initialBuyerRepName,
    initialSellerRepName,
}) => {
    const [buyerRepName, setBuyerRepName] = useState(initialBuyerRepName);
    const [buyerSignature, setBuyerSignature] = useState('');
    const [buyerDate, setBuyerDate] = useState('');

    const [sellerRepName, setSellerRepName] = useState(initialSellerRepName);
    const [sellerSignature, setSellerSignature] = useState('');
    const [sellerDate, setSellerDate] = useState('');

    return (
        <div className="max-w-4xl mx-auto p-8 border border-gray-400">
            {/* Header */}
            <div className="flex justify-between mb-8">
                <div className="w-1/4 flex">
                    <img src={images.nnpc} alt="Logo" className="w-20 h-20" />
                    <div className="mt-10">
                        <div className="font-semibold">NNPC</div>
                        <div className="text-[5px]">Gas Marketing Limited</div>
                    </div>
                </div>
                <div className="text-right mt-20">
                    <p><span className="font-bold">Ref:</span> {refNumber}</p>
                    <p><span className="font-bold">Date:</span> {date}</p>
                </div>
            </div>

            {/* Certificate Information */}
            <div className="mb-8">
                <p className="uppercase font-bold">{certificateNumber}</p>
                <p className="uppercase font-bold">NGML/GDD/009</p>
            </div>

            <h1 className="text-center text-2xl font-bold mb-8 uppercase">Gas Consumption Certificate</h1>

            <div className="space-y-4">
                <div className="flex">
                    <span className="w-1/3 font-bold uppercase">Department:</span>
                    <span className="w-2/3 uppercase">{department}</span>
                </div>

                <div className="flex">
                    <span className="w-1/3 font-bold uppercase">Buyer’s Name:</span>
                    <span className="w-2/3 uppercase">{buyerName}</span>
                </div>

                <div className="flex">
                    <span className="w-1/3 font-bold uppercase">Period:</span>
                    <span className="w-2/3 uppercase">{period}</span>
                </div>
                <div className="flex">
                    <span className="w-1/3 font-bold mt-2">QUANTITY OF GAS:</span>
                    <span className="w-2/3 font-bold text-[25px] ml-[-20px]">{gasQuantity}</span>
                </div>
            </div>

            {/* Buyer’s Representative */}
            <div className="mt-8">
                <h2 className="font-bold">CERTIFIED BY (BUYER'S REPRESENTATIVE)</h2>
                <div className="space-y-4 mt-4">
                    <div className="flex">
                        <span className="w-1/3 font-bold">NAME:</span>
                        <input
                            type="text"
                            value={buyerRepName}
                            onChange={(e) => setBuyerRepName(e.target.value)}
                            className="w-2/3 border-b border-black"
                        />
                    </div>

                    <div className="flex">
                        <span className="w-1/3 font-bold">SIGNATURE:</span>
                        <input
                            type="text"
                            value={buyerSignature}
                            onChange={(e) => setBuyerSignature(e.target.value)}
                            className="w-2/3 border-b border-black"
                        />
                    </div>

                    <div className="flex">
                        <span className="w-1/3 font-bold">DATE:</span>
                        <input
                            type="date"
                            value={buyerDate}
                            onChange={(e) => setBuyerDate(e.target.value)}
                            className="w-2/3 border-b border-black"
                        />
                    </div>
                </div>
            </div>

            {/* Seller’s Representative */}
            <div className="mt-8">
                <h2 className="font-bold">CERTIFIED BY (SELLER'S REPRESENTATIVE)</h2>
                <div className="space-y-4 mt-4">
                    <div className="flex">
                        <span className="w-1/3 font-bold">NAME:</span>
                        <input
                            type="text"
                            value={sellerRepName}
                            onChange={(e) => setSellerRepName(e.target.value)}
                            className="w-2/3 border-b border-black"
                        />
                    </div>

                    <div className="flex">
                        <span className="w-1/3 font-bold">SIGNATURE:</span>
                        <input
                            type="text"
                            value={sellerSignature}
                            onChange={(e) => setSellerSignature(e.target.value)}
                            className="w-2/3 border-b border-black"
                        />
                    </div>

                    <div className="flex">
                        <span className="w-1/3 font-bold">DATE:</span>
                        <input
                            type="date"
                            value={sellerDate}
                            onChange={(e) => setSellerDate(e.target.value)}
                            className="w-2/3 border-b border-black"
                        />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-60">
                <p>www.nnpcgroup.com</p>
                <p>NGML Head Office: No. 1, Odin Road Ekpan, Warri, P.M.B. 1288, Delta State</p>
                <p>Tel: 2348039056001</p>
            </div>
        </div>
    );
};

export default GasConsumptionCertificate;