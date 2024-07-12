import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { WORKOUTS, SCHEMES } from '../utils/swoldier';

function Header(props) {
	const { index, title, description } = props;
	return (
		<div className='flex flex-col gap-4'>
			<div className='flex items-center justify-center gap-2'>
				<p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400 '>
					{index}
				</p>
				<h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
			</div>
			<p className='text-sm sm:text-base mx-auto'>{description}</p>
		</div>
	);
}

export default function Generator() {
	const [showModal, setShowModal] = useState(false);
	const [poison, setPoison] = useState('individual');
	const [muscles, setMuscles] = useState([]);
	const [goals, setGoals] = useState('strength_power');

	function toggleModal() {
		setShowModal(!showModal);
	}

	return (
		<SectionWrapper
			header={'generate your workout'}
			title={['Its', 'Huge', "o'clock"]}>
			<Header
				index={'01'}
				title={'Pick your poison'}
				description={'Select the workout you wish to endure.'}
			/>
			<div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
				{Object.keys(WORKOUTS).map((type, typeIndex) => {
					return (
						<button
							onClick={() => {
								setPoison(type);
							}}
							className={
								'bg-slate-950 border  duration-200 px-4 hover:border-blue-600 py-3 rounded-lg ' +
								(type === poison
									? ' border-blue-600'
									: ' border-blue-400')
							}
							key={typeIndex}>
							<p className='capitalize'>
								{type.replaceAll('_', ' ')}
							</p>
						</button>
					);
				})}
			</div>

			<Header
				index={'02'}
				title={'Lock on targets'}
				description={'Select the muscles judged for annihilation.'}
			/>
			<div className='bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col'>
				<button
					onClick={toggleModal}
					className='relative p-3 flex items-center justify-center'>
					<p>Select muscle groups</p>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='currentColor'
						className='icon icon-tabler icons-tabler-filled icon-tabler-caret-down absolute right-3 top-1/2 -translate-y-1/2 '>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<path d='M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z' />
					</svg>
				</button>
				{showModal && <div>modal</div>}
			</div>

			<Header
				index={'03'}
				title={'Become Juggernaut'}
				description={'Select your ultimate objective.'}
			/>
			<div className='grid grid-cols-3 gap-4'>
				{Object.keys(SCHEMES).map((scheme, schemeIndex) => {
					return (
						<button
							onClick={() => {
								setGoals(scheme);
							}}
							className={
								'bg-slate-950 border  duration-200 hover:border-blue-600 py-3 rounded-lg px-4 ' +
								(scheme === goals
									? ' border-blue-600'
									: ' border-blue-400')
							}
							key={schemeIndex}>
							<p className='capitalize'>
								{scheme.replaceAll('_', ' ')}
							</p>
						</button>
					);
				})}
			</div>
		</SectionWrapper>
	);
}
