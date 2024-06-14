
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase } from '@mui/material';

const SearchInput = () => {
    return (
        <div className="flex-1 items-center justify-center flex bg-white dark:bg-zinc-900 my-2 rounded-full">
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                placeholder="Search Games..."
                className='ml-1 flex-1'
            />
        </div>
    )
}

export default SearchInput