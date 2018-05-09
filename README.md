# Javascript magic for [Generic Hipster Coffee](https://github.com/coreskill/generic-hipster-coffee)

## First time installation

### Install latest [node.js](https://nodejs.org/)

### Install all packages from `package.json` locally

This command also automatically installs sample Generic Hipster Coffee page.

```shell
npm install
```

### Install your own copy of Generic Hipster Coffee

This package works only with webpages that have twig templates in `src/templates/` directory.

To use your own copy of Generic Hipster Coffee, change the path in `package.json` on line 6 to your own (either github.com repo in `user/repo` form or full repo URL). If your webpage has a different name defined in `package.json`, you also need to change it on lines 6, 15, and 18. Then, run `npm install` again.

## Development

In `src` folder, you can create a `.js` file with the same name for each `.twig` file in the `src/templates/` directory of Generic Hipster Coffee. The code from the `.js` file is then automatically injected to the end of the `.twig` file, into a `<script>` tag.

To run Generic Hipster Coffee page and start automatic compilation and browser refreshing:

```shell
npm start
```

And see the result on the URL shown in console, (by default <http://localhost:8123/>).

<!--
## Build

To build everything once (in `/dist/` folder) 

```shell
gulp build
```

## CSS (Sass preprocessor)

`index.css` is compiled from `src/scss/index.scss` by [Sass](http://sass-lang.com/).


## HTML (Twig templates)

HTML is generated from [Twig.js](https://github.com/twigjs/twig.js/) templates (JavaScript impementation of Twig templating language) in `src/templates`.

Start templates that are not pages with `_`. Typically these are templates used for _include_ or _extend_.

Documentation for [Twig](https://twig.symfony.com/doc/2.x/templates.html).

_Warning: [Twig.js doesn't implement 100% of Twig](https://github.com/twigjs/twig.js/wiki/Implementation-Notes)._

There are some data about our coffees to be available in all templates, use `templates/data.json` for that.


## Static files (JavaScript, images, …)

Folders and files from `/src/static/` are just copied directly to `/dist/` folder.

### Libraries

This website is made with [Bootstrap 4 beta](https://getbootstrap.com/).

Not necessary components are commented out to reduce final 'index.css' file size. 
If you need some other components, go to  `/src/index.scss` or `/src/_custom-bootstrap-variables.scss` and uncomment it.

See `gulpfile.js` for supported browsers.


### Deployment

Upload everything in `/dist/` folder to the server.
If you want to to deploy a new version, please contact me at danko.vktr at gmail.com.

#### Surge.sh

You can use [surge.sh](https://surge.sh) free service for that.

1. Install surge client `npm install --global surge`.
2. Run `surge` manually once in `/dist`: you will create an account with surge.sh.
3. Set your own domain in `gulpfile.js` (replace `https://my-first-website.surge.sh`).
4. From now on run `gulp deploy` whenever you want to publish a new version.
-->
