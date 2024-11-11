import React, { useState } from 'react';
import Modal from '../Modal/Modal';

interface DollarConversionRateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRateSave: (rate: string) => void; 
}

const DollarConversionRateModal: React.FC<DollarConversionRateModalProps> = ({ isOpen, onClose, onRateSave }) => {
  const [rate, setRate] = useState('');

  const handleSave = () => {
    onRateSave(rate); 
    onClose(); 
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Monthly Dollar Conversion Rate"
      subTitle="Enter the average monthly dollar rate"
      buttons={[
        <button key="save" onClick={handleSave} className="bg-green-600 text-white px-6 py-2 rounded-md">
          Save
        </button>,
        <button key="cancel" onClick={onClose} className="border text-white px-3 py-2 rounded-md">
          Cancel
        </button>,
      ]}
    >
      <div className="p-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Dollar Rate</label>
        <input
          type="number"
          className="w-full border border-gray-300 p-2 rounded-md"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="Enter rate (e.g., 750)"
        />
      </div>
    </Modal>
  );
};

export default DollarConversionRateModal;
