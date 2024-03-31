- if your index.html file has a div with id "root" and you inject the data through react then the "root" inside index.html will be overwritten
- npm will manage the project dependecy using package.json (Configration for npm)
- Transitive dependencies -> you install parcel but parcel need other modules for it to run and those modules need others this is called transitive dependencies
- ~ in package json means it upgrades major version too
- ^ upgrades minor versions
- node_modules is collection of dependencies required/installed in project

# Parcel

**Features**

- parcel does Hot module replacement (HMR) using file wathcing algortithm which is written in c++
- faster build due to caches in parcel-cache
- Image optimization
- Minification
- Bundling
- Compress
- Code Splitting
- Diffrential Bundling (Support older browser)
- Diagnostic
- Error Handling
- Https
- Tree Shacking (remove unused code)

# Commands

```javascript
npx parcel index.html

```
