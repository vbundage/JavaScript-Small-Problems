let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // This will log '{ prefix: 'Pacific'}'



let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // This will log '{ Indian: 'Pacific'}'
