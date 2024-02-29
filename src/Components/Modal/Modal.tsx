import React, { FC, ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: 'small' | 'medium' | 'large'; // optional size prop
  title: string;
  subTitle?: string;
  buttons?: ReactNode[]; // Custom buttons array
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  size = 'medium',
  title,
  subTitle,
  buttons = [],
  children,
}) => {
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'max-w-sm';
      case 'large':
        return 'max-w-3xl';
      default:
        return 'max-w-md';
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
          <div className="relative z-50 w-full max-h-screen overflow-auto bg-opacity-50">
            <div
              className={`relative z-50 mx-auto bg-white shadow-lg rounded-[20px] ${getSizeClass()}`}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="p-6">
                <div className="mb-4">
                  <h2 id="modal-headline" className="text-lg font-semibold text-center">
                    {title}
                  </h2>
                  <h3 id="modal-headline" className="text-sm text-gray-300 text-center">
                    {subTitle}
                  </h3>
                </div>
                <div className="">{children}</div>
              </div>
              <div className="relative">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white w-10 h-4 -rotate-45"></div>
              </div>
              <div className="bg-green-500 p-6 rounded-b-[20px]">
                <div className="flex justify-end">
                  {buttons.map((button, index) => (
                    <div key={index} className="mr-2">
                      {button}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;