import logo from '@/assets/images/png-icons/Done.png'; // Ensure this path is correct
import { FC, ReactNode } from 'react';

interface ActionModalProps {
    isOpen: boolean;
    onClose: () => void;
    size?: 'small' | 'medium' | 'large';
    title: string;
    subTitle?: string;
    button?: ReactNode;
}

const ActionModal: FC<ActionModalProps> = ({
    isOpen,
    size = 'medium',
    title,
    subTitle,
    button,
}) => {
    const getSizeClass = () => {
        switch (size) {
            case 'small':
                return 'max-w-xs h-[75%]';
            case 'large':
                return 'max-w-lg h-[90%]';
            default:
                return 'max-w-sm h-[80%]';
        }
    };

    return (
        <>
            {isOpen && (
                <>
                    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-visible outline-none">
                        <div className="absolute inset-0 bg-black opacity-20"></div>
                        <div className="relative z-50 w-full max-h-screen overflow-visible">
                            <div
                                className={`relative z-50 mx-auto bg-white shadow-lg rounded-[20px] ${getSizeClass()} pt-16`}
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="modal-headline"
                            >
                                {/* Done Image Container */}
                                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-60">
                                    <div className="w-28 h-28 rounded-full bg-green-200 flex items-center justify-center shadow-md">
                                        <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center shadow-md">
                                            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md">
                                                <img src={logo} alt="done logo" className="w-12 h-12" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 pt-10">
                                    <div className="overflow-y-auto max-h-96">
                                        <h2 id="modal-headline" className="text-lg font-semibold text-center mt-4">
                                            {title}
                                        </h2>
                                        {subTitle && (
                                            <h3 className="text-sm text-gray-300 text-center">
                                                {subTitle}
                                            </h3>
                                        )}
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 bg-white w-4 h-4 -rotate-45"></div>
                                </div>
                                <div className="bg-green-500 px-20 py-4 rounded-b-[20px]">
                                    <div className="flex justify-center">
                                        {button}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default ActionModal;