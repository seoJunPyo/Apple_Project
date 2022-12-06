import React from 'react';
import { Outlet } from 'react-router-dom';

const EventPage = () => {
	return (
		<div>
			<h1>오늘의 이벤트</h1>
			<Outlet />
		</div>
	);
};

export default EventPage;
