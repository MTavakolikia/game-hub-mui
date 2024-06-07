import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import usePlatforms from '../hooks/usePlatforms';

export default function PlatformSelector() {
    const [age, setAge] = React.useState('');
    const { data, error, loading } = usePlatforms();
    console.log(data);

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    if (error && loading) return null
    return (
        <Box sx={{ width: 180 }}>
            <FormControl sx={{ minWidth: "180px" }}>
                <InputLabel id="platform-label">Platforms</InputLabel>
                <Select
                    labelId="platform-label"
                    id="platform-selector"
                    value={age}
                    label="Platforms"
                    onChange={handleChange}
                >
                    {data.map(platform =>
                        <MenuItem key={platform.id} value={platform.slug}>{platform.name}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </Box>
    );
}
