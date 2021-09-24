Web components
==============

Description
-----------

Just something I knocked up to learn / experiment with web components.

It's a simple reactive demo, using input <---> text elements.

Currently using lit, stencil(*) & svelte (my fave so far...).

Installation
------------

```
npm i OR yarn
```

Running
-------

```
npm run serve // hot reloading web server (localhost:1234)

npm run build

```

Builds
------

Currently, rollup is producing all main formats, but for browser consumption, ejs or umd is simplest.

Deployment
----------
For public use, an npm publish and access via unpkg works nicely. For private, maybe git direct.

Notes
-----

Stencil appears to have an issue where its core library doesn't properly export the required classes.
Have created an issue, but hard to tell if its Stencil, or its reliance on react/jsx, which appears to be a pile of... :)

I've shown 2 svelte implementations (a & b): -

```
svelte-input-a - leverages some cool native reactivity (computed) properties via the '$:' syntax
svelte-input-b - uses a standard js object with a getter
```

Development
-----------

This demo app has been constructed so that each web component flavour is in the root of ./src

```
e.g.

./src/lit ---> lit
./src/svelte ---> svelte
```

The build script looks for these 'root' directories and uses the dir name to signify 'web component' flavour.

For each dir (above), the build script lists dir files and produces built web components.

```
i.e.

./src/svelte/input-a.svelte ---> ./dist/svelte/input-a.[format].js (formats ejs, cjs, umd).
```

These files are passed to 'rollup' and the 'named' build artifacts placed in ./dist ready for consumption.


Proper development /  deployment
--------------------------------

It's envisaged a 'single' flavour will be used (dev's choice / company standards), so those 'web components' will use
a slightly different eco system, with specific build format (likely umd) and possibly npm / unpkg publishing.

The above is 'too follow'...
