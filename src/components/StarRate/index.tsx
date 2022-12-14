import React from 'react';
import { useMemo, useState } from 'react';
import StarRateContext from './StarRateContext';
import EnterStarRateContainer from './EnterStarRateContainer';
import LeaveStarRateContainer from './LeaveStarRateContainer';

export default function StarRating() {
	const [rating, setRating] = useState(0);
	const [isMouseEnter, setIsMouseEnter] = useState(false);

	const value = useMemo(
		() => ({
			handleMouseEnter: () => setIsMouseEnter(true),
			handleMouseLeave: () => setIsMouseEnter(false),
			handleClick: (num: number) => {
				setRating(num);
			},
		}),
		[],
	);

	return (
		<StarRateContext.Provider value={value}>
			{isMouseEnter ? <EnterStarRateContainer rating={rating} /> : <LeaveStarRateContainer rating={rating} />}
		</StarRateContext.Provider>
	);
}
