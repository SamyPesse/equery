# elasticsearch-query

[![npm version](https://badge.fury.io/js/elasticsearch-query.svg)](http://badge.fury.io/js/elasticsearch-query)
[![Build Status](https://travis-ci.org/SamyPesse/elasticsearch-query.png?branch=master)](https://travis-ci.org/SamyPesse/elasticsearch-query)


Query builder for elasticsearch (Node.js / Javascript)

### Installation

```
$ npm install elasticsearch-query
```

### Usage

```
var Query = require('elasticsearch-query');

// Build a query
var q = new Query();

// Output the query as JSON
var result = q.toJSON();


```
