---
layout: docs
---

# Flatsheet v1.0 Roadmap
A plan for Flatsheet v1.0, including roadmaps for the technical and outreach sides of the project, and a timeline for the next two months. This document is still a work in progress. Feedback in the [GitHub issues queue for this site](https://github.com/flatsheet/flatsheet.github.io/issues) or sent to hi@flatsheet.io is welcome. 

## Technical

### Field/user testing
- Recruit members of Code for Seattle and members of other Code for America brigades to test out Flatsheet
- Run at least two user testing sessions in Seattle
- Work with one or two news organizations to identify use cases specific to building news apps.

### Collaborators
- Add collaborators to a sheet
  - Find by username
  - Invite via email with token param on signup url

### Query/sort results
- Add query, sort, reverse parameters to API endpoint for sheet to determine which rows are returned.

### Column types
- Define the `type` of a column.
- UI for different map types:
  - leaflet-draw map for `geometry` type
  - calendar picker for `date` type
  - time picker for `time` type
  - others based on needs identified in user testing

### Import, export, and sync
- Import from and sync with a Google Spreadsheet.
- GeoJSON API endpoint (depends on having `geometry` column type)
- CSV file download
- dat integration

### Client libraries
- Ruby
- [JavaScript](http://github.com/flatsheet/flatsheet-javascript-client) (exists, and is already pretty solid)

### Web forms
- Allow each sheet to have a web form that can be embedded on other sites for the purpose of collecting data.

### Package Flatsheet for easy deployment
- Research deployment options that Flatsheet will build for and support, decide on one or two (likely AMI and Heroku)
- Ensure it's easy for organizations to spin up an internal instance of Flatsheet

## Outreach

### Documentation
Create clear documentation to make for effective onboarding of new users:
- API
- Client libraries
- Editor usage

### Usage tutorials / example apps
Create a set of beginner/intermediate tutorials with accompanying sample applications, including:
- Getting started guide
- API client usage examples
- Using Flatsheet with Leaflet/MapBox
- Using Flatsheet with Sheetsee.js
- Importing Flatsheet data into LocalWiki

Promote the tutorials/apps to increase awareness of Flatsheet.

### Blog & social media
- Create blog to showcase projects built with Flatsheet as well as tutorials for using/developing with Flatsheet
- Create twitter, google+ accounts for sharing projects built with Flatsheet and other related news


## Timeline

### June 
- First round of user testing
- Add collaborators
- Add query, sort, reverse params to sheet endpoint
- Create first version of AMI for deployment
- First version of Ruby API client
- Set up Flatsheet blog, social media accounts
- Start working with organizations on field testing
- Implement web forms for sheets
- Make API documentation comprehensive,  include POST, PUT, DELETE requests
- Fully document API clients

### July
- Bug fixes
- Add column types and UI for different types
- Keep AMI updated with each new version of Flatsheet
- Work on import, export, sync with dat, Google Spreadsheets, GeoJSON, CSV
- Create tutorials, example applications
- Make sure documentation is up to date
- Second user testing session in Seattle
- End of July, do big promotional push for v1.0 to raise awareness of the project
