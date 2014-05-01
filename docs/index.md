---
layout: docs
---

# API Documentation

There are currently two API endpoints.

**To get a list of sheets:** `/api/v1/sheets?username=example`

**To get individual sheets:** `/api/v1/sheets/:id`

###`/api/v1/sheets?username=example` Response example

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

###`/api/v1/sheets/:id` Response example

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