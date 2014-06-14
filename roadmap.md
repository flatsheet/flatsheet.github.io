---
layout: page
---

# Flatsheet v1.0 Roadmap
A plan for Flatsheet v1.0, including roadmaps for the technical and outreach sides of the project. This document is still a work in progress. Feedback in the [GitHub issues queue for this site](https://github.com/flatsheet/flatsheet.github.io/issues) or sent to hi@flatsheet.io is welcome. 

## Technical

### Concurrent editing
- Show fields that collaborators are currently editing
- Track which users edited which fields / track versions
- This feature will require some significant refactoring / replacement of components of the initial prototype.

### Collaborators
- Add collaborators to a sheet
  - Find by username
  - Invite via email with token param on signup url
  - Option to make sheet publicly editable

### Filter/sort results
- Add filter, sort, reverse parameters to API endpoint for sheet to determine which rows are returned.

### Web forms
- Allow each sheet to have a web form that can be embedded on other sites for the purpose of collecting data.

### Show view
- Create simple show view of sheet with links to downloads, API endpoint, and editor.

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
