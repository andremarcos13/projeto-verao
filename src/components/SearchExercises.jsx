import React, { useEffect, useState } from 'react';
import {
  Box, Button, Stack, TextField, Typography,
} from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';

function SearchExercises() {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/exercises', exerciseOptions);
      const searchedExercises = exercisesData
        .filter((elem) => elem.name.toLowerCase().includes(search)
        || elem.target.toLowerCase().includes(search)
        || elem.equipament.toLowerCase().includes(search)
        || elem.bodyPart.toLowerCase().includes(search));
      console.log(searchedExercises);
      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="50px" textAlign="center">
        Exercises you should know!
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '800px', xs: '350px' }, backgroundColor: '#FFF', borderRadius: '40px',
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#FF2625', color: '#FFF', textTransform: 'none', width: { lg: '175px', xs: '80px' }, fontSize: { lg: '20px', xs: '14px' }, height: '56px', position: 'absolute', right: '0',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
}

export default SearchExercises;
