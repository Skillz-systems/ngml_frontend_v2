import { CustomInput } from "@/Components";


interface AddNewLocationProps {
    companyData: any;
    setCompanyData: React.Dispatch<React.SetStateAction<any>>;
}



const AddNewLocation: React.FC<AddNewLocationProps> = ({ companyData, setCompanyData }) => {
    const handleInputChange = (value: string, key: string) => {
        console.log(value)
        setCompanyData({ ...companyData, [key]: value });
    };

    return (
        <div>
            <CustomInput
                required
                type="text"
                label='Location Address'
                value={companyData.companyaddress}
                handleChangeEvent={(value: string) => handleInputChange(value, "companyaddress")}
                placeholder="Input Company Address Here"
            />

        </div>
    )
}

export default AddNewLocation
