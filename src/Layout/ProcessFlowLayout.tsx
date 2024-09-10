

import images from '@/assets';
import React from 'react';

const ProcessFlowLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen w-screen overflow-hidden flex flex-col">
            <div className="flex-grow w-full bg-nnpc-100/10 p-4">
                <div className="w-full h-full relative bg-white rounded-2xl overflow-hidden">
                    <div
                        className="w-full h-full bg-repeat absolute inset-0"
                        style={{
                            backgroundImage: `url(${images.paper})`,
                            backgroundSize: 'auto',
                            opacity: 0.5,
                        }}
                    />
                    <div className="relative z-10 w-full h-full overflow-auto p-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessFlowLayout;



// import React from 'react';

// const ProcessFlowLayout = ({ children }: { children: React.ReactNode }) => {
//     return (
//         <div className="h-screen w-screen overflow-hidden flex flex-col">
//             <div className="flex-grow w-full bg-nnpc-100/10 p-4">
//                 <div className="w-full h-full relative bg-white rounded-lg overflow-hidden">

//                     <div className="relative z-10 w-full h-full overflow-auto p-4">
//                         {children}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProcessFlowLayout;