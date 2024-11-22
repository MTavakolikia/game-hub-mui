
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const MtForm = styled('form')(({ theme }) => ({
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    margin: "10px 0",
    borderRadius: "30px",
    border: `1px solid gray`,
    ...theme.applyStyles('dark', {
        backgroundColor: "gray",
        borderColor: "black"
    }),
}));

const SearchInput = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target[1].value);
    }
    return (
        <MtForm
            onSubmit={(event) => handleSubmit(event)}
        >
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                placeholder="Search Games..."
                className='ml-1 flex-1'
            />
        </MtForm>

    )
}

export default SearchInput