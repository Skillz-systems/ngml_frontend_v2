import { Button } from "@/Components";
import React, { useEffect, useState } from "react";
import { invoiceAdviceData } from "./data";
import InventoryTable from "./Table";
import AccountsInvoiceOne from "./invoices/accountsInvoiceOne";

const GCCComponent = () => <div>GCC Component Content</div>;
const InvoiceComponent = () => <div>Invoice Component Content</div>;
const AccountsComponent = () => <div>Accounts Component Content</div>;

const InvoiceLayoutPage: React.FC = () => {
  // const [activeTab, setActiveTab] = useState('Items');
  // const [showProceed, setShowProceed] = useState<boolean>(false);

  // const onCreateInvoiceAdviceClick = async () => {
  //   console.log('clicked');
  //   setShowProceed(true);
  // };

  // const tabs = [
  //   {
  //     name: 'Items',
  //     component: () => (
  //       <InventoryTable
  //         invoiceAdviceData={invoiceAdviceData}
  //         onCreateInvoiceAdviceClick={onCreateInvoiceAdviceClick}
  //       />
  //     )
  //   },
  //   { name: 'GCC', component: GCCComponent },
  //   { name: 'Invoice', component: InvoiceComponent },
  //   { name: 'Accounts', component: AccountsComponent },
  // ];

  // const ActiveComponent = tabs.find(tab => tab.name === activeTab)?.component || tabs[0].component;
  const [activeTab, setActiveTab] = useState(() => {
    // Initialize activeTab from URL if present
    const params = new URLSearchParams(window.location.search);
    return params.get("tab") || "Items";
  });
  const [showProceed, setShowProceed] = useState<boolean>(false);

  const onCreateInvoiceAdviceClick = async () => {
    console.log("clicked");
    setShowProceed(true);
  };

  const tabs = [
    {
      name: "Items",
      component: () => (
        <InventoryTable
          invoiceAdviceData={invoiceAdviceData}
          onCreateInvoiceAdviceClick={onCreateInvoiceAdviceClick}
        />
      ),
    },
    { name: "GCC", component: GCCComponent },
    { name: "Invoice", component: InvoiceComponent },
    // { name: 'Accounts', component: AccountsComponent },
    {
      name: "Accounts",
      component: () => (
        <AccountsInvoiceOne
          invoiceAdviceData={invoiceAdviceData}
          onCreateInvoiceAdviceClick={onCreateInvoiceAdviceClick}
        />
      ),
    },
  ];

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("tab", activeTab);
    window.history.pushState({}, "", url);
  }, [activeTab]);

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get("tab");
      if (tab && tabs.some((t) => t.name === tab)) {
        setActiveTab(tab);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const ActiveComponent =
    tabs.find((tab) => tab.name === activeTab)?.component || tabs[0].component;

  return (
    <div className="w-full h-full">
      <div className="w-full h-fit py-8 bg-[#FFFFFF] bg-opacity-50 rounded-lg">
        <div className="flex flex-col items-center justify-between px-8 mb-3 sm:flex-row">
          <div className="text-center text-3xl text-[#49526A] font-semibold">
            October Invoice Advice
          </div>
          <div id="proceed" className="flex items-center gap-2">
            {showProceed ? (
              <div className="flex items-center gap-3">
                {" "}
                <Button
                  type="primary"
                  label="Proceed"
                  action={() => {}}
                  color="#FFFFFF"
                  // fontStyle="italic"
                  width="100px"
                  height="35px"
                  fontSize="16px"
                  radius="20px"
                />
                <Button
                  type="tertiary"
                  label="Delete"
                  action={() => setShowProceed(false)}
                  color="#FFFFFF"
                  // fontStyle="italic"
                  width="100px"
                  height="35px"
                  fontSize="16px"
                  radius="20px"
                  className="bg-red-500 border-none"
                />
              </div>
            ) : (
              // <button className="px-4 py-2 text-xs font-normal text-white transition-colors bg-blue-500 rounded w-max hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              //   Proceed
              // </button>
              <>
                {/* <div className="px-2 py-1 border rounded-3xl">
                          <div className="text-[#49526A] text-base font-normal">
                            Reject Invoice Advice
                          </div>
                        </div> */}
                <div className="px-2 py-1 border rounded-3xl">
                  <div className="text-[#49526A] text-base font-normal">
                    Link Invoice
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center w-full md:w-[70%] lg:w-[50%] gap-2 sm:gap-6 px-8 pb-3">
          <div className="flex items-center justify-between w-full p-2 border rounded-lg">
            <div className="p-1 bg-[#EAEEF2] rounded-sm">
              <div className="text-center text-[#49526A] text-xs font-semibold">
                MONTH
              </div>
            </div>
            <div className="text-center text-[#49526A] text-xs font-normal">
              October
            </div>
          </div>
          <div className="flex items-center justify-between w-full p-2 border rounded-lg">
            <div className="p-1 bg-[#EAEEF2] rounded-sm">
              <div className="text-xs font-semibold text-center">
                Generated on
              </div>
            </div>
            <div className="text-xs font-semibold text-center">03/Nov/2023</div>
          </div>
        </div>

        <div className="flex items-center justify-between w-full px-5 py-2 bg-nnpc-50">
          <div className="text-[#49526A] text-sm font-semibold">DETAILS</div>
          <div className="text-[#49526A] text-sm font-semibold">
            DOCUMENT PREVIEW
          </div>
        </div>

        <div className="flex flex-col w-full h-full md:flex-row">
          <div className="w-full p-4 bg-[#FFFFFF] rounded-xl flex justify-center">
            <ActiveComponent />
          </div>
          <div className="w-60 border-l flex-col">
            <div className="p-2 border-b">
              <div className="text-[#49526A] text-xs font-semibold">
                Controls
              </div>
            </div>
            <div className="h-full p-4 space-y-3 flex flex-col">
              {tabs.map((tab) => (
                <div
                  key={tab.name}
                  className={`p-2 rounded cursor-pointer ${
                    activeTab === tab.name ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  <div className="text-[#808080] text-xs font-normal">
                    {tab.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceLayoutPage;
