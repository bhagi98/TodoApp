import { useState } from 'react'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import {

	Grid,
	TextField,
	FormControlLabel,
	Paper,
	Button

} from '@material-ui/core';
import Checkbox from '@mui/material/Checkbox';

import LockOpenIcon from '@mui/icons-material/LockOpen';
import { deepPurple } from '@mui/material/colors';


function App() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [checked, setChecked] = React.useState(true);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/dashboard'
		} else {
			alert('Please check your username and password')
		}
	}

	return (
		<div>
			<div style={{ padding: 30 }} >
				<form onSubmit={loginUser}>
					<Paper style={{ padding: 150, backgroundColor: "#eadff5" }}>
						<Grid
							container
							spacing={3}
							direction={'column'}
							justify={'center'}
							alignItems={'center'}

						>
							<Avatar sx={{ bgcolor: deepPurple[300] }}>
								<LockOpenIcon />
							</Avatar>
							<h3>Login</h3>
							<Grid item xs={12}>
								<TextField
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									type="email"
									placeholder="Email"
									label="Email"
									color="deepPurple"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									type="password"
									placeholder="Password"
									label="Password"
									color="deepPurple"
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControlLabel
									control={
										<Checkbox
											color="secondary"
											checked={checked}
											onChange={handleChange}
											label={'Keep me logged in'}
											inputProps={{ 'aria-label': 'primary checkbox' }}
										/>
									}
									label="Keep me logged in"
								/>
							</Grid>
							<Grid item xs={12}>
								<Button
									type="submit" value="Login" fullWidth
									className="ui button  icon purple"
								>Login
								</Button>
							</Grid>
						</Grid>
					</Paper>
				</form>
			</div>


		</div>
	)
}

export default App
