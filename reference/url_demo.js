const url = require('url');
const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Get the root domain (host)
console.log(myUrl.host);

// Host Name (does not return the port)
console.log(myUrl.hostname);

// Path name
console.log(myUrl.pathname);

// Serialized Query
console.log(myUrl.search);

// Params Object
console.log(myUrl.searchParams);

// Add Paramters to the search
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through paramters
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
