# @symbolic/lodash

extended version of lodash, with the following functionality (see tests for more examples)

```
npm i --save @symbolic/lodash
```

```
import _ from '@symbolic/lodash'
```

## contributing

1. create a new folder for the new function
1. implement it following an existing pattern (including existing variable naming patterns)
1. test it to 100% coverage with clean descriptions
1. add it to index.js as an export
1. document it in README.md in alpabetized order with an explanation and example

## functions

#### `findMap`

map 1 array to another
- uses _.find with a function, string paths, or pair of string paths as predicate
- filters out non-matches

```
_.findMap(projects, users, ['projectManagerId', 'id']) -> [userForProject1, userForProject2, ...];
```

#### `objectFromKeys`

 - creates an object out of an array of keys with a function predicate to generate values

```
_.objectFromKeys(['a', 'b', 'c'], (key, index) => index + 2) -> {a: 2, b: 3, c: 4}
```
