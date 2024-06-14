import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../models/platform';

interface Props {
    onSelectedPlatform: (platform: Platform) => void
}

export default function PlatformSelector({ onSelectedPlatform }: Props) {
    const [age, setAge] = React.useState('');
    const { data, error, loading } = usePlatforms();
    console.log(data);


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
                    onChange={(e) => console.log(e.target.value)}
                >
                    {data.map(platform =>
                        <MenuItem onClick={() => { onSelectedPlatform(platform); setAge(platform.slug) }} key={platform.id} value={platform.slug}>{platform.name}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </Box>
    );
}
