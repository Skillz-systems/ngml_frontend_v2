import { invoiceAdviceData } from '../InvoicePage.tsx/data'

// import { invoiceAdviceData } from './data';
import Table from './Table'
const ListItems = () => {
    return (
        <div>
            <Table invoiceAdviceData={invoiceAdviceData} />
        </div>
    )
}

export default ListItems