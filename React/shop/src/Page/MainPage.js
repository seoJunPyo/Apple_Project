import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import axios from 'axios';
import RecentViewItem from '../components/RecentViewItem';

const MoreBtn = styled.button`
	border: none;
	background-color: #a0a0a0;
	color: #fff;
	padding: 8px 16px;
	border-radius: 8px;
	font-weight: 700;
`;

const RecentItemCon = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 10px;
	color: #fff;
`;

const MainPage = (props) => {
	const [recentViewList, setRecentViewList] = useState([]);

	useEffect(() => {
		const recentViewList = JSON.parse(localStorage.getItem('watched'));
		setRecentViewList(recentViewList);
	}, []);

	return (
		<div>
			<div className="main-bg">
				<RecentItemCon>
					{recentViewList.map((item) => (
						<RecentViewItem item={item} key={item.id} />
					))}
				</RecentItemCon>
			</div>
			<div className="Container">
				<div className="row">
					{props.shoes.map((info) => (
						<Card info={info} key={info.id} />
					))}
				</div>
				{props.loading && <div>Loading...</div>}
				{props.count <= 3 && <MoreBtn onClick={props.getData}>더보기</MoreBtn>}
			</div>
		</div>
	);
};

export default MainPage;
