import React from 'react';
import { Outlet } from 'react-router-dom';

const AboutPage = () => {
	return (
		<div>
			<h4>회사정보</h4>
			<Outlet />
		</div>
	);
};

export default AboutPage;
