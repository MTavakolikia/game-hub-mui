import { Avatar } from '@mui/material'
import ColorMode from '../ColorMode'
import Logo from '../../assets/images/logo.png'
import SearchInput from '../SearchInput'

const Navbar = () => {
    return (
        <div className="flex gap-4">
            <Avatar alt="GameHub Logo" src={Logo} sx={{ width: 46, height: 46, bgcolor: "#cfcfcf" }} variant="square" className='m-2' />
            <SearchInput />
            <ColorMode />
        </div>
    )
}

export default Navbar