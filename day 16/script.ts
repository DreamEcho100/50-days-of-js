const isAllUpperCased = (text: string): boolean => text === text.toUpperCase();

const hey = (message: string): string => {
	if (!message || message.length === 0) return 'Fine. Be that way!';

	if (message.indexOf('?') !== -1) {
		if (isAllUpperCased(message)) return "Calm down, I know what I'm doing!";

		return 'Sure.';
	}

	if (isAllUpperCased(message)) return 'Whoa, chill out!';

	return 'Whatever';
};
