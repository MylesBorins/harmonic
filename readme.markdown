# Harmonic
### Made with sound and <3

## Dev

```bash
$ npm run dev
```

* Start Watchify (browserify on changes to js)
* Watch changes to stylus
* Start Basic Express Server
  * Server is running on port 3000
* Start Basic Socket Server

## Prod

```
$ npm start

```

* build project
* uglify
* minified css
* Start Basic Express Server
  * Server is running on port 3000
* Start Basic Socket Server


## Testing

```
$ npm test
OMG TESTS PASS # not actual message
```

This project has a series of unit(ish) tests. Currently API calls are not stubbed out, which could be done with sinon + rewire. The stack uses a module called [smokestack][smokestack], which will execute any code piped to it and pipe the output to STDOUT.

The tests are all written in tape. The blog post [Testing JavaScript Modules with Tape][use-tape] does a great job of explaining why tape is awesome!

#### Notes 

[smokestack]: https://www.npmjs.com/package/smokestack "smokestack on npmjs.com"
[use-tape]: http://ponyfoo.com/articles/testing-javascript-modules-with-tape "Testing JavaScript Modules with Tape"

## License

MIT ~ check LICENSE
