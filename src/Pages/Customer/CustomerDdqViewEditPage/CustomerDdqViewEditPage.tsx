import { EoiRequestTemplate } from '@/Components';
import { useState } from 'react';

const CustomerDdqViewEditPage = () => {
  

  return (
    <div className="h-[100%] flex-col justify-start items-start gap-4 inline-flex">
  <div className="w-full h-[2246px] pt-8 bg-white/50 rounded-lg flex-col justify-start items-start gap-8 flex">
    <div className="TitleArea self-stretch px-8 justify-between items-center inline-flex">
      <div className="Frame238063 justify-start items-center gap-3 flex">
        <div className="DueDiligenceQuestionaire text-center text-[#49526a] text-[32px] font-semibold font-['Mulish'] leading-loose">Due Diligence Questionaire</div>
      </div>
      <div className="Close rounded-[32px] justify-start items-start gap-4 flex">
        <div className="Close p-2.5 rounded-[32px] border border-[#e2e4eb] justify-start items-center gap-1 flex">
          <div className="IconsPack w-4 h-4 justify-center items-center flex">
            <div className="Icons w-4 h-4 p-[0.83px] justify-center items-center inline-flex" />
          </div>
          <div className="Close text-center text-[#828da9] text-xs font-normal font-['Mulish']">Close</div>
        </div>
      </div>
    </div>
    <div className="Frame238118 self-stretch h-[2150px] flex-col justify-start items-start flex">
      <div className="Frame238117 self-stretch justify-start items-start inline-flex">
        <div className="Frame238101 grow shrink basis-0 h-8 px-5 py-2 bg-[#d2f69e] border-b border-[#e2e4eb] justify-start items-center gap-2.5 flex">
          <div className="TableOfContent text-[#49526a] text-sm font-semibold font-['Mulish'] leading-[14px]">TABLE OF CONTENT</div>
        </div>
        <div className="Frame238102 w-[738px] h-8 p-2 bg-[#d2f69e] border-b border-[#e2e4eb] justify-center items-center gap-2.5 flex">
          <div className="Questioniare text-center text-[#49526a] text-sm font-semibold font-['Mulish'] leading-[14px]">QUESTIONIARE</div>
        </div>
        <div className="Frame238103 w-[234px] h-8 p-2 bg-[#d2f69e] border-b border-[#e2e4eb] justify-center items-center gap-2.5 flex">
          <div className="Status text-[#49526a] text-sm font-semibold font-['Mulish'] leading-[14px]">STATUS</div>
        </div>
      </div>
      <div className="Frame238100 self-stretch justify-start items-start inline-flex">
        <div className="TocActions grow shrink basis-0 self-stretch p-4 border-r flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="SubMenu flex-col justify-start items-start flex">
            <div className="DetailsTitle w-[200px] pl-1.5 pr-6 py-1 rounded-lg justify-start items-center gap-1 inline-flex">
              <div className="Icon w-5 h-5 p-1 bg-[#d2f69e] rounded justify-center items-center gap-2.5 flex">
                <div className=" text-center text-[#005828] text-xs font-bold font-['Mulish'] leading-3">01</div>
              </div>
              <div className="StaffInformation grow shrink basis-0 text-[#49526a] text-xs font-bold font-['Mulish'] leading-3">Section A: General</div>
              <div className="Ellipse1 w-1.5 h-1.5 bg-[#00af50] rounded-full" />
            </div>
            <div className="DetailsSubTitle w-[200px] pl-1.5 pr-6 py-1 rounded-lg justify-start items-center gap-1 inline-flex">
              <div className="Icon w-5 h-5 p-1 opacity-0 bg-[#e2e4eb] rounded justify-center items-center gap-2.5 flex">
                <div className="Done w-5 h-5 p-1 rounded justify-center items-center gap-2.5 flex">
                  <div className="IconsPack w-4 h-4 justify-center items-center flex">
                    <div className="Icons w-4 h-4 px-[2.17px] pt-[4.50px] pb-[4.46px] justify-center items-center inline-flex" />
                  </div>
                </div>
              </div>
              <div className="PersonalDetails grow shrink basis-0 text-[#49526a] text-xs font-medium font-['Mulish'] leading-3 tracking-tight">Section A: Ownership and Management</div>
            </div>
            <div className="DetailsSubTitle w-[200px] pl-1.5 pr-6 py-1 rounded-lg justify-start items-center gap-1 inline-flex">
              <div className="Icon w-5 h-5 p-1 opacity-0 bg-[#e2e4eb] rounded justify-center items-center gap-2.5 flex">
                <div className="Done w-5 h-5 p-1 rounded justify-center items-center gap-2.5 flex">
                  <div className="IconsPack w-4 h-4 justify-center items-center flex">
                    <div className="Icons w-4 h-4 px-[2.17px] pt-[4.50px] pb-[4.46px] justify-center items-center inline-flex" />
                  </div>
                </div>
              </div>
              <div className="PersonalDetails grow shrink basis-0 text-[#49526a] text-xs font-medium font-['Mulish'] leading-3 tracking-tight">Section A: Financial Information</div>
            </div>
            <div className="DetailsSubTitle w-[200px] pl-1.5 pr-6 py-1 rounded-lg justify-start items-center gap-1 inline-flex">
              <div className="Icon w-5 h-5 p-1 opacity-0 bg-[#e2e4eb] rounded justify-center items-center gap-2.5 flex">
                <div className="Done w-5 h-5 p-1 rounded justify-center items-center gap-2.5 flex">
                  <div className="IconsPack w-4 h-4 justify-center items-center flex">
                    <div className="Icons w-4 h-4 px-[2.17px] pt-[4.50px] pb-[4.46px] justify-center items-center inline-flex" />
                  </div>
                </div>
              </div>
              <div className="PersonalDetails grow shrink basis-0 text-[#49526a] text-xs font-medium font-['Mulish'] leading-3 tracking-tight">Section A: Legal</div>
            </div>
            <div className="DetailsTitle w-[200px] pl-1.5 pr-6 py-1 rounded-lg justify-start items-center gap-1 inline-flex">
              <div className="Icon w-5 h-5 p-1 rounded justify-center items-center gap-2.5 flex">
                <div className=" text-center text-[#49526a] text-xs font-normal font-['Mulish'] leading-3">02</div>
              </div>
              <div className="StaffInformation grow shrink basis-0 text-[#49526a] text-xs font-medium font-['Mulish'] leading-3 tracking-tight">Section B: Gas Supply</div>
            </div>
            <div className="DetailsSubTitle w-[200px] pl-1.5 pr-6 py-1 rounded-lg justify-start items-center gap-1 inline-flex">
              <div className="Icon w-5 h-5 p-1 opacity-0 bg-[#e2e4eb] rounded justify-center items-center gap-2.5 flex">
                <div className="Done w-5 h-5 p-1 rounded justify-center items-center gap-2.5 flex">
                  <div className="IconsPack w-4 h-4 justify-center items-center flex">
                    <div className="Icons w-4 h-4 px-[2.17px] pt-[4.50px] pb-[4.46px] justify-center items-center inline-flex" />
                  </div>
                </div>
              </div>
              <div className="PersonalDetails grow shrink basis-0 text-[#49526a] text-xs font-medium font-['Mulish'] leading-3 tracking-tight">Section B: Commercial Due Diligence</div>
            </div>
            <div className="DetailsSubTitle w-[200px] pl-1.5 pr-6 py-1 rounded-lg justify-start items-center gap-1 inline-flex">
              <div className="Icon w-5 h-5 p-1 opacity-0 bg-[#e2e4eb] rounded justify-center items-center gap-2.5 flex">
                <div className="Done w-5 h-5 p-1 rounded justify-center items-center gap-2.5 flex">
                  <div className="IconsPack w-4 h-4 justify-center items-center flex">
                    <div className="Icons w-4 h-4 px-[2.17px] pt-[4.50px] pb-[4.46px] justify-center items-center inline-flex" />
                  </div>
                </div>
              </div>
              <div className="PersonalDetails grow shrink basis-0 text-[#49526a] text-xs font-medium font-['Mulish'] leading-3 tracking-tight">Section B: Gas Off-take Arrangement</div>
            </div>
            <div className="DetailsSubTitle w-[200px] pl-1.5 pr-6 py-1 rounded-lg justify-start items-center gap-1 inline-flex">
              <div className="Icon w-5 h-5 p-1 opacity-0 bg-[#e2e4eb] rounded justify-center items-center gap-2.5 flex">
                <div className="Done w-5 h-5 p-1 rounded justify-center items-center gap-2.5 flex">
                  <div className="IconsPack w-4 h-4 justify-center items-center flex">
                    <div className="Icons w-4 h-4 px-[2.17px] pt-[4.50px] pb-[4.46px] justify-center items-center inline-flex" />
                  </div>
                </div>
              </div>
              <div className="PersonalDetails grow shrink basis-0 text-[#49526a] text-xs font-medium font-['Mulish'] leading-3 tracking-tight">Section B: Permits and Licensing</div>
            </div>
            <div className="DetailsTitle w-[200px] pl-1.5 pr-6 py-1 rounded-lg justify-start items-center gap-1 inline-flex">
              <div className="Icon w-5 h-5 p-1 rounded justify-center items-center gap-2.5 flex">
                <div className=" text-center text-[#49526a] text-xs font-normal font-['Mulish'] leading-3">03</div>
              </div>
              <div className="StaffInformation grow shrink basis-0 text-[#49526a] text-xs font-medium font-['Mulish'] leading-3 tracking-tight">Section B: Technical Due Diligence</div>
            </div>
            <div className="DetailsSubTitle w-[200px] pl-1.5 pr-6 py-1 rounded-lg justify-start items-center gap-1 inline-flex">
              <div className="Icon w-5 h-5 p-1 opacity-0 bg-[#e2e4eb] rounded justify-center items-center gap-2.5 flex">
                <div className="Done w-5 h-5 p-1 rounded justify-center items-center gap-2.5 flex">
                  <div className="IconsPack w-4 h-4 justify-center items-center flex">
                    <div className="Icons w-4 h-4 px-[2.17px] pt-[4.50px] pb-[4.46px] justify-center items-center inline-flex" />
                  </div>
                </div>
              </div>
              <div className="PersonalDetails grow shrink basis-0 text-[#49526a] text-xs font-medium font-['Mulish'] leading-3 tracking-tight">Section B: Detailed Project Description</div>
            </div>
            <div className="DetailsSubTitle w-[200px] pl-1.5 pr-6 py-1 rounded-lg justify-start items-center gap-1 inline-flex">
              <div className="Icon w-5 h-5 p-1 opacity-0 bg-[#e2e4eb] rounded justify-center items-center gap-2.5 flex">
                <div className="Done w-5 h-5 p-1 rounded justify-center items-center gap-2.5 flex">
                  <div className="IconsPack w-4 h-4 justify-center items-center flex">
                    <div className="Icons w-4 h-4 px-[2.17px] pt-[4.50px] pb-[4.46px] justify-center items-center inline-flex" />
                  </div>
                </div>
              </div>
              <div className="PersonalDetails grow shrink basis-0 text-[#49526a] text-xs font-medium font-['Mulish'] leading-3 tracking-tight">Section B: Project Delivery Timescales</div>
            </div>
            <div className="DetailsSubTitle w-[200px] pl-1.5 pr-6 py-1 rounded-lg justify-start items-center gap-1 inline-flex">
              <div className="Icon w-5 h-5 p-1 opacity-0 bg-[#e2e4eb] rounded justify-center items-center gap-2.5 flex">
                <div className="Done w-5 h-5 p-1 rounded justify-center items-center gap-2.5 flex">
                  <div className="IconsPack w-4 h-4 justify-center items-center flex">
                    <div className="Icons w-4 h-4 px-[2.17px] pt-[4.50px] pb-[4.46px] justify-center items-center inline-flex" />
                  </div>
                </div>
              </div>
              <div className="PersonalDetails grow shrink basis-0 text-[#49526a] text-xs font-medium font-['Mulish'] leading-3 tracking-tight">Section B: Technical Evaluation</div>
            </div>
            <div className="DetailsSubTitle w-[200px] pl-1.5 pr-6 py-1 rounded-lg justify-start items-center gap-1 inline-flex">
              <div className="Icon w-5 h-5 p-1 opacity-0 bg-[#e2e4eb] rounded justify-center items-center gap-2.5 flex">
                <div className="Done w-5 h-5 p-1 rounded justify-center items-center gap-2.5 flex">
                  <div className="IconsPack w-4 h-4 justify-center items-center flex">
                    <div className="Icons w-4 h-4 px-[2.17px] pt-[4.50px] pb-[4.46px] justify-center items-center inline-flex" />
                  </div>
                </div>
              </div>
              <div className="PersonalDetails grow shrink basis-0 text-[#49526a] text-xs font-medium font-['Mulish'] leading-3 tracking-tight">Section B: Health, Security Safety and Environment</div>
            </div>
            <div className="DetailsTitle w-[200px] pl-1.5 pr-6 py-1 rounded-lg justify-start items-center gap-1 inline-flex">
              <div className="Icon w-5 h-5 p-1 rounded justify-center items-center gap-2.5 flex">
                <div className=" text-center text-[#49526a] text-xs font-normal font-['Mulish'] leading-3">04</div>
              </div>
              <div className="StaffInformation grow shrink basis-0 text-[#49526a] text-xs font-medium font-['Mulish'] leading-3 tracking-tight">Section C: Business Plan</div>
            </div>
            <div className="DetailsSubTitle w-[200px] pl-1.5 pr-6 py-1 rounded-lg justify-start items-center gap-1 inline-flex">
              <div className="Icon w-5 h-5 p-1 opacity-0 bg-[#e2e4eb] rounded justify-center items-center gap-2.5 flex">
                <div className="Done w-5 h-5 p-1 rounded justify-center items-center gap-2.5 flex">
                  <div className="IconsPack w-4 h-4 justify-center items-center flex">
                    <div className="Icons w-4 h-4 px-[2.17px] pt-[4.50px] pb-[4.46px] justify-center items-center inline-flex" />
                  </div>
                </div>
              </div>
              <div className="PersonalDetails grow shrink basis-0 text-[#49526a] text-xs font-medium font-['Mulish'] leading-3 tracking-tight">Section C: Copies of Proposed business plan</div>
            </div>
            <div className="DetailsSubTitle w-[200px] pl-1.5 pr-6 py-1 rounded-lg justify-start items-center gap-1 inline-flex">
              <div className="Icon w-5 h-5 p-1 opacity-0 bg-[#e2e4eb] rounded justify-center items-center gap-2.5 flex">
                <div className="Done w-5 h-5 p-1 rounded justify-center items-center gap-2.5 flex">
                  <div className="IconsPack w-4 h-4 justify-center items-center flex">
                    <div className="Icons w-4 h-4 px-[2.17px] pt-[4.50px] pb-[4.46px] justify-center items-center inline-flex" />
                  </div>
                </div>
              </div>
              <div className="PersonalDetails grow shrink basis-0 text-[#49526a] text-xs font-medium font-['Mulish'] leading-3 tracking-tight">Section C: Strategic Growth Plan</div>
            </div>
            <div className="DetailsSubTitle w-[200px] pl-1.5 pr-6 py-1 rounded-lg justify-start items-center gap-1 inline-flex">
              <div className="Icon w-5 h-5 p-1 opacity-0 bg-[#e2e4eb] rounded justify-center items-center gap-2.5 flex">
                <div className="Done w-5 h-5 p-1 rounded justify-center items-center gap-2.5 flex">
                  <div className="IconsPack w-4 h-4 justify-center items-center flex">
                    <div className="Icons w-4 h-4 px-[2.17px] pt-[4.50px] pb-[4.46px] justify-center items-center inline-flex" />
                  </div>
                </div>
              </div>
              <div className="PersonalDetails grow shrink basis-0 text-[#49526a] text-xs font-medium font-['Mulish'] leading-3 tracking-tight">Section C: Key performance Indicators</div>
            </div>
            <div className="DetailsSubTitle w-[200px] pl-1.5 pr-6 py-1 rounded-lg justify-start items-center gap-1 inline-flex">
              <div className="Icon w-5 h-5 p-1 opacity-0 bg-[#e2e4eb] rounded justify-center items-center gap-2.5 flex">
                <div className="Done w-5 h-5 p-1 rounded justify-center items-center gap-2.5 flex">
                  <div className="IconsPack w-4 h-4 justify-center items-center flex">
                    <div className="Icons w-4 h-4 px-[2.17px] pt-[4.50px] pb-[4.46px] justify-center items-center inline-flex" />
                  </div>
                </div>
              </div>
              <div className="PersonalDetails grow shrink basis-0 text-[#49526a] text-xs font-medium font-['Mulish'] leading-3 tracking-tight">Section C: Key Growth drivers</div>
            </div>
            <div className="DetailsTitle w-[200px] pl-1.5 pr-6 py-1 rounded-lg justify-start items-center gap-1 inline-flex">
              <div className="Icon w-5 h-5 p-1 rounded justify-center items-center gap-2.5 flex">
                <div className=" text-center text-[#49526a] text-xs font-normal font-['Mulish'] leading-3">05</div>
              </div>
              <div className="StaffInformation grow shrink basis-0 text-[#49526a] text-xs font-medium font-['Mulish'] leading-3 tracking-tight">Signature Page</div>
            </div>
          </div>
        </div>
        <div className="DocumentBody w-[738px] bg-white rounded-xl flex-col justify-start items-start gap-6 inline-flex">
          <div className="Frame237974 self-stretch h-[2118px] px-4 pt-8 pb-4 bg-white flex-col justify-start items-start gap-6 flex">
            <div className="OwnershipAndManagement text-[#49526a] text-[32px] font-bold font-['Mulish'] leading-loose">OWNERSHIP AND MANAGEMENT</div>
            <div className="PersonalDetails self-stretch h-[669px] p-6 rounded-xl border border-[#ccd0dc] flex-col justify-start items-start gap-6 flex">
              <div className="CompanyDetails text-[#49526a] text-base font-bold font-['Mulish'] leading-none">COMPANY DETAILS</div>
              <div className="Frame237977 self-stretch h-[586px] flex-col justify-start items-start gap-4 flex">
                <div className="FieldEntry self-stretch h-[70px] flex-col justify-start items-start gap-1 flex">
                  <div className="Title justify-start items-start gap-1 inline-flex">
                    <div className="MiddleName text-center text-[#49526a] text-sm font-medium font-['Mulish']">Company Name</div>
                    <div className=" text-center text-[#ff0000] text-base font-medium font-['Mulish']">*</div>
                  </div>
                  <div className="Field self-stretch px-4 py-2 bg-[#eaeef2] rounded-xl border border-[#828da9] justify-start items-center gap-[9px] inline-flex">
                    <div className="Frame237958 justify-start items-center gap-3 flex">
                      <div className="EnterEmailHere text-[#050505] text-sm font-medium font-['Mulish'] leading-[14px]">Dangote Cement Ltd</div>
                    </div>
                  </div>
                </div>
                <div className="FieldEntry self-stretch h-[70px] flex-col justify-start items-start gap-1 flex">
                  <div className="Title justify-start items-start gap-1 inline-flex">
                    <div className="MiddleName text-center text-[#49526a] text-sm font-medium font-['Mulish']">RC Number</div>
                    <div className=" text-center text-[#ff0000] text-base font-medium font-['Mulish']">*</div>
                  </div>
                  <div className="Field self-stretch px-4 py-2 bg-[#eaeef2] rounded-xl border border-[#828da9] justify-start items-center gap-[9px] inline-flex">
                    <div className="Frame237958 justify-start items-center gap-3 flex">
                      <div className="EnterEmailHere text-[#050505] text-sm font-medium font-['Mulish'] leading-[14px]">23280340</div>
                    </div>
                  </div>
                </div>
                <div className="FieldEntry self-stretch h-[70px] flex-col justify-start items-start gap-1 flex">
                  <div className="Title justify-start items-start gap-1 inline-flex">
                    <div className="MiddleName text-center text-[#49526a] text-sm font-medium font-['Mulish']">Nature of business</div>
                    <div className=" text-center text-[#ff0000] text-base font-medium font-['Mulish']">*</div>
                  </div>
                  <div className="Field self-stretch px-4 py-2 bg-[#eaeef2] rounded-xl border border-[#828da9] justify-start items-center gap-[9px] inline-flex">
                    <div className="Frame237958 justify-start items-center gap-3 flex">
                      <div className="EnterEmailHere text-[#050505] text-sm font-medium font-['Mulish'] leading-[14px]">Cement Manufacturing</div>
                    </div>
                  </div>
                </div>
                <div className="Frame237984 self-stretch justify-start items-start gap-4 inline-flex">
                  <div className="FieldEntry grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="Title justify-start items-start gap-1 inline-flex">
                      <div className="MiddleName text-center text-[#49526a] text-sm font-medium font-['Mulish']">Company Telephone Number</div>
                      <div className=" text-center text-[#ff0000] text-base font-medium font-['Mulish']">*</div>
                    </div>
                    <div className="Field self-stretch px-4 py-2 bg-[#eaeef2] rounded-xl border border-[#828da9] justify-start items-center gap-[9px] inline-flex">
                      <div className="Frame237958 justify-start items-center gap-3 flex">
                        <div className="EnterEmailHere text-[#050505] text-sm font-medium font-['Mulish'] leading-[14px]">0909 000 9999</div>
                      </div>
                    </div>
                  </div>
                  <div className="FieldEntry grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="Title justify-start items-start gap-1 inline-flex">
                      <div className="MiddleName text-center text-[#49526a] text-sm font-medium font-['Mulish']">Company Mobile Number</div>
                      <div className=" text-center text-[#ff0000] text-base font-medium font-['Mulish']">*</div>
                    </div>
                    <div className="Field self-stretch px-4 py-2 bg-[#eaeef2] rounded-xl border border-[#828da9] justify-start items-center gap-[9px] inline-flex">
                      <div className="Frame237958 justify-start items-center gap-3 flex">
                        <div className="EnterEmailHere text-[#050505] text-sm font-medium font-['Mulish'] leading-[14px]">0909 000 1111</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="FieldEntry self-stretch h-[70px] flex-col justify-start items-start gap-1 flex">
                  <div className="Title justify-start items-start gap-1 inline-flex">
                    <div className="MiddleName text-center text-[#49526a] text-sm font-medium font-['Mulish']">Email</div>
                    <div className=" text-center text-[#ff0000] text-base font-medium font-['Mulish']">*</div>
                  </div>
                  <div className="Field self-stretch px-4 py-2 bg-[#eaeef2] rounded-xl border border-[#828da9] justify-start items-center gap-[9px] inline-flex">
                    <div className="Frame237958 justify-start items-center gap-3 flex">
                      <div className="EnterEmailHere text-[#050505] text-sm font-medium font-['Mulish'] leading-[14px]">info@dangotecement.org</div>
                    </div>
                  </div>
                </div>
                <div className="FieldEntry self-stretch h-[70px] flex-col justify-start items-start gap-1 flex">
                  <div className="Title justify-start items-start gap-1 inline-flex">
                    <div className="MiddleName text-center text-[#49526a] text-sm font-medium font-['Mulish']">Website</div>
                  </div>
                  <div className="Field self-stretch px-4 py-2 bg-[#eaeef2] rounded-xl border border-[#828da9] justify-start items-center gap-[9px] inline-flex">
                    <div className="Frame237958 justify-start items-center gap-3 flex">
                      <div className="EnterEmailHere text-[#050505] text-sm font-medium font-['Mulish'] leading-[14px]">www.dangotecement.com</div>
                    </div>
                  </div>
                </div>
                <div className="FieldEntry self-stretch h-[70px] flex-col justify-start items-start gap-1 flex">
                  <div className="Title justify-start items-start gap-1 inline-flex">
                    <div className="MiddleName text-center text-[#49526a] text-sm font-medium font-['Mulish']">Company Address</div>
                    <div className=" text-center text-[#ff0000] text-base font-medium font-['Mulish']">*</div>
                  </div>
                  <div className="Field self-stretch px-4 py-2 bg-[#eaeef2] rounded-xl border border-[#828da9] justify-start items-center gap-[9px] inline-flex">
                    <div className="Frame237958 justify-start items-center gap-3 flex">
                      <div className="EnterEmailHere text-[#050505] text-sm font-medium font-['Mulish'] leading-[14px]">Somewhere around</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="PersonalDetails self-stretch h-[325px] p-6 rounded-xl border border-[#ccd0dc] flex-col justify-start items-start gap-6 flex">
              <div className="ContactPerson text-[#49526a] text-base font-bold font-['Mulish'] leading-none">CONTACT PERSON</div>
              <div className="Frame237977 self-stretch h-[242px] flex-col justify-start items-start gap-4 flex">
                <div className="FieldEntry self-stretch h-[70px] flex-col justify-start items-start gap-1 flex">
                  <div className="Title justify-start items-start gap-1 inline-flex">
                    <div className="MiddleName text-center text-[#49526a] text-sm font-medium font-['Mulish']">Contact Name</div>
                    <div className=" text-center text-[#ff0000] text-base font-medium font-['Mulish']">*</div>
                  </div>
                  <div className="Field self-stretch px-4 py-2 bg-[#eaeef2] rounded-xl border border-[#828da9] justify-start items-center gap-[9px] inline-flex">
                    <div className="Frame237958 justify-start items-center gap-3 flex">
                      <div className="EnterEmailHere text-[#050505] text-sm font-medium font-['Mulish'] leading-[14px]">Ibrahim Mohammed</div>
                    </div>
                  </div>
                </div>
                <div className="Frame237984 self-stretch justify-start items-start gap-4 inline-flex">
                  <div className="FieldEntry grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="Title justify-start items-start gap-1 inline-flex">
                      <div className="MiddleName text-center text-[#49526a] text-sm font-medium font-['Mulish']">Contact Telephone Number</div>
                      <div className=" text-center text-[#ff0000] text-base font-medium font-['Mulish']">*</div>
                    </div>
                    <div className="Field self-stretch px-4 py-2 bg-[#eaeef2] rounded-xl border border-[#828da9] justify-start items-center gap-[9px] inline-flex">
                      <div className="Frame237958 justify-start items-center gap-3 flex">
                        <div className="EnterEmailHere text-[#050505] text-sm font-medium font-['Mulish'] leading-[14px]">0909 000 9999</div>
                      </div>
                    </div>
                  </div>
                  <div className="FieldEntry grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="Title justify-start items-start gap-1 inline-flex">
                      <div className="MiddleName text-center text-[#49526a] text-sm font-medium font-['Mulish']">Contact Email Address</div>
                      <div className=" text-center text-[#ff0000] text-base font-medium font-['Mulish']">*</div>
                    </div>
                    <div className="Field self-stretch px-4 py-2 bg-[#eaeef2] rounded-xl border border-[#828da9] justify-start items-center gap-[9px] inline-flex">
                      <div className="Frame237958 justify-start items-center gap-3 flex">
                        <div className="EnterEmailHere text-[#050505] text-sm font-medium font-['Mulish'] leading-[14px]">0909 000 2222</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="FieldEntry self-stretch h-[70px] flex-col justify-start items-start gap-1 flex">
                  <div className="Title justify-start items-start gap-1 inline-flex">
                    <div className="MiddleName text-center text-[#49526a] text-sm font-medium font-['Mulish']">Contact Address</div>
                  </div>
                  <div className="Field self-stretch px-4 py-2 bg-[#eaeef2] rounded-xl border border-[#828da9] justify-start items-center gap-[9px] inline-flex">
                    <div className="Frame237958 justify-start items-center gap-3 flex">
                      <div className="EnterEmailHere text-[#050505] text-sm font-medium font-['Mulish'] leading-[14px]">Somewhere inside</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Management self-stretch h-[325px] p-6 rounded-xl border border-[#ccd0dc] flex-col justify-start items-start gap-6 flex">
              <div className="SeniorManagementOfficers text-[#49526a] text-base font-bold font-['Mulish'] leading-none">SENIOR MANAGEMENT/OFFICERS</div>
              <div className="Frame237977 self-stretch h-[242px] flex-col justify-start items-start gap-4 flex">
                <div className="Frame237984 self-stretch justify-start items-start gap-4 inline-flex">
                  <div className="FieldEntry grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="Title justify-start items-start gap-1 inline-flex">
                      <div className="MiddleName text-center text-[#49526a] text-sm font-medium font-['Mulish']">Title</div>
                      <div className=" text-center text-[#ff0000] text-base font-medium font-['Mulish']">*</div>
                    </div>
                    <div className="Field self-stretch px-4 py-2 bg-[#eaeef2] rounded-xl border border-[#828da9] justify-start items-center gap-[9px] inline-flex">
                      <div className="Frame237958 justify-start items-center gap-3 flex">
                        <div className="EnterEmailHere text-[#050505] text-sm font-medium font-['Mulish'] leading-[14px]">Mr.</div>
                      </div>
                      <div className="Icon rounded-[40px] justify-center items-center gap-2.5 flex">
                        <div className="IconsPack w-4 h-4 justify-center items-center flex">
                          <div className="Icons w-4 h-4 px-[2.83px] py-[5.50px] justify-center items-center inline-flex" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="FieldEntry grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="Title justify-start items-start gap-1 inline-flex">
                      <div className="MiddleName text-center text-[#49526a] text-sm font-medium font-['Mulish']">First Name</div>
                      <div className=" text-center text-[#ff0000] text-base font-medium font-['Mulish']">*</div>
                    </div>
                    <div className="Field self-stretch px-4 py-2 bg-[#eaeef2] rounded-xl border border-[#828da9] justify-start items-center gap-[9px] inline-flex">
                      <div className="Frame237958 justify-start items-center gap-3 flex">
                        <div className="EnterEmailHere text-[#050505] text-sm font-medium font-['Mulish'] leading-[14px]">Dangote</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Frame237979 self-stretch justify-start items-start gap-4 inline-flex">
                  <div className="FieldEntry grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="Title justify-start items-start gap-1 inline-flex">
                      <div className="MiddleName text-center text-[#49526a] text-sm font-medium font-['Mulish']">Other Names</div>
                    </div>
                    <div className="Field self-stretch px-4 py-2 bg-[#eaeef2] rounded-xl border border-[#828da9] justify-start items-center gap-[9px] inline-flex">
                      <div className="Frame237958 justify-start items-center gap-3 flex">
                        <div className="EnterEmailHere"></div>
                      </div>
                    </div>
                  </div>
                  <div className="FieldEntry grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="Title justify-start items-start gap-1 inline-flex">
                      <div className="MiddleName text-center text-[#49526a] text-sm font-medium font-['Mulish']">Last Name</div>
                      <div className=" text-center text-[#ff0000] text-base font-medium font-['Mulish']">*</div>
                    </div>
                    <div className="Field self-stretch px-4 py-2 bg-[#eaeef2] rounded-xl border border-[#828da9] justify-start items-center gap-[9px] inline-flex">
                      <div className="Frame237958 justify-start items-center gap-3 flex">
                        <div className="EnterEmailHere text-[#050505] text-sm font-medium font-['Mulish'] leading-[14px]">Dangote</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Frame237982 self-stretch justify-start items-start gap-4 inline-flex">
                  <div className="FieldEntry grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="Title justify-start items-start gap-1 inline-flex">
                      <div className="MiddleName text-center text-[#49526a] text-sm font-medium font-['Mulish']">Phone Number</div>
                      <div className=" text-center text-[#ff0000] text-base font-medium font-['Mulish']">*</div>
                    </div>
                    <div className="Field self-stretch px-4 py-2 bg-[#eaeef2] rounded-xl border border-[#828da9] justify-start items-center gap-[9px] inline-flex">
                      <div className="Frame237958 justify-start items-center gap-3 flex">
                        <div className="EnterEmailHere text-[#050505] text-sm font-medium font-['Mulish'] leading-[14px]">0909 000 5555</div>
                      </div>
                    </div>
                  </div>
                  <div className="FieldEntry grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="Title justify-start items-start gap-1 inline-flex">
                      <div className="MiddleName text-center text-[#49526a] text-sm font-medium font-['Mulish']">Company Position</div>
                      <div className=" text-center text-[#ff0000] text-base font-medium font-['Mulish']">*</div>
                    </div>
                    <div className="Field self-stretch px-4 py-2 bg-[#eaeef2] rounded-xl border border-[#828da9] justify-start items-center gap-[9px] inline-flex">
                      <div className="Frame237958 justify-start items-center gap-3 flex">
                        <div className="EnterEmailHere text-[#050505] text-sm font-medium font-['Mulish'] leading-[14px]">0909 000 8888</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Management self-stretch h-[325px] p-6 rounded-xl border border-[#ccd0dc] flex-col justify-start items-start gap-6 flex">
              <div className="SeniorManagementOfficers text-[#49526a] text-base font-bold font-['Mulish'] leading-none">SENIOR MANAGEMENT/OFFICERS</div>
              <div className="Frame237977 self-stretch h-[242px] flex-col justify-start items-start gap-4 flex">
                <div className="Frame237984 self-stretch justify-start items-start gap-4 inline-flex">
                  <div className="FieldEntry grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="Title justify-start items-start gap-1 inline-flex">
                      <div className="MiddleName text-center text-[#49526a] text-sm font-medium font-['Mulish']">Title</div>
                      <div className=" text-center text-[#ff0000] text-base font-medium font-['Mulish']">*</div>
                    </div>
                    <div className="Field self-stretch px-4 py-2 bg-[#eaeef2] rounded-xl border border-[#828da9] justify-start items-center gap-[9px] inline-flex">
                      <div className="Frame237958 justify-start items-center gap-3 flex">
                        <div className="EnterEmailHere text-[#050505] text-sm font-medium font-['Mulish'] leading-[14px]">Mr.</div>
                      </div>
                      <div className="Icon rounded-[40px] justify-center items-center gap-2.5 flex">
                        <div className="IconsPack w-4 h-4 justify-center items-center flex">
                          <div className="Icons w-4 h-4 px-[2.83px] py-[5.50px] justify-center items-center inline-flex" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="FieldEntry grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="Title justify-start items-start gap-1 inline-flex">
                      <div className="MiddleName text-center text-[#49526a] text-sm font-medium font-['Mulish']">First Name</div>
                      <div className=" text-center text-[#ff0000] text-base font-medium font-['Mulish']">*</div>
                    </div>
                    <div className="Field self-stretch px-4 py-2 bg-[#eaeef2] rounded-xl border border-[#828da9] justify-start items-center gap-[9px] inline-flex">
                      <div className="Frame237958 justify-start items-center gap-3 flex">
                        <div className="EnterEmailHere text-[#050505] text-sm font-medium font-['Mulish'] leading-[14px]">Dangote</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Frame237979 self-stretch justify-start items-start gap-4 inline-flex">
                  <div className="FieldEntry grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="Title justify-start items-start gap-1 inline-flex">
                      <div className="MiddleName text-center text-[#49526a] text-sm font-medium font-['Mulish']">Other Names</div>
                    </div>
                    <div className="Field self-stretch px-4 py-2 bg-[#eaeef2] rounded-xl border border-[#828da9] justify-start items-center gap-[9px] inline-flex">
                      <div className="Frame237958 justify-start items-center gap-3 flex">
                        <div className="EnterEmailHere"></div>
                      </div>
                    </div>
                  </div>
                  <div className="FieldEntry grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="Title justify-start items-start gap-1 inline-flex">
                      <div className="MiddleName text-center text-[#49526a] text-sm font-medium font-['Mulish']">Last Name</div>
                      <div className=" text-center text-[#ff0000] text-base font-medium font-['Mulish']">*</div>
                    </div>
                    <div className="Field self-stretch px-4 py-2 bg-[#eaeef2] rounded-xl border border-[#828da9] justify-start items-center gap-[9px] inline-flex">
                      <div className="Frame237958 justify-start items-center gap-3 flex">
                        <div className="EnterEmailHere text-[#050505] text-sm font-medium font-['Mulish'] leading-[14px]">Dangote</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Frame237982 self-stretch justify-start items-start gap-4 inline-flex">
                  <div className="FieldEntry grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="Title justify-start items-start gap-1 inline-flex">
                      <div className="MiddleName text-center text-[#49526a] text-sm font-medium font-['Mulish']">Phone Number</div>
                      <div className=" text-center text-[#ff0000] text-base font-medium font-['Mulish']">*</div>
                    </div>
                    <div className="Field self-stretch px-4 py-2 bg-[#eaeef2] rounded-xl border border-[#828da9] justify-start items-center gap-[9px] inline-flex">
                      <div className="Frame237958 justify-start items-center gap-3 flex">
                        <div className="EnterEmailHere text-[#050505] text-sm font-medium font-['Mulish'] leading-[14px]">0909 000 5555</div>
                      </div>
                    </div>
                  </div>
                  <div className="FieldEntry grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                    <div className="Title justify-start items-start gap-1 inline-flex">
                      <div className="MiddleName text-center text-[#49526a] text-sm font-medium font-['Mulish']">Company Position</div>
                      <div className=" text-center text-[#ff0000] text-base font-medium font-['Mulish']">*</div>
                    </div>
                    <div className="Field self-stretch px-4 py-2 bg-[#eaeef2] rounded-xl border border-[#828da9] justify-start items-center gap-[9px] inline-flex">
                      <div className="Frame237958 justify-start items-center gap-3 flex">
                        <div className="EnterEmailHere text-[#050505] text-sm font-medium font-['Mulish'] leading-[14px]">0909 000 8888</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="PersonalDetails self-stretch h-[203px] p-6 rounded-xl border border-[#ccd0dc] flex-col justify-start items-start gap-6 flex">
              <div className="JointVenture text-[#49526a] text-base font-bold font-['Mulish'] leading-none">JOINT VENTURE</div>
              <div className="FieldEntry self-stretch h-[120px] flex-col justify-start items-start gap-1 flex">
                <div className="Field self-stretch h-[120px] p-4 bg-[#f6f8fa] rounded-xl border border-[#005828] justify-start items-start gap-[9px] inline-flex">
                  <div className="Frame237958 grow shrink basis-0 self-stretch justify-start items-start gap-3 flex">
                    <div className="EnterEmailHere grow shrink basis-0"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Actions self-stretch p-3 bg-white rounded-xl justify-end items-center gap-4 inline-flex">
              <div className="ConfirmButton px-8 py-[13px] bg-[#00af50] rounded-[32px] justify-center items-center gap-2.5 flex">
                <div className="RequestADelivery text-white text-sm font-normal font-['Mulish'] leading-[14px]">Continue</div>
              </div>
            </div>
          </div>
        </div>
        <div className="Status self-stretch flex-col justify-start items-start inline-flex">
          <div className="Preview h-12 bg-[#f6f8fa] border-l flex-col justify-start items-center flex">
            <div className="Frame238103 self-stretch p-2 border-b justify-between items-center inline-flex">
              <div className="Page1Of12Showing text-[#49526a] text-xs font-semibold font-['Mulish'] leading-3">Page 1 of 12 showing</div>
              <div className="Frame238116 justify-end items-center gap-2 flex">
                <div className="PageCounter w-8 h-8 p-2.5 rounded-[40px] border border-[#e2e4eb] flex-col justify-center items-center gap-2.5 inline-flex">
                  <div className="Icon p-1 origin-top-left rotate-180 rounded justify-center items-center gap-2.5 inline-flex">
                    <div className="IconsPack w-4 h-4 justify-center items-center flex">
                      <div className="Icons w-4 h-4 px-[5.50px] py-[2.83px] justify-center items-center inline-flex" />
                    </div>
                  </div>
                </div>
                <div className="PageCounter w-8 h-8 p-2.5 rounded-[40px] border border-[#e2e4eb] flex-col justify-center items-center gap-2.5 inline-flex">
                  <div className="Icon p-1 origin-top-left rotate-180 rounded justify-center items-center gap-2.5 inline-flex">
                    <div className="IconsPack w-4 h-4 justify-center items-center flex">
                      <div className="Icons w-4 h-4 px-[5.50px] py-[2.83px] justify-center items-center inline-flex" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Pages w-[234px] grow shrink basis-0 bg-[#f6f8fa] border-l flex-col justify-start items-center flex">
            <div className="Frame238102 self-stretch h-[621px] p-2 flex-col justify-start items-center gap-2.5 flex">
              <div className="Frame237972 self-stretch p-2 rounded-lg border border-[#ccd0dc] justify-between items-center inline-flex">
                <div className="Frame237964 p-1 bg-[#eaeef2] rounded-sm justify-center items-start gap-2.5 flex">
                  <div className="FillingStatus text-center text-[#49526a] text-[10px] font-semibold font-['Mulish'] uppercase leading-[10px]">Filling status</div>
                </div>
                <div className=" text-center text-[#050505] text-xs font-normal font-['Mulish'] leading-3">72%</div>
              </div>
              <div className="Frame237969 self-stretch p-2 rounded-lg border border-[#ccd0dc] justify-between items-center inline-flex">
                <div className="Frame237964 p-1 bg-[#eaeef2] rounded-sm justify-center items-start gap-2.5 flex">
                  <div className="Uploads text-center text-[#49526a] text-[10px] font-semibold font-['Mulish'] uppercase leading-[10px]">uploads</div>
                </div>
                <div className="12Uploads text-center text-[#050505] text-xs font-semibold font-['Mulish'] leading-3">6/12 Uploads</div>
              </div>
              <div className="Frame237971 self-stretch p-2 rounded-lg border border-[#ccd0dc] justify-between items-center inline-flex">
                <div className="Frame237964 p-1 bg-[#eaeef2] rounded-sm justify-center items-start gap-2.5 flex">
                  <div className="Fields text-center text-[#49526a] text-[10px] font-semibold font-['Mulish'] uppercase leading-[10px]">Fields</div>
                </div>
                <div className="41Fields text-center text-[#050505] text-xs font-normal font-['Mulish'] leading-3">22/41 Fields</div>
              </div>
              <div className="Frame237970 self-stretch p-2 rounded-lg border border-[#ccd0dc] justify-between items-center inline-flex">
                <div className="Frame237964 p-1 bg-[#eaeef2] rounded-sm justify-center items-start gap-2.5 flex">
                  <div className="DateStarted text-center text-[#49526a] text-[10px] font-semibold font-['Mulish'] uppercase leading-[10px]">Date Started</div>
                </div>
                <div className="Nov2023 text-center text-[#050505] text-xs font-semibold font-['Mulish'] leading-3">12/Nov/2023</div>
              </div>
              <div className="Frame237973 self-stretch p-2 bg-[#fff3d5] rounded-lg border border-[#ccd0dc] justify-between items-center inline-flex">
                <div className="Frame237964 p-1 bg-[#fd838f] rounded-sm justify-center items-start gap-2.5 flex">
                  <div className="DaysLeft text-center text-white text-[10px] font-semibold font-['Mulish'] uppercase leading-[10px]">days left</div>
                </div>
                <div className="Days text-center text-[#050505] text-xs font-semibold font-['Mulish'] leading-3">13 Days</div>
              </div>
              <div className="Frame238120 w-[100px] h-[400px] relative" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default CustomerDdqViewEditPage;
