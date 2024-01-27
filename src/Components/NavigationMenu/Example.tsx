// import React, { useState, useEffect } from 'react'
// import { NavLink } from 'react-router-dom'
// import avatar from '../../Asset/avatar.png'
// import { SlArrowLeft } from 'react-icons/sl'

// import { useAuthState } from 'src/Context/AuthContext'

// const Sidebar = ({ SideBarLinks }) => {
//   const { user } = useAuthState()
//   const [name, setName] = useState(user?.firstname || user?.companyName || 'John Okafor')
//   const [designation, setDesignation] = useState(user?.designation ?? 'D.MANAGER')
//   const [zone, setZone] = useState('SS. Zone')

//   console.log(user, 'useruser')
//   useEffect(() => {
//     if (user !== null) {
//       // const acc = JSON.parse(localStorage.getItem('user'))
//       setName(user?.firstname || user?.companyName + ' ' + (user?.companyName || user?.lastname))
//       setDesignation(user?.designation)
//       setZone((user?.operation || 'Customer') + ' Zone')
//     }
//   }, [user?.firstname, user?.companyName])
//   const communicationProfileSettings = SideBarLinks.slice(5, SideBarLinks.length)
//   return (
//     <>
//       <div className='fixed top-10 h-screen'
//         style={{
//           // border: '0.5px solid red',
//           width: '220px',
//           // padding: '18px',
//           overflowY: 'auto',
//           marginTop: '32px',
//           marginLeft: '16px'

//         }}
//       >
//         <div>
//           <div
//             style={{
//               backgroundColor: '#FFFFFF',
//               height: '60px',
//               display: 'flex',
//               flexDirection: 'column',
//               marginBottom: '22px',
//               borderRadius: '30px'
//             }}
//           >
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 padding: '6px'
//               }}
//             >
//               <div style={{ marginLeft: '2px' }}>
//                 <img src={avatar} alt="happyavatar" style={{ width: '45px', height: '45px' }} />
//               </div>
//               <div
//                 style={{
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   flexDirection: 'column'
//                 }}
//               >
//                 <div
//                   style={{
//                     color: '#050505',
//                     fontSize: '12px',
//                     fontWeight: '600',
//                     fontFamily: 'Mulish'
//                   }}
//                 >
//                   {name}
//                 </div>
//                 <div
//                   style={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     columnGap: '6px'
//                   }}
//                 >
//                   <div
//                     style={{
//                       color: '#828DA9',
//                       fontSize: '10px',
//                       fontWeight: '600',
//                       fontFamily: 'Mulish',
//                       lineHeight: '20px'
//                     }}
//                     className='uppercase'
//                   >
//                     {designation}
//                   </div>
//                   <div
//                     className='uppercase'
//                     style={{
//                       color: '#828DA9',
//                       fontSize: '10px',
//                       fontWeight: '600',
//                       fontFamily: 'Mulish',
//                       lineHeight: '20px'
//                     }}
//                   >
//                     {zone}
//                   </div>
//                 </div>
//               </div>
//               <div
//                 style={{
//                   backgroundColor: '#e8eaed',
//                   height: '30px',
//                   width: '30px',
//                   borderRadius: '100%',
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   marginRight: '6px'
//                 }}
//               >
//                 <SlArrowLeft style={{ color: '#828DA9' }} />
//               </div>
//             </div>
//           </div>
//           <div
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//               borderRadius: '14px',
//               marginBottom: '10px',
//               background: '#FFFFFF'
//             }}
//           >
//             {SideBarLinks.slice(0, 5).map((sideBar) => (
//               <NavLink
//                 key={sideBar.id}
//                 to={sideBar.to}
//                 className={({ isActive, isPending }) =>
//                   isPending
//                     ? 'pending'
//                     : isActive
//                       ? 'active-nav'
//                       : 'inactive-nav'
//                 }
//                 style={{
//                   display: 'flex',
//                   columnGap: '16px',
//                   textDecoration: 'none',
//                   alignItems: 'center',
//                   padding: '10px',
//                   borderRadius: '6px',
//                   cursor: 'pointer'
//                 }}
//               >
//                 <span
//                   style={{
//                     fontWeight: 400,
//                     fontSize: '15px',
//                     fontFamily: 'Mulish'
//                   }}
//                 >
//                   <img src={sideBar.icon} />
//                 </span>
//                 <span
//                   style={{
//                     fontFamily: 'Mulish'
//                   }}
//                 >
//                   {sideBar.name}
//                 </span>
//               </NavLink>
//             ))}
//           </div>
//         </div>
//         <div
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             borderRadius: '14px',
//             marginBottom: '10px',
//             background: '#FFFFFF',
//             width: '100%',
//             marginTop: '30px'
//           }}
//         >
//           {communicationProfileSettings.map((sideBar) => (
//             <NavLink
//               key={sideBar.id}
//               to={sideBar.to}
//               className={({ isActive, isPending }) =>
//                 isPending
//                   ? 'pending'
//                   : isActive
//                     ? 'active-nav'
//                     : 'inactive-nav'
//               }
//               style={{
//                 display: 'flex',
//                 columnGap: '16px',
//                 textDecoration: 'none',
//                 alignItems: 'center',
//                 padding: '10px',
//                 borderRadius: '6px',
//                 cursor: 'pointer'
//               }}
//             >
//               <span
//                 style={{
//                   fontWeight: 400,
//                   fontSize: '20px',
//                   fontFamily: 'Mulish'
//                 }}
//               >
//                 <img src={sideBar.icon} />
//               </span>
//               <span
//                 style={{
//                   fontFamily: 'Mulish'
//                 }}
//               >
//                 {sideBar.name}
//               </span>
//             </NavLink>
//           ))}
//         </div>

//       </div>
//     </>
//   )
// }

// export default Sidebar



// import React, { type FC } from 'react'

// interface TabInterface {
//   name: string
//   ref: string
// }

// export interface TabListInterface {
//   name: string
//   ref: string
//   children?: TabInterface[]
// }

// interface TabListProps {
//   tablist: TabListInterface[]
//   onTabChange: (tab: TabListInterface) => void
//   activeTab: string
// }

// const TabList: FC<TabListProps> = ({ tablist, onTabChange, activeTab }) => {
//   // console.log(tablist)
//   return (
//     <div className='flex flex-col items-start justify-start w-1/4 mr-3 space-y-2'>
//       {tablist.map((tab, index) => (
//         <div key={tab.ref} className="flex flex-col w-full space-y-2" onClick={() => { onTabChange(tab) }}>
//           <div className="flex items-center justify-between capitalize cursor-pointer gap-x-2">
//             <div className="flex justify-start text-base font-medium capitalize truncate text-neutral-600">
//               <span className={px-2 py-1 flex justify-center items-center rounded-full ${tab.ref === activeTab ? 'bg-[#EEED09]/70' : 'bg-transparent'}}>0{index + 1}</span>
//               <span className='ml-1 text-base font-medium leading-relaxed capitalize truncate text-neutral-600'>{tab.name}
//               </span>
//             </div>
//             {tab.ref === activeTab
//               ? (
//                 <span className='h-1.5 w-1.5 rounded-full bg-[#00AF50] transition-all ease-in-out duration-300' ></span>)
//               : <span className='h-1.5 w-1.5 rounded-full bg-[#00AF50]/40 transition-all ease-in-out duration-300' ></span>
//             }
//           </div>
//           {activeTab === tab.ref && (

//             tab.children?.map((child, index) => (
//               <a key={child.ref + index} className="space-y-2 no-underline cursor-pointer hover:no-underline " href={#${child.ref}} >
//                 <div className="flex items-center justify-between ml-10 gap-x-2">
//                   <span className='text-base capitalize truncate text-neutral-500 hover:text-neutral-700'>{child?.name}
//                   </span>
//                   <span className='h-1.5 w-1.5 rounded-full bg-[#00AF50]/20' ></span>
//                 </div>
//               </a>))

//           )
//           }
//         </div>
//       ))}
//     </div>
//   )
// }

// export default TabList