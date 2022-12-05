import { useRouter } from 'next/router';
import { data } from '../../data/data';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout';
import LegDetail from '../../components/LegDetail/LegDetail';
import { useEffect, useState } from 'react';

const Itinerarie = () => {
	const router = useRouter();
	// Get slug id (leg id) from URL;
	const { slug } = router.query;
	const { itineraries } = data;
	const [legsIds, setLegsIds] = useState<string[]>([]);

	useEffect(() => {
		// Filter leg details if leg id exist
		if (slug) {
			// Return data by Leg id
			const filteredList = itineraries.filter(i => i.id === slug)[0];
			setLegsIds(filteredList.legs);
		}
	}, [slug, itineraries]);

	// Return Leg details component
	const legsRowDetails = () => {
		var rows = [];
		rows.push(<span className='mini-title'>Detail</span>);
		for (let i = 0; i < legsIds.length; i++) {
			rows.push(<LegDetail key={legsIds[i]} legId={legsIds[i]} />);
		}
		return rows;
	};

	return (
		<DefaultLayout title={`Itinerary ${slug}`}>
			{legsRowDetails()}
		</DefaultLayout>
	);
};

export default Itinerarie;
