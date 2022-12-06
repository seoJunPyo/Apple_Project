import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
	const { id, title, content, price } = props.info;
	const [toDetail, setToDetail] = useState(false);

	const formetPrice = (price) => {
		let result = new Intl.NumberFormat('ko-KR', {
			style: 'currency',
			currency: 'KRW',
		}).format(price);

		return result;
	};

	return (
		<div className="col-md-4">
			<Link
				to={`detail/${id}`}
				style={{ color: 'black', textDecoration: 'none' }}>
				<img
					src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`}
					alt=""
				/>
				<h4>{title}</h4>
				<p>{content}</p>
				<p>{formetPrice(price)}</p>
			</Link>
		</div>
	);
};

export default Card;
