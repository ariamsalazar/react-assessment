import React, { useEffect, useState } from 'react';
import {
	FILTER_PRICE,
	FILTER_RATE,
	FILTER_POPULAR,
} from '../../constants/constants';
import Image from 'next/image';
import filter_popular from '../../public/images/filter_popular.png';

interface SelectorFilterProps {
	option: string;
	onChangeOption: (e: string) => void;
}

export default function Selector({ onChangeOption }: SelectorFilterProps) {
	const [openSelector, setOpenSelector] = useState<boolean>(false);
	const [optionSelected, setOptionSelected] = useState<string>('');

	useEffect(() => {
		setOptionSelected(optionSelected);
	}, [optionSelected]);

	return (
		<div>
			<div
				className='selector-filter-search'
				onClick={() => setOpenSelector(!openSelector)}
			>
				{openSelector ? (
					<>
						<div className='select-dropdown'>
							<div
								className='select-option f_popular'
								onClick={() => onChangeOption(FILTER_POPULAR)}
							>
								Most popular
							</div>
							<div
								className='select-option f_price'
								onClick={() => onChangeOption(FILTER_PRICE)}
							>
								Price, low to High
							</div>
							<div
								className='select-option f_rate'
								onClick={() => onChangeOption(FILTER_RATE)}
							>
								Rate, Hight to Low
							</div>
						</div>
					</>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}
