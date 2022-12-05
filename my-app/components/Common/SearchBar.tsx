import React from 'react';

interface SearchBarProps {
	value: string;
	onChangeInput: (e: React.FormEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ value, onChangeInput }: SearchBarProps) {
	return (
		<input
			type='search'
			value={value}
			onChange={onChangeInput}
			className='input-search'
			placeholder='Search...'
		/>
	);
}
