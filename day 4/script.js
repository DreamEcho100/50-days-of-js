const time = '12:10AM';
const time2 = '10:02PM';
const time3 = '12:33PM';

const add0ToStart = (str, min = 1) => {
	return str.length === min ? `0${str}` : str;
};

const convertTo24HrsFormat = (time) => {
	const endsWith = time.slice(time.length - 2).toLowerCase();
	let hours, minutes;

	time
		.slice(0, time.length - 2)
		.split(':')
		.forEach((item, index) => {
			if (index === 0) {
				const itemNum = parseInt(item);

				if (endsWith === 'am') {
					// hours = itemNum + 12 === 24 ? '00' : add0ToStart(item);
					hours = itemNum === 12 ? '00' : add0ToStart(item);
				} else {
					hours =
						itemNum === 12 ? '12' : add0ToStart((itemNum + 12).toString());
				}
				return;
			}

			minutes = add0ToStart(item);
		});

	return `${hours}:${minutes}`;
};

console.log(time, convertTo24HrsFormat(time));
console.log(time2, convertTo24HrsFormat(time2));
console.log(time3, convertTo24HrsFormat(time3));
