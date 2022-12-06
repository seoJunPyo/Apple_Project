import axios from 'axios';
import React, { useEffect } from 'react';
// bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useQueries, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const HeadNav = () => {
	let userData = useQuery('user', () =>
		axios.get('https://codingapple1.github.io/userdata.json').then((res) => {
			return res.data;
		})
	);

	const navigate = useNavigate();
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">Shop</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link
						onClick={() => {
							navigate('/');
						}}>
						Home
					</Nav.Link>
					<Nav.Link
						onClick={() => {
							navigate('/about');
						}}>
						About
					</Nav.Link>
					<Nav.Link
						onClick={() => {
							navigate('/event');
						}}>
						Event
					</Nav.Link>
					<Nav.Link disabled>
						{userData.isLoading ? '로딩중' : userData.data.name}
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default HeadNav;
