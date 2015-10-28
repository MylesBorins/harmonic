#🐧🐧🐧 perceptual tux 🐧🐧🐧
###Made with sound and <3

##Dev

```bash
$ npm run dev
ecstatic serving dist/ at http://0.0.0.0:8000
```

* Start Watchify (browserify on changes to js)
* Start Uatu (copy assets from public to dist on change)
* Start Ecstatic (static file server)
  * Server is running on port 8000

##Prod

```
$ npm start
ecstatic serving dist/ at http://0.0.0.0:8000

```

* build project
* uglify and gzip js
  * only ???k!
* minified css
* starts Ecstatic (with gzip support enabled)
  * Server is running on port 8000


##Testing

```
$ npm test
OMG TESTS PASS # not actual message
```

This project has a series of unit(ish) tests. Currently API calls are not stubbed out, which could be done with sinon + rewire. The stack uses a module called [smokestack][smokestack], which will execute any code piped to it and pipe the output to STDOUT.

The tests are all written in tape. The blog post [Testing JavaScript Modules with Tape][use-tape] does a great job of explaining why tape is awesome!

##Git Hooks

This project uses the node module husky to wire some git hooks with npm scripts. In order to commit the code must lint, in order to push the code must lint. This will catch all sorts of silly errors early :D.

####Notes 

[smokestack]: https://www.npmjs.com/package/smokestack "smokestack on npmjs.com"
[use-tape]: http://ponyfoo.com/articles/testing-javascript-modules-with-tape "Testing JavaScript Modules with Tape"

##License

MIT ~ check LICENSE
