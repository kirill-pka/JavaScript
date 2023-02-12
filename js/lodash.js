// LODASH

// isEmpty ------------------------------------------------

console.log(_.isEmpty({}));
console.log(_.isEmpty({ a: 1 }));

// get ------------------------------------------------

const user = {
    name: 'mango',
    location: {
        coords: [1, 2],
        city: 'Lviv',
    },
};

console.log(_.get(user, 'location.city'));

// union ------------------------------------------------

console.log(_.union([1, 2, 3], [3, 4, 5]));

// range ------------------------------------------------

console.log(_.range(1, 6));

// sortBy ------------------------------------------------

const users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];



console.log(_.sortBy(users, ['user', 'age']));

// sum и sumBy ------------------------------------------------

console.log(_.sum([1, 2, 3, 4, 5, 6]));


const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, timePlayed: 80, online: true },
];

console.log(_.sumBy(players, player => player.timePlayed));

// uniq и uniqBy ------------------------------------------------

// random ------------------------------------------------

// min и max (minBy и maxBy) ------------------------------------------------

console.log(_.minBy(players, player => player.timePlayed));

// camelCase, capitalize, kebabCase, lowerCase, upperCase ------------------------------------------------