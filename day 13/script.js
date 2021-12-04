var spaceAge = function (seconds) {
    var planetsOrbitalPeriod = {
        Mercury: 0.2408467,
        Venus: 0.61519726,
        Earth: 1.0,
        Mars: 1.8808158,
        Jupiter: 11.862615,
        Saturn: 29.447498,
        Uranus: 84.016846,
        Neptune: 164.79132
    };
    var secondsInPlanetsSpaceAge = {};
    var planet;
    for (planet in planetsOrbitalPeriod) {
        secondsInPlanetsSpaceAge[planet] = parseFloat((seconds / planetsOrbitalPeriod[planet] / 31557600).toFixed(2));
    }
    return secondsInPlanetsSpaceAge;
};
console.log(spaceAge(436575687));
console.log(spaceAge(Math.round(Math.random() * 99999999)));
