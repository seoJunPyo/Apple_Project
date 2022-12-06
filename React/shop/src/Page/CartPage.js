import React from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { increaseAge, changeName } from '../store/userSlice';

const CartPage = () => {
	const info = useSelector((state) => {
		return state;
	});
	let dispath = useDispatch();

	const { cart, user } = info;

	return (
		<>
			<div>
				{user.name} ({user.age}세)의 장바구니
			</div>
			<button
				onClick={() => {
					dispath(increaseAge(20));
				}}>
				버튼
			</button>
			<Table>
				<thead>
					<tr>
						<th>ID</th>
						<th>상품명</th>
						<th>수량</th>
						<th>변경하기</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{cart.map((item) => (
						<CartItem key={item.id} item={item} />
					))}
				</tbody>
			</Table>
		</>
	);
};

export default CartPage;
