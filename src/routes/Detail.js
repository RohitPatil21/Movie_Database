import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';





const Detail = () => {

	const { id } = useParams();

 	const [details, setDetails] = useState({});
	
	const fetchFn = async() => {
		const res = await fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apiKey=aaf156a4`);
		const data = await res.json();
		data.actors_arr = data.Actors.split(", ");
		setDetails(data);
		console.log("Hello",data);
	}

	useEffect(() => {fetchFn();}, [id]);

	return (
		<div>

			<Container maxWidth="xl" sx={{ mt: 2 }}>
				<Breadcrumbs aria-label="breadcrumb">
						<Link to="/">
							<Typography underline="hover"> Home </Typography>
						</Link>
					<Typography color="text.primary" > Details </Typography>
				</Breadcrumbs>
			</Container>

			<Container maxWidth="lg" sx={{ mt: 4 }}>
				<Grid container spacing={2} columns={16}>

					<Grid item xs={4}>
						<Stack spacing={2}>
							<img src={details?.Poster} />
							<Typography component="legend" variant="h5">Rating</Typography>
							<Rating name="read-only" value={4} readOnly />
						</Stack>
					</Grid>

					<Grid item xs={8} sx={{ ml: 4 }} >
						<Stack spacing={2}>
							<Typography variant='h4' gutterBottom component="div"> {details?.Title} </Typography>

							<Stack direction="row" spacing={2}>
								<Chip label={details?.Type} />
								<Typography variant="h6" gutterBottom component="div" > / </Typography>
								<Typography variant="subtitle1" gutterBottom component="div" > {details?.Genre} </Typography>
								<Typography variant="h6" gutterBottom component="div" > / </Typography>
								<Typography variant="subtitle1" gutterBottom component="div" > {details?.Language} </Typography>
							</Stack>

							<Typography variant="subtitle1" gutterBottom component="div" > Plot :   </Typography>
							<Typography variant="subtitle1" gutterBottom component="div" > {details?.Plot}  </Typography>

							<Stack direction="row" spacing={2}>
								<Typography variant="h5" gutterBottom component="div" > Cast :  </Typography>

								{details?.actors_arr?.map((actor, idx) => {
									return (
									<Chip label={actor} key={idx} />
									)
								})}
							</Stack>


						</Stack>



					</Grid>
				</Grid>
			</Container>

		</div>
	)
}

export default Detail