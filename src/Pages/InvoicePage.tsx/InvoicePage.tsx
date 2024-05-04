import { DocumentCard } from '../../Components/index';
import images from '../../assets/index';

const InvoicePage: React.FC = () => {

  return (
    <div className="w-full h-full flex-col justify-start items-start gap-4 inline-flex">
  <div className="Body self-stretch h-96 pt-8 bg-white bg-opacity-50 rounded-lg flex-col justify-start items-start gap-8 flex">
    <div className="TitleArea self-stretch px-8 justify-between items-center inline-flex">
      <div className="Frame238063 justify-start items-center gap-3 flex">
        <div className="OctoberInvoiceAdvice text-center text-slate-600 text-3xl font-semibold font-['Mulish'] leading-loose">October Invoice Advice</div>
      </div>
      <div className="Frame238171 justify-end items-center gap-2 flex">
        <div className="ConfirmButton w-44 px-2 py-3 rounded-3xl border border-gray-200 justify-center items-center gap-2.5 flex">
          <div className="RequestADelivery text-slate-600 text-base font-normal font-['Mulish'] leading-none tracking-tight">Reject Invoice Advice</div>
        </div>
        <div className="ConfirmButton w-24 px-2 py-3 rounded-3xl border border-gray-200 justify-center items-center gap-2.5 flex">
          <div className="RequestADelivery text-slate-600 text-base font-normal font-['Mulish'] leading-none tracking-tight">Link Invoice</div>
        </div>
        <div className="Close w-16 p-2.5 rounded-3xl border border-gray-200 justify-start items-center gap-1 flex">
          <div className="IconsPack w-4 h-4 justify-center items-center flex">
            <div className="Icons w-4 h-4 p-px justify-center items-center inline-flex" />
          </div>
          <div className="Close text-center text-slate-400 text-xs font-normal font-['Mulish']">Close</div>
        </div>
      </div>
    </div>
    <div className="Frame238118 self-stretch h-96 flex-col justify-start items-start flex">
      <div className="Frame238117 self-stretch justify-start items-start inline-flex">
        <div className="Frame238101 grow shrink basis-0 h-8 px-5 py-2 bg-lime-200 border-b border-gray-200 justify-start items-center gap-2.5 flex">
          <div className="Details text-slate-600 text-sm font-semibold font-['Mulish'] leading-none">DETAILS</div>
        </div>
        <div className="Frame238102 w-96 h-8 p-2 bg-lime-200 border-b border-gray-200 justify-center items-center gap-2.5 flex" />
        <div className="Frame238103 w-60 h-8 p-2 bg-lime-200 border-b border-gray-200 justify-center items-center gap-2.5 flex">
          <div className="DocumentPreview text-slate-600 text-sm font-semibold font-['Mulish'] leading-none">DOCUMENT PREVIEW</div>
        </div>
      </div>
      <div className="Frame238100 self-stretch h-96 justify-start items-start inline-flex">
        <div className="TocActions grow shrink basis-0 self-stretch p-4 bg-slate-50 border-r flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="Frame238102 self-stretch h-16 flex-col justify-start items-center gap-2.5 flex">
            <div className="Frame237972 self-stretch p-2 rounded-lg border border-gray-300 justify-between items-center inline-flex">
              <div className="Frame237964 p-1 bg-slate-200 rounded-sm justify-center items-start gap-2.5 flex">
                <div className="Month text-center text-slate-600 text-xs font-semibold font-['Mulish'] uppercase leading-3">MONTH</div>
              </div>
              <div className="October text-center text-zinc-950 text-xs font-normal font-['Mulish'] leading-3">October</div>
            </div>
            <div className="Frame237970 self-stretch p-2 rounded-lg border border-gray-300 justify-between items-center inline-flex">
              <div className="Frame237964 p-1 bg-slate-200 rounded-sm justify-center items-start gap-2.5 flex">
                <div className="GeneratedOn text-center text-slate-600 text-xs font-semibold font-['Mulish'] uppercase leading-3">generated on</div>
              </div>
              <div className="Nov2023 text-center text-zinc-950 text-xs font-semibold font-['Mulish'] leading-3">03/Nov/2023</div>
            </div>
          </div>
        </div>
        <div className="DocumentBody p-4 bg-white rounded-xl flex-col justify-start items-start gap-6 inline-flex">
          <img className="A41 w-96 h-96 relative rounded-xl border border-gray-300" src="https://via.placeholder.com/706x1000" />
        </div>
        <div className="Frame238119 self-stretch flex-col justify-start items-start inline-flex">
          <div className="Preview h-12 bg-slate-50 border-l flex-col justify-start items-center flex">
            <div className="Frame238103 self-stretch p-2 border-b justify-between items-center inline-flex">
              <div className="Page1Of68Showing text-slate-600 text-xs font-semibold font-['Mulish'] leading-3">Page 1 of 68 showing</div>
              <div className="Frame238116 justify-end items-center gap-2 flex">
                <div className="PageCounter w-8 h-8 p-2.5 rounded-3xl border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                  <div className="Icon p-1 origin-top-left rotate-180 rounded justify-center items-center gap-2.5 inline-flex">
                    <div className="IconsPack w-4 h-4 justify-center items-center flex">
                      <div className="Icons w-4 h-4 px-1.5 py-0.5 justify-center items-center inline-flex" />
                    </div>
                  </div>
                </div>
                <div className="PageCounter w-8 h-8 p-2.5 rounded-3xl border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                  <div className="Icon p-1 origin-top-left rotate-180 rounded justify-center items-center gap-2.5 inline-flex">
                    <div className="IconsPack w-4 h-4 justify-center items-center flex">
                      <div className="Icons w-4 h-4 px-1.5 py-0.5 justify-center items-center inline-flex" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Pages w-60 grow shrink basis-0 bg-slate-50 border-l flex-col justify-start items-center flex">
            <div className="Frame238102 self-stretch h-96 p-4 flex-col justify-start items-center gap-2.5 flex">
              <div className="PagePreview self-stretch h-72 flex-col justify-start items-start gap-1 flex">
                <div className="Page1 text-slate-400 text-xs font-normal font-['Mulish'] leading-3">Page 1</div>
                <img className="PagePreview self-stretch h-72 p-2.5 rounded-lg border border-gray-200" src="https://via.placeholder.com/202x280" />
              </div>
              <div className="PagePreview self-stretch h-72 flex-col justify-start items-start gap-1 flex">
                <div className="Page1 text-slate-400 text-xs font-normal font-['Mulish'] leading-3">Page 2</div>
                <img className="PagePreview self-stretch h-72 p-2.5 rounded-lg border border-gray-200" src="https://via.placeholder.com/202x280" />
              </div>
              <div className="PagePreview self-stretch h-72 flex-col justify-start items-start gap-1 flex">
                <div className="Page1 text-slate-400 text-xs font-normal font-['Mulish'] leading-3">Page 3</div>
                <img className="PagePreview self-stretch h-72 p-2.5 rounded-lg border border-gray-200" src="https://via.placeholder.com/202x280" />
              </div>
              <div className="PagePreview self-stretch h-72 flex-col justify-start items-start gap-1 flex">
                <div className="Page1 text-slate-400 text-xs font-normal font-['Mulish'] leading-3">Page 4</div>
                <img className="PagePreview self-stretch h-72 p-2.5 rounded-lg border border-gray-200" src="https://via.placeholder.com/202x280" />
              </div>
              <div className="PagePreview self-stretch h-72 flex-col justify-start items-start gap-1 flex">
                <div className="Page1 text-slate-400 text-xs font-normal font-['Mulish'] leading-3">Page 5</div>
                <img className="PagePreview self-stretch h-72 p-2.5 rounded-lg border border-gray-200" src="https://via.placeholder.com/202x280" />
              </div>
              <div className="Frame238120 w-24 h-96 relative" />
            </div>
            <div className="Rectangle35 w-1.5 h-36 bg-gray-200 rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default InvoicePage;