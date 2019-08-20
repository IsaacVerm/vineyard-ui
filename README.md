# vineyard UI

[Vue](https://vuejs.org/) was chosen as front-end framework since it's pretty minimal (same philosophy as Flask for the back-end).

## Installation

No need to [install Vue](https://vuejs.org/v2/guide/installation.html) explicitly. To get up and running you just have to put a script tag in the `<head>` referring to the CDN.

Small side note, you also need a script tag in the body with a link to your Vue Javascript code.

## Run

Just open the `index.html` file in your browser.

## What to know about Vue

Most what you need can be found in the Essentials part of the [guide](https://vuejs.org/v2/guide) and not even everything in Essentials is really that necessary. Stick to:

* reactivity
  * interpolation
  * directives
* state
  * methods
  * data
  * computed properties
* lifecycle of instance
* event handlers
* conditionals and loops

Not mentioned in the essentials but needed to consume the back-end service is [this tutorial](https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html).

Gotchas:

* why you sometimes see [return in data](https://flaviocopes.com/vue-data-function/)

## Deployment

Two choices:

* deploy as app
* deploy as static html

[Deploying as an app](https://medium.com/netscape/deploying-a-vue-js-2-x-app-to-heroku-in-5-steps-tutorial-a69845ace489) involves setting up an Express server, ... which frankly doesn't seem needed for just 2 files at the moment.

Following [this tutorial](https://medium.com/@winnieliang/how-to-run-a-simple-html-css-javascript-application-on-heroku-4e664c541b0b) we can deploy html directly. The only thing we need to do is "trick" Heroku into thinking we deploy a php app (because it does not support hosting static websites directly).