import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function SortSelector() {
    const [selectedSort, setSelectedSort] = React.useState('');


    return (
        <Box sx={{ width: 180 }}>
            <FormControl sx={{ minWidth: "180px" }}>
                <InputLabel id="sort-selector-id">Sort Selector</InputLabel>
                <Select
                    labelId="sort-selector-id"
                    id="sort-selector-id"
                    value={selectedSort}
                    label="Sort Selector"
                    onChange={(e) => setSelectedSort(e.target.value)}
                >
                    <MenuItem value={"relevance"}>Relevance</MenuItem>
                    <MenuItem value={"date-added"}>Date added</MenuItem>
                    <MenuItem value={"name"}>Name</MenuItem>
                    <MenuItem value={"release-date"}>Release date</MenuItem>
                    <MenuItem value={"popularity"}>Popularity</MenuItem>
                    <MenuItem value={"average"}>Average</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
