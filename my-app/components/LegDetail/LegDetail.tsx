import React from 'react';
import { data } from '../../data/data';
import { ILeg } from '../../interfaces/ILeg';
import RowRadioButtonsGroup from '../../components/Common/RadioButton';

interface ItinerarieLegProps {
	legId: string;
}

export default function ItinerariesRow(props: ItinerarieLegProps) {
	const { legId } = props;
	const { legs } = data;
	const legDetails: ILeg = legs.filter(i => i.id === legId)[0];
	// Removed white spaces from images to import agent images
	const agentName = legDetails.airline_name.replace(/ /g, '');
	const agent_img = `/images/${agentName}.png`;

	return (
		<div className='leg-container'>
			<div className='leg-checkbox'>
				<RowRadioButtonsGroup />
			</div>
			<div className='leg-card'>
				<div className='leg-header'>
					<span
						className='leg-agent'
						style={{
							backgroundImage: 'url(' + agent_img + ')',
							backgroundSize: 'contain',
							backgroundPosition: 'left',
							backgroundRepeat: 'no-repeat',
						}}
					>
						{legDetails.airline_name}
					</span>
					<span className='leg-id'>{legId}</span>
				</div>
				<div className='leg-details'>
					<span className='airline-id'>Airline Id:</span>{' '}
					<span className='airline-value'>{legDetails.airline_id}</span>
					<div className='leg-item'>
						<div className='leg-c'>
							<span className='airport-leg-c'>
								{legDetails.departure_airport}
							</span>
							<span className='airport-time'>{legDetails.departure_time}</span>
							<div className='leg-footer'>
								<span className='airline-id'>Stops:</span>{' '}
								<span className='airline-value'>{legDetails.stops}</span>
							</div>
						</div>
						<div className='leg-c'>
							<span className='airport-leg-c'>
								{legDetails.arrival_airport}
							</span>
							<span className='airport-time'>{legDetails.arrival_time}</span>
							<div className='leg-footer'>
								<span className='airline-id'>Duration:</span>{' '}
								<span className='airline-value'>
									{legDetails.duration_mins}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
