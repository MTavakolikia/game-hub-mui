import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

interface Props {
    onSelectSortOrder: (sortOrder: string) => void
    sortOrder: string
}

export default function SortSelector({ onSelectSortOrder }: Props) {
    const [selectedSort, setSelectedSort] = React.useState({ value: "relevence", label: "Relevance" });
    const sortOrders = [
        { value: "relevence", label: "Relevance" },
        { value: "-added", label: "Date added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release date" },
        // { value: "-metacritic", label: "Popularity" },
        // { value: "-rating", label: "Average rating" },
    ];



    return (
        <Box sx={{ width: 180 }}>
            <FormControl sx={{ minWidth: "180px" }}>
                <InputLabel id="order-by-id">Order By</InputLabel>
                <Select
                    labelId="order-by-id"
                    id="order-by-id"
                    value={selectedSort}
                    label="Order By"
                    onChange={(e) => setSelectedSort(e.target.value)}
                >
                    {sortOrders.map(item => <MenuItem onClick={() => onSelectSortOrder(item.value)} key={item.value} value={item.value}>{item.label}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    );
}
