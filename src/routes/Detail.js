import React, { useEffect } from 'react'
import Container from '@mui/material/Container'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';





const Detail = () => {

	return (
		<div>

			<Container maxWidth="xl" sx={{ mt: 2 }}>
				<Breadcrumbs aria-label="breadcrumb">
					<Link underline="hover" color="primary">
						<RouterLink to="/">
							Home
						</RouterLink>
					</Link>
					<Typography color="text.primary" > Details </Typography>
				</Breadcrumbs>
			</Container>

			<Container maxWidth="lg" sx={{ mt: 4 }}>
				<Grid container spacing={2} columns={16}>

					<Grid item xs={4}>
						<Stack spacing={2}>
							<img src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg" />
							<Typography component="legend" variant="h5">Rating</Typography>
							<Rating name="read-only" value={4} readOnly />
						</Stack>
					</Grid>

					<Grid item xs={8} sx={{ ml: 4 }} >
						<Stack spacing={2}>
							<Typography variant='h4' gutterBottom component="div"> Avengers </Typography>

							<Stack direction="row" spacing={2}>
								<Chip label="Movie" />
								<Typography variant="h6" gutterBottom component="div" > / </Typography>
								<Typography variant="subtitle1" gutterBottom component="div" > Biography, Drama </Typography>
								<Typography variant="h6" gutterBottom component="div" > / </Typography>
								<Typography variant="subtitle1" gutterBottom component="div" > English / French </Typography>
							</Stack>

							<Typography variant="subtitle1" gutterBottom component="div" > Plot :  </Typography>
							<Typography variant="subtitle1" gutterBottom component="div" > On a fail night in 2003, Undergrad computer programming  </Typography>

							<Stack direction="row" spacing={2}>
								<Typography variant="h5" gutterBottom component="div" > Cast :  </Typography>
								<Chip label="Aron Sorkin" />
								<Chip label="Aron Sorkin" />
							</Stack>


						</Stack>



					</Grid>
				</Grid>
			</Container>

		</div>
	)
}

export default Detail