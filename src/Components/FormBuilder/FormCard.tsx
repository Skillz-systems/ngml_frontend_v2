import { FaEdit } from 'react-icons/fa';
import { Button } from './ButtonComponent';
import { useNavigate } from 'react-router-dom';

const FormCard = ({
  formName,
  formStatus,
  dateCreated,
  formDescription,
  formId,
}: {
  formName: string;
  formStatus: string;
  dateCreated: string;
  formDescription: string;
  formId: number;
}) => {
  const navigate = useNavigate();
  const openForm = () => navigate(`/formbuilder/create-form/${formId}`);

  return (
    <div className="w-[48.5%] md:w-[31.5%] lg:w-[23.5%] bg-white px-3 py-4 md:px-6 border-[1.5px] border-dark-green/20 h-[200px] md:h-[190px] items-center justify-center flex flex-col border-dashed gap-4 rounded-lg">
      <div className="flex flex-col items-start justify-between w-full space-y-3 md:flex-row">
        <div className="flex flex-col md:space-y-1">
          <b className="text-base">{formName}</b>
          <span className="text-sm text-gray-600">{dateCreated}</span>
        </div>
        <div
          className={`flex items-center justify-center w-max px-2.5 py-0.5 text-xs text-white font-semibold rounded-md ${
            formStatus.toLowerCase() === 'draft'
              ? 'bg-color-bright-red'
              : 'bg-light-green'
          }`}
        >
          {formStatus}
        </div>
      </div>
      <div className="flex flex-col w-full space-y-3">
        <p className="text-sm truncate">{formDescription}</p>
        <Button
          type="submit"
          className="w-full gap-2 font-semibold font-base"
          onClick={openForm}
        >
          Edit form
          <FaEdit />
        </Button>
      </div>
    </div>
  );
};

export default FormCard;
