import React from 'react';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

const DetailTab = (props) => {
	const [tabChange, setTabChange] = useState(1);

	return (
		<>
			<Nav variant="tabs" defaultActiveKey="link-0">
				<Nav.Item>
					<Nav.Link
						onClick={() => {
							setTabChange(0);
						}}
						eventKey="link-0">
						Active
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						onClick={() => {
							setTabChange(1);
						}}
						eventKey="link-1">
						Option 2
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						onClick={() => {
							setTabChange(2);
						}}
						eventKey="link-2">
						Disabled
					</Nav.Link>
				</Nav.Item>
			</Nav>
			<TabContent tabChange={tabChange} />
		</>
	);
};

const TabContent = (props) => {
	if (props.tabChange == 0) {
		return <div>내용0</div>;
	}
	if (props.tabChange == 1) {
		return <div>내용1</div>;
	}
	if (props.tabChange == 2) {
		return <div>내용2</div>;
	}
};

export default DetailTab;
