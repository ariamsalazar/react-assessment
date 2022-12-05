import React from 'react';
import User from '../User/User';

interface BreadcrumbsProps {
	title: string;
}
export default function Breadcrumbs({ title }: BreadcrumbsProps) {
	return (
		<div className='general-scrumbs'>
			<span className='title-scrumbs'>{title}</span>
			<User />
		</div>
	);
}
