import { ArrowBack } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import Designation from './Designation'
import LocationGroup from './LocationGroup'
import Unit from './Unit'

const UserSettings = () => {
    return (
        <div className="">
            <Link to={'/admin/settings'}>
                <div className='flex justify-center items-center border-2 h-[32px] w-[32px] rounded-[50%]'>
                    <ArrowBack color="success" style={{ fontSize: 'medium' }} />
                </div>
            </Link>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <Unit />
                <LocationGroup />
                <Designation />
            </div>
        </div>
    )
}

export default UserSettings