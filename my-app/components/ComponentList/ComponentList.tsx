import React, { useState } from 'react';
import Itineraries from '../Itineraries/Itineraries';
import { IItinerarie } from '../../interfaces/IItinerarie';
import SearchBar from '../Common/SearchBar';
import Selector from '../Common/Selector';
import { data } from '../../data/data';
import {
	FILTER_PRICE,
	FILTER_RATE,
	FILTER_POPULAR,
} from '../../constants/constants';
import DefaultLayout from '../DefaultLayout/DefaultLayout';

export default function ComponentList() {
	const { itineraries } = data;
	const [search, setSearch] = useState<string>('');
	const [order, setOrder] = useState<string>('');
	const [filteredData, setFilteredData] = useState<IItinerarie[]>(itineraries);

	// Handle search filter by keyword
	const filter = (e: React.FormEvent<HTMLInputElement>) => {
		const keyword: string = e.currentTarget.value;
		if (keyword !== '') {
			// Use the toLowerCase() method to make it case-insensitive
			const results = filteredData.filter(itinerarie => {
				return (
					itinerarie.id.toLowerCase().startsWith(keyword.toLowerCase()) ||
					itinerarie.agent.toLowerCase().startsWith(keyword.toLowerCase())
				);
			});
			setFilteredData(results);
		} else {
			// If the keyword is empty, show all itineraries
			setFilteredData(itineraries);
		}
		setSearch(keyword);
	};

	// Handle function to handle filters on search list
	const handlerSelection = (e: string) => {
		const option: string = e;
		setOrder(option);

		// Filter data by option given
		const sortedData = filteredData.sort((a, b) => {
			if (option === FILTER_PRICE)
				return parseInt(a.price.substring(1)) - parseInt(b.price.substring(1));
			else if (option === FILTER_POPULAR)
				return b.agent_rating - a.agent_rating;
			else if (option === FILTER_RATE) return a.agent_rating - b.agent_rating;
		});
		setFilteredData([...sortedData]);
	};

	return (
		<DefaultLayout title='Welcome'>
			<div className='search-component'>
				<SearchBar value={search} onChangeInput={filter} />
				<Selector option={order} onChangeOption={handlerSelection}></Selector>
			</div>
			<span className='title-search'>
				Select the itinerary from the list below
			</span>
			<Itineraries itinerariesData={filteredData} />
		</DefaultLayout>
	);
}
