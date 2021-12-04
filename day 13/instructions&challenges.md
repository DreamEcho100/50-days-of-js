# INSTRUCTIONS&CHALLENGES

## Convert given seconds to space age on all planets of our solar system

Given an age in seconds, calculate how old someone would be on:

- Mercury: orbital period `0.2408467` Earth years
- Venus: orbital period `0.61519726` Earth years
- Earth: orbital period `1.0` Earth years, 365.25 Earth days, or 31557600 seconds
- Mars: orbital period `1.8808158` Earth years
- Jupiter: orbital period `11.862615` Earth years
- Saturn: orbital period `29.447498` Earth years
- Uranus: orbital period `84.016846` Earth years
- Neptune: orbital period `164.79132` Earth years
- Pluto is **not** a planet

So if your function was called with `436575687` as the argument i.e spaceAge(`436575687`) it should return:

```js
{
  "Mercury": 57.44,
  "Venus": 22.49,
  "Earth": 13.83,
  "Mars": 7.36,
  "Jupiter": 1.17,
  "Saturn": 0.47,
  "Uranus": 0.16,
  "Neptune": 0.08
}
```

IMPORTANT!!

Your spaceAge function should return the (already given) yearsInAllPlanets object after setting age on each planet (each property of the object)

THE VALUE OF EACH PROPERTY SHOULD BE A NUMBER AND SHOULD HAVE MAXIMUM 2 DIGITS AFTER THE POINT example 4.34

## CHALLENGES (2/2 DONE)

- [x] function spaceAge(436575687) should return:

```js
{
  "Mercury": 57.44,
  "Venus": 22.49,
  "Earth": 13.83,
  "Mars": 7.36,
  "Jupiter": 1.17,
  "Saturn": 0.47,
  "Uranus": 0.16,
  "Neptune": 0.08
}
```

- [x] spaceAge(65965561) should return:

```js
{
  'Mercury': 8.68,
  'Venus': 3.4,
  'Earth': 2.09,
  'Mars': 1.11,
  'Jupiter': 0.18,
  'Saturn': 0.07,
  'Uranus': 0.02,
  'Neptune': 0.01
}
```
