import { useState, useEffect } from 'react';
import { ApiResponse, LineItemType, useInitGCCMutation } from '@/Redux/Features/Gcc/Gcc';
import useScrollToId from '@/Utils/useScrollToId';
import { FaDeleteLeft } from 'react-icons/fa6';
import { MdCancel } from 'react-icons/md';
import { RiEdit2Fill, RiFileAddFill, RiSaveFill } from 'react-icons/ri';
import { format } from 'date-fns';

export default function InventoryTable({
  onGccCreate,
}: {
  onCreateInvoiceAdviceClick: () => void;
  onGccCreate: (data: LineItemType[]) => void;
}) {
  const scrollToId = useScrollToId();
  const [lineItems, setLineItems] = useState<LineItemType[]>();
  const [backlog, setBacklog] = useState<LineItemType[]>([]);
  const [editingRow, setEditingRow] = useState<number | null>(null);
  const [tempEditValues, setTempEditValues] = useState<Partial<LineItemType>>({});

  const [initGCC] = useInitGCCMutation();

  const fetchLineItems = async () => {
    try {
      const response: ApiResponse = await initGCC({
        customer_id: 31,
        customer_site_id: 11,
      });

      if (response.data?.status === 'success') {
        const fetchedListItems = response.data?.data?.list_item || [];
        setLineItems(fetchedListItems);
      } else {
        setLineItems([]);
      }
    } catch (error) {
      console.error('Error fetching line items:', error);
      setLineItems([]);
    }
  };

  useEffect(() => {
    fetchLineItems();
  }, [initGCC]);

  const sortBySn = (arr: LineItemType[]) => arr.sort((a, b) => a.sn - b.sn);

  const moveToBacklog = async (id: number) => {
    const itemToMove = lineItems?.find(item => item.id === id);
    if (itemToMove) {
      setBacklog((prevBacklog) => sortBySn([...prevBacklog, itemToMove]));
      setLineItems((prevLineItems) =>
        sortBySn((prevLineItems || []).filter((item) => item.id !== id))
      );
    }
  };

  const moveToLineItems = async (index: number) => {
    const rowToMove = backlog[index];
    setLineItems((prevLineItems) => sortBySn([...((prevLineItems || []) as LineItemType[]), rowToMove]));
    setBacklog((prevBacklog) =>
      sortBySn(prevBacklog.filter((_, idx) => idx !== index))
    );
  };


  const handleCreateGCC = () => {

    console.log('lineItems:', lineItems);
    console.log('backlog:', backlog);
    const allItems = [...(lineItems ?? []), ...(backlog ?? [])];

    console.log('allItems (combined):', allItems);
    
    onGccCreate(allItems);
  };



  const handleEditClick = (index: number, row: LineItemType) => {
    setEditingRow(index);
    setTempEditValues({ volume: row.volume, other: row.other });
  };

  const handleSaveClick = async (index: number, row: LineItemType) => {
    const updatedRow = { ...row, ...tempEditValues };

    setLineItems((prevLineItems) =>
      sortBySn(
        (prevLineItems || []).map((item, idx) => (idx === index ? updatedRow : item))
      )
    );
    setEditingRow(null);
  };



  return (
    <div className='w-[100%]'>
      <div className="flex justify-end mb-6 mr-4">
        <button
          className="px-3 py-2 bg-[#53B052] text-white rounded"
          onClick={handleCreateGCC}
        >
          Create GCC
        </button>
      </div>
      <div className="flex flex-col items-start w-full gap-2 lg:flex-row">
        <div className="container py-4 md:p-4 mx-auto space-y-8 w-full lg:w-[100%]">
          <div
            id="line-items"
            className="overflow-x-auto rounded-lg shadow tiny-scrollbar"
          >
            <table className="min-w-full bg-white">
              <caption className="p-4 text-lg font-semibold text-left bg-gray-100">
                Line Items
              </caption>
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    SN
                  </th>
                  <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Volume
                  </th>
                  <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Inlet
                  </th>
                  <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Outlet
                  </th>
                  <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Date
                  </th>
                  <th className="p-4 text-xs font-medium tracking-wider text-right text-gray-500 uppercase">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {lineItems?.map((row, index) => (
                  <tr key={index}>
                    <td className="p-4 text-sm font-medium text-gray-900 whitespace-nowrap">{index + 1}</td>
                    <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
                      {editingRow === index ? (
                        <input
                          type="number"
                          value={tempEditValues.volume || ''}
                          onChange={(e) =>
                            setTempEditValues({
                              ...tempEditValues,
                              volume: Number(e.target.value),
                            })
                          }
                          className="px-2 py-1 border rounded max-w-[100px]"
                        />
                      ) : (
                        row.volume
                      )}
                    </td>
                    <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
                      {row.inlet_pressure ? row.inlet_pressure : row.inlet}
                    </td>
                    <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
                      {row.outlet_pressure ? row.outlet_pressure : row.outlet}
                    </td>
                    <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
                      {row.original_date
                        ? format(new Date(row.original_date), 'MM-dd-yyyy')
                        : row.created_at
                          ? format(new Date(row.created_at), 'MM-dd-yyyy')
                          : ''}
                    </td>
                    <td className="flex items-center justify-end gap-0.5 p-4 text-sm text-right text-gray-500 whitespace-nowrap">
                      {editingRow === index ? (
                        <span
                          className="flex items-center justify-center p-1 transition-all cursor-pointer hover:scale-110 animate-bounce"
                          onClick={() => handleSaveClick(index, row)}
                          title="Save Changes"
                        >
                          <RiSaveFill className="w-5 h-5 text-[#00AF50]" />
                        </span>
                      ) : (
                        <span
                          className="flex items-center justify-center p-1 transition-all cursor-pointer hover:scale-110"
                          title="Edit Line Item"
                          onClick={() => handleEditClick(index, row)}
                        >
                          <RiEdit2Fill className="w-5 h-5 text-[#FFA02E]" />
                        </span>
                      )}

                      <span
                        className="flex items-center justify-center p-1 transition-all cursor-pointer hover:scale-110"
                        onClick={async () => {
                          if (editingRow !== index) {
                            await moveToBacklog(row.id);
                            scrollToId('backlog');
                          } else {
                            setEditingRow(null);
                            setTempEditValues({});
                          }
                        }}
                        title={
                          editingRow !== index
                            ? 'Move to Backlog'
                            : 'Cancel changes'
                        }
                      >
                        {editingRow === index ? (
                          <MdCancel className="w-5 h-5 text-[#ED0027]" />
                        ) : (
                          <FaDeleteLeft className="w-5 h-5 text-[#ED0027]" />
                        )}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {backlog.length > 0 && (
            <div id="backlog" className="overflow-x-auto rounded-lg shadow">
              <table className="min-w-full bg-white">
                <caption className="p-4 text-lg font-semibold text-left bg-gray-100">
                  Line Items Backlog
                </caption>
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      SN
                    </th>
                    <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Volume
                    </th>
                    <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Inlet
                    </th>
                    <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Outlet
                    </th>
                    <th className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Date
                    </th>
                    <th className="p-4 text-xs font-medium tracking-wider text-right text-gray-500 uppercase">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {backlog.map((row, index) => (
                    <tr key={index}>
                      <td className="p-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
                        {row.volume}
                      </td>
                      <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
                        {row.inlet_pressure}
                      </td>
                      <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
                        {row.outlet_pressure ? row.outlet_pressure : row.outlet}
                      </td>
                      <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
                        {row.original_date
                          ? format(new Date(row.original_date), 'MM-dd-yyyy')
                          : row.created_at
                            ? format(new Date(row.created_at), 'MM-dd-yyyy')
                            : ''}
                      </td>
                      <td className="flex items-center justify-end gap-0.5 p-4 text-sm text-right text-gray-500 whitespace-nowrap">
                        <span
                          className="flex items-center justify-center p-1 transition-all cursor-pointer hover:scale-110"
                          onClick={async () => {
                            await moveToLineItems(index);
                            scrollToId(`line-item${row.sn}`);
                          }}
                          title="Move to Line Items"
                        >
                          <RiFileAddFill className="w-5 h-5 text-[#00AF50]" />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>

  );
}

