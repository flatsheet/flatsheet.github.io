---
layout: docs
---

# Documentation

## Roadmap

Read about [the roadmap for getting to v1.0 of Flatsheet]({{ site.baseurl}}/roadmap).

## API Documentation

There are currently two API endpoints.

**To get a list of sheets:** [https://app.flatsheet.io/api/v1/sheets?username=example](https://app.flatsheet.io/api/v1/sheets?username=example)

**To get individual sheets:** [https://app.flatsheet.io/api/v1/sheets/:id](https://app.flatsheet.io/api/v1/sheets/tcuxl49owsafl-jgp5qrta)

## Sheet list response example

When requesting: `https://app.flatsheet.io/api/v1/sheets?username=example`

We get this JSON response:

```
[
  {
    id: 1,
    slug: "tcuxl49owsafl-jgp5qrta",
    name: "Pizza",
    description: "A sheet about pizza.",
    url: "http://flatsheet.herokuapp.com/sheets/tcuxl49owsafl-jgp5qrta"
  }
]
```

## Single sheet response example

When requesting: `https://app.flatsheet.io/api/v1/sheets/tcuxl49owsafl-jgp5qrta`

We get this JSON response:

```
{
  id: 1,
    slug: "tcuxl49owsafl-jgp5qrta",
    name: "Pizza",
    description: "A sheet about pizza.",
  rows: [
    {
      toppings: "pepperoni, olive, sausage",
      cheese: "cheddar",
      crust: "deep dish"
    },
    {
      toppings: "salmon, artichoke, basil",
      cheese: "mozzarella",
      crust: "thin"
    }
  ],
  created_at: "2014-04-24T03:22:03.255Z",
  updated_at: "2014-04-24T03:25:14.359Z"
}
```

## Example usage of the Flatsheet API Javascript client:

Install:

```
npm install --save flatsheet
```

Usage:

```
var Flatsheet = require('flatsheet');

var flatsheet = new Flatsheet();

/* list of user's sheets */
flatsheet.list('example', function(error, response){
  console.log(error, response)
});

/* specific sheet */
flatsheet.sheet('tcuxl49owsafl-jgp5qrta', function (error, response){
  var rows = response.rows;
});
```

[GitHub repo for flatsheet-javascript-client.](https://github.com/flatsheet/flatsheet-javascript-client)

## Simple example of sheet API usage using [browser-request](http://npmjs.org/browser-request):

```
var request = require('browser-request');

var uri = 'https://app.flatsheet.io/api/v1/sheets/tcuxl49owsafl-jgp5qrta';

request({ uri:uri, json:true }, getRows);

function getRows (error, response, body) {
  if(error) throw error;
  var rows = body.rows;
  console.log(rows);
}
```

## Another example using jQuery:

```
var uri = 'https://app.flatsheet.io/api/v1/sheets/tcuxl49owsafl-jgp5qrta';

$.ajax(uri).done(function( data ) {
  var rows = data.rows;
  console.log(rows);
});
```