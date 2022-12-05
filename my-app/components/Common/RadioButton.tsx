import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup() {
	return (
		<FormControl>
			<RadioGroup
				row
				aria-labelledby='demo-row-radio-buttons-group-label'
				name='row-radio-buttons-group'
			>
				<FormControlLabel
					value=''
					control={
						<Radio
							sx={{
								color: '#4F4F4F',
								'&.Mui-checked': {
									color: '#4F4F4F',
								},
								'& .MuiSvgIcon-root': {
									fontSize: 48,
								},
							}}
						/>
					}
					label=''
				/>
			</RadioGroup>
		</FormControl>
	);
}
