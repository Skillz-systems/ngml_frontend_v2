import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TabCustomer } from '../../Components/index';
import images from '../../assets/index';

interface Tab {
    name: string;
    ref: string;
    sublist?: Tab[]; // Add sublist property to Tab interface
}

interface TabContent {
    [key: string]: JSX.Element;
}

interface TabLayoutProps {
    title: string;
    width?: string;
    height?: string;
    backgroundColor?: string;
    color?: string;
    borderColor?: string;
    borderWidth?: string;
    borderRadius?: string;
    tablist: Tab[];
    tabContent: TabContent;
    showButtons?: boolean;
    // activeTab: string;
    // setActiveTab: (tab: string) => void;
    onUpdate?: (activeTab: string) => void;
}

const TabLayout: React.FC<TabLayoutProps> = ({
    title,
    width,
    height,
    backgroundColor,
    color,
    borderColor,
    borderWidth,
    borderRadius,
    tablist,
    tabContent,
    onUpdate,
    showButtons = true,
}) => {

    const [activeTab, setActiveTab] = useState<string>('')

    const navigate = useNavigate();

    const handleUpdate = () => {
        console.log('Updating content for tab:', activeTab);
        if (onUpdate) {
            onUpdate(activeTab);
        } else {
            console.warn('No onUpdate callback provided');
        }
    };

    const handleClose = () => {
        navigate(-1)
    };

    const containerStyle: React.CSSProperties = {
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        color: color,
        borderColor: borderColor,
        borderWidth: borderWidth,
        borderRadius: borderRadius,
    };

    return (
        <div className="flex-1 p-5 rounded-xl" style={containerStyle}>
            <div className="w-full h-8 justify-between items-center inline-flex flex-wrap">
                <div className="justify-start items-center gap-3 flex flex-grow">
                    <div className="text-center text-[#49526A] font-semibold font-Mulish leading-loose text-lg md:text-3xl lg:text-3xl">{title}</div>
                </div>
                {showButtons && (
                    <div className="justify-end items-center gap-4 flex">
                        <div className="w-[90px] px-2 py-[4px] rounded-[20px] border border-gray-200">
                            <div className="text-sm font-normal font-['Mulish'] flex justify-center cursor-pointer items-center gap-2" onClick={handleUpdate}><p>Update</p></div>
                        </div>
                        <div className="w-[60px] px-2 py-[4px] rounded-[20px] border border-gray-200">
                            <div className="text-sm font-normal font-['Mulish'] flex justify-between items-center cursor-pointer gap-1" onClick={handleClose}><img src={images.cancel} alt="close icon" width={'10px'} /><p>close</p></div>
                        </div>
                    </div>
                )}
            </div>
            {/* Pass tabContent as tabContent prop */}
            <TabCustomer setActiveTab={setActiveTab} activeTab={activeTab} tablist={tablist} tabContent={tabContent} />
        </div>
    )
}

export default TabLayout;