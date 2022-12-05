import React from 'react';
import { URL_ITI } from '../../constants/constants';
import { IItinerarie } from '../../interfaces/IItinerarie';

interface ItinerarieRowProps {
	row: IItinerarie;
}

export default function ItinerariesRow(props: ItinerarieRowProps) {
	const { row } = props;
	const IT_PATH = `${URL_ITI}/${row.id}`;
	// Remove whitespaces from string to show image on detail leg
	const agentName = row.agent.replace(/ /g, '');
	const agent_img = `/images/${agentName}.png`;

	const handleClick = () => {
		// Redirect URL to leg detail screen
		window.location.replace(IT_PATH);
	};

	return (
		<>
			<tr className='table-row' onClick={() => handleClick()}>
				<td className='table-row-item'>1 {row.id}</td>
				<td className='table-row-item'>{row.price}</td>
				<td
					className='table-row-item'
					style={{
						backgroundImage: 'url(' + agent_img + ')',
						backgroundSize: '22px',
						backgroundPosition: '33% center',
						backgroundRepeat: 'no-repeat',
					}}
				>
					{' '}
					<span className='name-agent'>{row.agent}</span>
				</td>
				<td className='table-row-item'>{row.agent_rating}</td>
			</tr>
		</>
	);
}
