import { Avatar, IconButton, InputBase } from '@mui/material'
import ColorMode from '../ColorMode'
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../../assets/images/logo.png'

const Navbar = () => {
    return (
        <div className="flex gap-4">

            <div className="flex justify-center items-center">
                <Avatar alt="GameHub Logo" src={Logo} sx={{ width: 46, height: 46, bgcolor: "#cfcfcf" }} variant="square" className='m-2' />
            </div>
            <div className="flex-1 items-center justify-center flex bg-white dark:bg-zinc-900 my-2 rounded-full">
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    placeholder="Search Games..."
                    className='ml-1 flex-1'
                />
            </div>
            <div className="flex justify-center items-center">
                <ColorMode />
            </div>

        </div>
    )
}

export default Navbar