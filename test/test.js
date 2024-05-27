const city = 'london';

const query = {};

query.city = new RegExp(city, 'i');

console.log(query.city);
