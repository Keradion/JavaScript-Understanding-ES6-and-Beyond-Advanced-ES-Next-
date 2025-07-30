const me = { firstname: 'Tony', lastname: 'Alicea' };
me.firstname = 'Anthony'; // only binding is immutable, not value
console.log(me);

// binding is immutalbe 
// that means we can not reassign a new value using assignement operator == on a const variable

// since value is mutable
// we can update the key of an object referenced with a const variable

