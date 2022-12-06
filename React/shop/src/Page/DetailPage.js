import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ShoesContext } from '../App';
import DetailTab from '../components/DetailTab';
import { addCart } from '../store/cartSlice';
import { Link } from 'react-router-dom';

const DetailPage = (props) => {
	const { shoes, stock } = useContext(ShoesContext);
	const [alert, setAlert] = useState(true);
	const [amount, setAmount] = useState(0);
	const [isload, setIsLoad] = useState('');
	const { urlID } = useParams();
	const shoe = shoes.filter((data) => data.id == urlID);
	const { id, title, content, price } = shoe[0];

	const dispath = useDispatch();
	const cart = useSelector((state) => {
		return state.cart;
	});

	useEffect(() => {
		const watchedID = JSON.parse(localStorage.getItem('watched'));

		setIsLoad('');
		setIsLoad('end');

		return () => {
			if (!watchedID) {
				return;
			}
			const find = watchedID.find((item) => item.id === id);

			if (!find) {
				watchedID.push(shoe[0]);
				localStorage.setItem('watched', JSON.stringify(watchedID));
			}
		};
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			setAlert(false);
		}, 2000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	useEffect(() => {
		if (isNaN(amount)) {
			console.log('숫자만 입력해주세요');
		}
	}, [amount]);

	const formetPrice = (price) => {
		let result = new Intl.NumberFormat('ko-KR', {
			style: 'currency',
			currency: 'KRW',
		}).format(price);

		return result;
	};

	const order = () => {
		const info = { id: id, name: title, count: Number(amount) };
		dispath(addCart(info));
	};

	return (
		<div className="container">
			<div className={`row start ${isload}`}>
				{alert && (
					<div className="alert alert-warning">2초이내 구매시 할인</div>
				)}
				<div className="col-md-6">
					<img
						src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`}
						width="100%"
						alt="신발1"
					/>
				</div>
				<div className="col-md-6">
					<h4 className="pt-5">{title}</h4>
					<p>{content}</p>
					<p>{formetPrice(price)}</p>
					<input
						type="text"
						onChange={(e) => {
							setAmount(e.target.value);
						}}
					/>
					<button className="btn btn-danger" onClick={order}>
						주문하기
					</button>
					<div>
						<Link to={'/cart'}>장바구니</Link>
					</div>
				</div>
			</div>
			<DetailTab />
		</div>
	);
};

export default DetailPage;
