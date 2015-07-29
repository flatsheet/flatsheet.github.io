---
title: Flatsheet plan – August 2015
layout: post
published: false
author: Seth Vincent
---

## Our original goals
- Conduct user testing
- Improve editor based on user testing
- Improve JSON API
- Write documentation

## What we accomplished
- Multiple user testing sessions
- Substantial improvements to the flatsheet editor
- Roughly a dozen new JavaScript/Node.js modules and contributions to many more
- A much better sense of what our potential users need

## What we learned
- Without stronger visual cues to suggest otherwise, people will assume flatsheet is meant for spreadsheets and acts like spreadsheet software
- How users collaborate with other users on their datasets
  - People need GitHub style forking and merging more than they need realtime editing
  - It's very important that the accounts/permissions system is flexible and easy to use

## The code we've produced:
- [improved editor](http://github.com/sethvincent/editor-prototype) based on user testing
- [datwrapper](http://github.com/flatsheet/datwrapper), a wrapper around dat for managing multiple dat instances via JS and JSON API
- [data-schema](http://github.com/sethvincent/data-schema), a module for setting, validating column types
- [data-cards](http://github.com/sethvincent/data-cards) – an approach to interacting with tabular data that isn't a table/spreadsheet
- [data-grid](http://github.com/sethvincent/data-grid) – a grid editor/viewer for tabular data
- [data-editor](http://github.com/sethvincent/data-editor), a command-line tool for editing a csv file
- [data-ui](http://github.com/sethvincent/data-ui), a collection of modules and resources for creating UIs for managing data
- [township](http://github.com/civicmakerlab/township), an accounts system that is its own open-source project and internally uses:
  - [accounts-api](http://github.com/lukeswart/accounts-api), a system for managing accounts via JS and JSON API
  - [accountdown-model](http://github.com/sethvincent/accountdown-model), a wrapper around [accountdown](http://github.com/substack/accountdown) that adds additional functionality
  - a flexible permissions system inspired by GitHub's

## What we're working on now:
- Bundling the above independent projects into the flatsheet application
- Launching flatsheet.io as a hosted service
- Writing detailed documentation
- Building additional example projects

## What we plan to work on next:
- GitHub-style fork & pull requests, with small differences that better fit the use case of "data as editorial content" and that are based upon dat's slightly different functionality
- Building additional compatible modules that extend flatsheet's functionality and adapt it for different use cases
- Porting [heyduwamish.org](http://heyduwamish.org) to flatsheet
  - Community monitoring system for a section of Seattle's only river.
    - The Duwamish River is a superfund site and clean up is happening over the next 15+ years. Residents in the area need a way to collaboratively monitor that cleanup.
  - Big challenge for this project is having a workflow, a review step for managing submissions. This is where realtime editing fails. The project would benefit greatly from being able to do pull requests.

## Our ongoing goals:
- Build a user interface for the fork/merge/push/pull/checkout/etc. functionality of dat
- Build an open-source community around dat & flatsheet 
  - Through documentation, example projects, & related js libraries
- Continue exploring flatsheet's potential use as an open data portal
- Continue building [township](http://github.com/civicmakerlab/township), the accounts system we've been working on based on our experience with flatsheet.
