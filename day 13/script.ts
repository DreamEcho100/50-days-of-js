type PlanetsPeriod = {
	Mercury: number,
	Venus: number,
	Earth: number,
	Mars: number,
	Jupiter: number,
	Saturn: number,
	Uranus: number,
	Neptune: number,
};
	
const spaceAge = (seconds): PlanetsPeriod => {
	const planetsOrbitalPeriod: PlanetsPeriod = {
		Mercury: 0.2408467,
		Venus: 0.61519726,
		Earth: 1.0,
		Mars: 1.8808158,
		Jupiter: 11.862615,
		Saturn: 29.447498,
		Uranus: 84.016846,
		Neptune: 164.79132,
	};

	const secondsInPlanetsSpaceAge = {};

	let planet;
	for (planet in planetsOrbitalPeriod) {
		secondsInPlanetsSpaceAge[planet] = parseFloat(
			(seconds / planetsOrbitalPeriod[planet] / 31557600).toFixed(2)
		);
	}

	return secondsInPlanetsSpaceAge;
};

console.log(spaceAge(436575687));
console.log(spaceAge(Math.round(Math.random() * 99999999)));
