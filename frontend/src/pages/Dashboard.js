import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Form from "../components/Form";
import Section from "../components/Section";
import List from "../components/List";
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import Header from './Header';

const appTitle = "Todo List";


const Dashboard = () => {
	const history = useHistory()
	const [todoList, setTodoList] = useState([]);

	useEffect(() => {
		const token = localStorage.getItem('token')

		if (token) {
			const user = jwt.decode(token)
			if (!user) {
				localStorage.removeItem('token')
				history.replace('/login')
			} else {
				async function fetchData() {
					const { data } = await axios.get("http://localhost:1337/todos",);
					setTodoList(data);
				}
				fetchData();
			}
		}
	}, []);

	const addTodo = async (item) => {
		const token = localStorage.getItem('token')

		const user = jwt.decode(token)
		if (!user) {
			localStorage.removeItem('token')
			history.replace('/login')
		} else {
			const { data } = await axios.post("http://localhost:1337/todos", item);
			setTodoList((oldList) => [...oldList, data]);
		}
	};

	const removeTodo = async (id) => {

		const token = localStorage.getItem('token')
		const user = jwt.decode(token)
		if (!user) {
			localStorage.removeItem('token')
			history.replace('/login')
		} else {
			await axios.delete(`http://localhost:1337/todos/${id}`);
			setTodoList((oldList) => oldList.filter((item) => item._id !== id));
		}
	};

	const editTodo = async (id, item) => {

		const token = localStorage.getItem('token')
		const user = jwt.decode(token)
		if (!user) {
			localStorage.removeItem('token')
			history.replace('/login')
		} else {
			await axios.put(`http://localhost:1337/todos/${id}`, item);
		}
	};

	return (

		<div className="ui container center aligned">
			<Section>
			<FormatListNumberedIcon />	<Header title="Todo List"> </Header>
				
			</Section>

			<Section>
				<Form addTodo={addTodo} />
			</Section>

			<Section>
				<List
					editTodoListProp={editTodo}
					removeTodoListProp={removeTodo}
					list={todoList}
				/>
			</Section>
		</div>

	)
}

export default Dashboard
