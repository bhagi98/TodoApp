import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { deepPurple } from '@mui/material/colors';
import {
	Grid,
	TextField,
	Paper,
	Button

} from '@material-ui/core';


function App() {
	const history = useHistory()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			history.push('/login')
		}
	}

	return (
		<div>
			<div style={{ padding: 30 }} >
				<form onSubmit={registerUser}>
					<Paper style={{ padding: 150, backgroundColor: "#eadff5" }}>
						<Grid
							container
							spacing={3}
							direction={'column'}
							justify={'center'}
							alignItems={'center'}
						>
							<Avatar sx={{ bgcolor: deepPurple[300] }}>
								<AppRegistrationIcon />
							</Avatar>
							<h3>Register</h3>
							<Grid item xs={12}>
								<TextField
									value={name}
									onChange={(e) => setName(e.target.value)}
									type="text"
									placeholder="Name"
									label="Name"
									color="deepPurple"
								/>
							</Grid>
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
								<Button variant="contained" className="ui button  icon purple"
									type="submit" value="Register" fullWidth> Register </Button>
							</Grid>
						</Grid>
					</Paper>
				</form>
			</div>


		</div>
	)
}

export default App
