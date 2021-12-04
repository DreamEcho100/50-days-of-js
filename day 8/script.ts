const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

const getDaysBetweenDates = (dateText1: string, dateText2: string): number => {
	// write your solution here
	const date1InMillisecond: number = new Date(dateText1).getTime();
	const date2InMillisecond: number = new Date(dateText2).getTime();

	if (isNaN(date1InMillisecond) || isNaN(date2InMillisecond)) return -1;

	return date1InMillisecond > date2InMillisecond
		? (date1InMillisecond - date2InMillisecond) / DAY_IN_MILLISECONDS
		: (date2InMillisecond - date1InMillisecond) / DAY_IN_MILLISECONDS;
};

console.log(
	`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`
);
