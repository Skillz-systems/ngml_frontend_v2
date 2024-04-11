import { TabCustomer } from '../../Components/index';
import React, { useState } from 'react';
// import images from '../../assets/index';

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
    tabContent
}) => {

    const [activeTab, setActiveTab] = useState<string>('')

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
                <div className="justify-start items-center gap-3 flex flex-grow ">
                    <div className="text-center text-[#49526A] text-[32px] font-semibold font-[600] leading-loose" >{title}</div>
                </div>
                {/* <div className="justify-end items-center gap-4 flex">
                    <div className="w-8 h-8 p-2.5 rounded-[40px] border border-gray-300 flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="p-1 bg-green-600 rounded-3xl flex-col justify-end items-center gap-2.5 flex">
                            <div className="text-white text-[10px] font-medium font-['Mulish'] leading-[10px] tracking-tight">04</div>
                        </div>
                        <div className="w-4 h-4 justify-center items-center inline-flex">
                            <div className="w-4 h-4 relative flex-col justify-start items-start flex"><img src={images.Communication} alt="logo" className='absolute top-[-12px]' /></div>
                        </div>
                    </div>
                    <div className="w-[80px] px-2 py-[4px] rounded-[20px] border border-gray-200">
                        <div className="text-slate-600 text-sm font-normal font-['Mulish'] flex justify-between items-center gap-2"><img src={images.Close} alt="close icon" /><p>close</p></div>
                    </div>
                </div> */}
            </div>
            {/* Pass tabContent as tabContent prop */}
            <TabCustomer setActiveTab={setActiveTab} activeTab={activeTab} tablist={tablist} tabContent={tabContent} />
        </div>
    )
}

export default TabLayout;