// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { PrivateAdminRoute, routes } from './Routes/Index';



// function App(): JSX.Element {

//   const authRoutes = routes.AuthRoutes.map(({ path, component: Component }) => (
//     <Route key={path} path={path} element={<Component />} />
//   ));

//   const AdminRoutes = routes.AdminRoutes.map(
//     ({ path, component: Component }) => (
//       <Route
//         key={path}
//         path={path}
//         element={
//           <PrivateAdminRoute key={path}>
//             <Component />
//           </PrivateAdminRoute>
//         }
//       />
//     )
//   );

//   const ClientRoutes = routes.ClientRoutes.map(
//     ({ path, component: Component }) => (
//       <Route
//         key={path}
//         path={path}
//         element={
//           <PrivateAdminRoute key={path}>
//             <Component />
//           </PrivateAdminRoute>
//         }
//       />
//     )
//   );

//   const StaffRoutes = routes.StaffRoutes.map(
//     ({ path, component: Component }) => (
//       <Route
//         key={path}
//         path={path}
//         element={
//           <PrivateAdminRoute key={path}>
//             <Component />
//           </PrivateAdminRoute>
//         }
//       />
//     )
//   );

//   const SupplierRoutes = routes.SupplierRoutes.map(
//     ({ path, component: Component }) => (
//       <Route
//         key={path}
//         path={path}
//         element={
//           <PrivateAdminRoute key={path}>
//             <Component />
//           </PrivateAdminRoute>
//         }
//       />
//     )
//   );

//   const CustomerRoutes = routes.CustomerRoutes.map(
//     ({ path, component: Component }) => (
//       <Route
//         key={path}
//         path={path}
//         element={
//           <PrivateAdminRoute key={path}>
//             <Component />
//           </PrivateAdminRoute>
//         }
//       />
//     )
//   );

//   return (
//     <div className="App">
//       <ToastContainer />
//       <BrowserRouter>
//         <Routes>
//           {authRoutes}
//           {AdminRoutes}
//           {ClientRoutes}
//           {StaffRoutes}
//           {SupplierRoutes}
//           {CustomerRoutes}

//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;



// import { Suspense } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { PrivateAdminRoute, routes } from './Routes/Index';

// function Loader() {
//   return <section className='w-screen h-screen bg-nnpc-100'>Loading...</section>; // Replace with your custom loader component
// }

// function App(): JSX.Element {
//   const authRoutes = routes.AuthRoutes.map(({ path, component: Component }) => (
//     <Route key={path} path={path} element={<Component />} />
//   ));

//   const createPrivateRoutes = (routeArray: { path: any; component: any; }[]) =>
//     routeArray.map(({ path, component: Component }) => (
//       <Route
//         key={path}
//         path={path}
//         element={
//           <PrivateAdminRoute key={path}>
//             <Component />
//           </PrivateAdminRoute>
//         }
//       />
//     ));

//   const AdminRoutes = createPrivateRoutes(routes.AdminRoutes);
//   const ClientRoutes = createPrivateRoutes(routes.ClientRoutes);
//   const StaffRoutes = createPrivateRoutes(routes.StaffRoutes);
//   const SupplierRoutes = createPrivateRoutes(routes.SupplierRoutes);
//   const CustomerRoutes = createPrivateRoutes(routes.CustomerRoutes);

//   return (
//     <div className="App">
//       <ToastContainer />
//       <BrowserRouter>
//         <Suspense fallback={<Loader />}>
//           <Routes>
//             {authRoutes}
//             {AdminRoutes}
//             {ClientRoutes}
//             {StaffRoutes}
//             {SupplierRoutes}
//             {CustomerRoutes}
//           </Routes>
//         </Suspense>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;



import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './Components/Loader/Loader';
import { PrivateAdminRoute, routes } from './Routes/Index';

// Define types for route objects
type RouteObject = {
  path: string;
  component: React.ComponentType;
};

// Define type for all route categories
// type RouteCategories = {
//   AuthRoutes: RouteObject[];
//   AdminRoutes: RouteObject[];
//   ClientRoutes: RouteObject[];
//   StaffRoutes: RouteObject[];
//   SupplierRoutes: RouteObject[];
//   CustomerRoutes: RouteObject[];
// };

function Loading(): JSX.Element {
  return <section className='w-screen h-screen bg-nnpc-100'>
    <Loader className='size-28 text-white' />
  </section>;
}

function App(): JSX.Element {



  const authRoutes = routes.AuthRoutes.map(({ path, component: Component }: RouteObject) => (
    <Route key={path} path={path} element={<Component />} />
  ));

  const createPrivateRoutes = (routeArray: RouteObject[]) =>
    routeArray.map(({ path, component: Component }: RouteObject) => (
      <Route
        key={path}
        path={path}
        element={
          <PrivateAdminRoute key={path}>
            <Component />
          </PrivateAdminRoute>
        }
      />
    ));

  const AdminRoutes = createPrivateRoutes(routes.AdminRoutes);
  const ClientRoutes = createPrivateRoutes(routes.ClientRoutes);
  const StaffRoutes = createPrivateRoutes(routes.StaffRoutes);
  const SupplierRoutes = createPrivateRoutes(routes.SupplierRoutes);
  const CustomerRoutes = createPrivateRoutes(routes.CustomerRoutes);


  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            {authRoutes}
            {AdminRoutes}
            {ClientRoutes}
            {StaffRoutes}
            {SupplierRoutes}
            {CustomerRoutes}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;