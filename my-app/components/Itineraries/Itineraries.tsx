import React from 'react';
import { IItinerarie } from '../../interfaces/IItinerarie';
import ItinerariesRow from './ItinerariesRow';

interface ItinerariesProps {
	itinerariesData: IItinerarie[];
}

export default function Itineraries(props: ItinerariesProps) {
	const { itinerariesData } = props;
	const tableHeaders = ['Id Itinerarie', 'Price', 'Agent', 'Agent Rating'];

	// Create Table header rows
	const tableHeadersRows = () => {
		let headers = [];
		for (let index = 0; index < tableHeaders.length; index++) {
			headers.push(
				<td className='table-header' key={index}>
					{tableHeaders[index]}
				</td>
			);
		}
		return headers;
	};

	return (
		<table className='table'>
			<tbody>
				<tr>{tableHeadersRows()}</tr>
				{itinerariesData.length > 0 &&
					itinerariesData.map((row: IItinerarie) => (
						<ItinerariesRow key={`iti_${row.id}`} row={{ ...row }} />
					))}
			</tbody>
		</table>
	);
}
