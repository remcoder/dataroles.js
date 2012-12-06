# dataroles.js
_size: 0.5k (minified)_

A little utility to attach behavior to the _data-role_ attribute more easily.

See [this blog post](http://blog.realstuffforabstractpeople.com/post/31753521367/classnames-for-styling-data-attributes-for-behavior) for some background information.

## installation
You can install it easily with [yeoman]() or [bower](http://twitter.github.com/bower/):

    yeoman install dataroles.js

or

    bower install dataroles.js

## examples


### find any element with the role 'show-alert':

  `$.findByRole('show-alert')`

is equivalent to:

  `$("[data-role~='show-alert']")`


### finding elements by role in a given subtree

  `$("body").findByRole('show-alert')`

is equivalent to

  `$("body").find("[data-role~='show-alert']")`



### wrappers for all standard traversal methods

*   `parentsByRole('role')` -> `parents("[data-role~='role']")`
*   `siblingsByRole('role')` -> `siblings("[data-role~='role']")`
*   etc..

[All standard jQuery traversal methods](http://api.jquery.com/category/traversing/) are wrapped like this.

### check the data-role of an element
`.hasRole(role)`

is quivalent to `.is("[data-role~='role']")`

### multiple roles
multiple roles per data-role attribute are supported (uses the `~=` operator internally)

