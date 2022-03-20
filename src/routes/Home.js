import React from 'react'
import Container from '@mui/material/Container'
import SearchList from "../components/SearchList.js"


const Home = () => {
    return (
        <div>

            <Container maxWidth="lg" sx={{ mt: 5 }} >
                <SearchList />
            </Container>

        </div>
    )
}

export default Home