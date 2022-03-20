import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import MovieCard from './MovieCard';

const SearchList = () => {

    const [movies, setMovies] = useState([]);


    const fetchData = async () => {
        const res = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=aaf156a4&s=avengers');
        const data = await res.json();
        setMovies(data.Search);
    }

    useEffect(() => { fetchData(); }, []);



    return (
        <div>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }}>

                {movies.map((singleMovie,index) => {
                    return (
                        <Grid item key={index}>
                            <MovieCard data={singleMovie} />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    )
}

export default SearchList