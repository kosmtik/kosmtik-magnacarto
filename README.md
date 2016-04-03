# kosmtik-magnacarto

Support for the Go implementation of CartoCSS ([Magnacarto](https://github.com/omniscale/magnacarto))
for [Kosmtik](https://github.com/kosmtik/kosmtik). This implementation is available as a
[native extension](https://github.com/gmgeo/node-magnacarto) for Node.js. Currently the native extension is available
for Linux and MacOS X systems only and is still considered experimental.

Magnacarto is much faster than Carto, but may not support the full range of features. However, the feature set is very
close to the JavaScript reference implementation.

## Benchmark

Due to the internal use of Go vs. JavaScript Magnacarto is much faster in parsing complex stylesheets.
For [openstreetmap-carto](https://github.com/gravitystorm/openstreetmap-carto) the difference is as large
as **1.24s** for Magnacarto vs. **10.08s** for Carto on a machine with Intel Core i5-4300U, Linux x64
and 12 GB RAM (January 2016).

## Install

While in your Kosmtik root, run:

`node index.js plugins --install kosmtik-magnacarto`

## Usage

Specify the alternate renderer with the `--renderer` command line option. E.g.:

`node index.js serve --renderer magnacarto ...`
