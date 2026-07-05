import showLife, { sortHeroes } from '../main.js';
import each from 'jest-each';

describe('.showLife()', () => {
    each([
        [90, 'healthy'],
        [30, 'wounded'],
        [10, 'critical'],
        [50, 'wounded'],
        [15, 'wounded'],
        [0, 'critical']
    ]).test ('returns %s in dependence to health', (health, expected) => {
       expect(showLife({ health: health })).toBe(expected);      
    });
});

test('sorted heroes', () => {
    const heroes = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ];

    const expected =  [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ];
    expect(sortHeroes(heroes)).toEqual(expected);
})