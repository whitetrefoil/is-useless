Is Useless? (@whitetrefoil/is-useless)
========================================

!!!IMPORTANT!!!
---------------

If your code isn't targeting the latest syntax spec of JS / ES,
please use something like babel to transfer this library.

Description
-----------

Something similar to Lodash's `_.isEmpty`, help to prevent `xxx is undefined` error.
Some functions are the same as Lodash ones, exist to reduce the project size.

Generally theses kinds of value are deemed to be "useless":

- Any value of different type, e.g. a number will be deemed to be a useless string.
- Empty string.
- `NaN`.
- `Infinity` / `-Infinity`.
- Any invalid value, e.g. `0.1` will be deemed to be a useless integer.
- String constructed by `new String()`, number constructed by `new Number()`.

Usage
-----

See test specs in `/tests/*.spec.ts` for usage.

Changelog & Roadmap
-------------------

### v0.1.0

* Initial release.

License
-------

Unlicense (http://unlicense.org/)
