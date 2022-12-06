import './App.css';
// react
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
import React, { useState, createContext, useEffect } from 'react';
//page
import MainPage from './Page/MainPage';
import DetailPage from './Page/DetailPage';
import AboutPage from './Page/AboutPage';
import EventPage from './Page/EventPage';
// components & data
import data from './data/shoes';
import axios from 'axios';
import CartPage from './Page/CartPage';
import HeadNav from './components/Nav';

export const ShoesContext = createContext();

function App() {
	const [shoes, setShoes] = useState(data);
	const [urlCount, setUrlCount] = useState(2);
	const [loading, setLoading] = useState(false);
	const [stock, setStcok] = useState([10, 11, 12]);

	const getData = async () => {
		setLoading(true);
		try {
			let result = await axios.get(
				`https://codingapple1.github.io/shop/data${urlCount}.json`
			);
			setShoes([...shoes, ...result.data]);
			setUrlCount(urlCount + 1);
			setLoading(false);
		} catch {
			console.log('실패');
		}
	};

	useEffect(() => {
		const watchedID = JSON.parse(localStorage.getItem('watched'));

		if (!watchedID) {
			localStorage.setItem('watched', JSON.stringify([]));
		}
	}, []);

	return (
		<div className="App">
			<HeadNav />
			<Routes>
				<Route
					path="/"
					element={
						<MainPage
							shoes={shoes}
							getData={getData}
							count={urlCount}
							loading={loading}
						/>
					}
				/>
				<Route
					path="/detail/:urlID"
					element={
						<ShoesContext.Provider value={{ shoes, stock }}>
							<DetailPage />
						</ShoesContext.Provider>
					}
				/>
				<Route path="/cart" element={<CartPage />} />
				<Route path="/Event" element={<EventPage />}>
					<Route
						path="one"
						element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
					<Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
				</Route>
				<Route path="/about" element={<AboutPage />}>
					<Route path="member" element={<div>멤버</div>} />
					<Route path="location" element={<div>위치</div>} />
				</Route>
				<Route path="*" element={<div>없는 페이지입니다.</div>} />
			</Routes>
		</div>
	);
}

export default App;
