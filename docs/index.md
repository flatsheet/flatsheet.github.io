---
layout: docs
---

# API Documentation

There are currently two API endpoints.

**To get a list of sheets:** https://app.flatsheet.io/api/v1/sheets?username=example

**To get individual sheets:** https://app.flatsheet.io/api/v1/sheets/:id

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

When requesting: `https://app.flatsheet.io/api/v1/sheets/:id`

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