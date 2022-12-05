import React from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import mainLogo from '../../public/images/logo_auxo.png';
import fly from '../../public/images/fly.png';
import logout from '../../public/images/logout.png';

export default function Sidebar() {
	return (
		<aside className='container-sidebar'>
			<div className='logo'>
				<Image
					src={mainLogo}
					alt='Logo'
					height='100'
					width='80'
					layout='responsive'
					priority
					objectFit='cover'
					objectPosition='top'
				/>
				<Button className='btn-sidebar'>
					<Image
						src={fly}
						alt='PlanesBtn'
						height='15'
						width='15'
						priority
						className='img-next'
					/>
					Itineraries
				</Button>
			</div>
			<div className='footer-sidebar'>
				<Button className='btn-logout'>
					<Image
						src={logout}
						alt='Logout'
						height='20'
						width='20'
						priority
						className='img-next'
					/>
					Log out
				</Button>
			</div>
		</aside>
	);
}
