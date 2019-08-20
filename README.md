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