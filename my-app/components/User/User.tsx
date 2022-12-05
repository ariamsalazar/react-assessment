import React from 'react';
import Image from 'next/image';
import user from '../../public/images/user.png';

export default function User() {
	return (
		<div className='user-component'>
			<Image
				src={user}
				alt='User'
				height='38'
				width='38'
				priority
				className='img-user'
			/>
			Pepe Ladino
			<div className='option-user'></div>
		</div>
	);
}
