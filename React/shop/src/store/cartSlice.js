import { compose, createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
	name: 'cart',
	initialState: [
		{ id: 0, name: 'White and Black', count: 2 },
		{ id: 2, name: 'Grey Yordan', count: 1 },
	],
	reducers: {
		couterPlus(state, id) {
			const target = state.find((item) => item.id === id.payload);
			target.count++;
		},
		couterMinus(state, id) {
			const target = state.find((item) => item.id === id.payload);

			if (target.count <= 0) {
				const targetIdx = state.findIndex((item) => item.id === id.payload);
				state.splice(targetIdx, 1);
			}
			target.count--;
		},
		addCart(state, info) {
			const { id, name, count } = info.payload;
			const find = state.find((item) => item.id === id);

			if (find) {
				find.count += count;
				return;
			}

			const item = { id: id, name: name, count: count };
			return [...state, item];
		},
		deleteItem(state, id) {
			const targetIdx = state.findIndex((item) => item.id === id.payload);
			state.splice(targetIdx, 1);
		},
	},
});

export const { couterPlus, couterMinus, addCart, deleteItem } = cart.actions;

export default cart;
