import React from 'react';
import SectionWrapper from './SectionWrapper';

function Header(props) {
	const { index, title, description } = props;
	return (
		<div>
			<div>
				<p>{index}</p>
				<h4>{title}</h4>
			</div>
			<p>{description}</p>
		</div>
	);
}

export default function Generator() {
	return (
		<SectionWrapper
			header={'generate your workout'}
			title={['Its', 'Huge', "o'clock"]}>
			<Header
				index={'01'}
				title={'Pick your poison'}
				description={'Select the workout you wish to endure.'}
			/>
		</SectionWrapper>
	);
}
