import React from 'react';
import { useDispatch } from 'react-redux';
import { couterPlus, deleteItem, couterMinus } from '../store/cartSlice';

const CartItem = (props) => {
	const { id, name, count } = props.item;
	const dispath = useDispatch();

	return (
		<tr>
			<td>{id}</td>
			<td>{name}</td>
			<td>{count}</td>
			<td>
				<button
					onClick={() => {
						dispath(couterPlus(id));
					}}>
					+
				</button>
				<button
					onClick={() => {
						dispath(couterMinus(id));
					}}>
					-
				</button>
			</td>
			<td>
				<button
					onClick={() => {
						dispath(deleteItem(id));
					}}>
					삭제
				</button>
			</td>
		</tr>
	);
};

export default CartItem;
