# Code Splitting Sample

Basic CodeSplitting with Webpack and Dynamic Import  


## Setting up Project Notes
### Babel
Besides webpack, babel is needed for Dynamic Import support.
Add .babelrc.  In webpack.config.js, add module rules for js to use babel loader.

### Webpack config
Tell webpack to build chunks.  See the output section

### Javascript
When needed, dynamically import the chunk by name.   The dynamic import returns a 
promise.  See index.js

### Runtime behavior 
The build results in 3 bundle chunks - main, form, and vendors~form.
Index.html will load main chunk which is the page with button (but no form)
When button is clicked, the form chunks are sent to the browser.
