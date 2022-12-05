import React, { useContext } from 'react';
import Sidebar from '../Common/Sidebar';
import Breadcrumbs from '../Common/Breadcrumbs';

type Props = {
	children: React.ReactChild | React.ReactChild[];
	className?: string;
	title: string;
};

const DefaultLayout: React.FC<Props> = ({
	children,
	className = 'container-general',
	title,
}: Props) => {
	return (
		<div className={className}>
			<Sidebar />
			<div className='container-inside'>
				<Breadcrumbs title={title} />
				{children}
			</div>
		</div>
	);
};

export default DefaultLayout;
