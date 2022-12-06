import React from 'react';
import { Link } from 'react-router-dom';

const RecentViewItem = (props) => {
	const { id, title, content, price } = props.item;

	const formetPrice = (price) => {
		let result = new Intl.NumberFormat('ko-KR', {
			style: 'currency',
			currency: 'KRW',
		}).format(price);

		return result;
	};
	return (
		<Link
			to={`/detail/${id}`}
			style={{ width: '20%', color: '#fff', textDecoration: 'none' }}>
			<img
				src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`}
				width="10%"
				alt="신발1"
			/>
			<h5 style={{ fontSize: '16px' }}>{title}</h5>
			<p>{formetPrice(price)}</p>
		</Link>
	);
};

export default RecentViewItem;
