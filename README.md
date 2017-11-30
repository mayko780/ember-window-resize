<h1 align="center">Ember-window-resize</h1>

Ember service to detect window resize events in your application

## Installation

In your application's directory

* `ember install ember-window-resize`


## Example usage

```javascript
import Ember from 'ember';
export default Ember.Component.extend({
  windowResize: inject.service(),
  didInsertElement() {

    this.get('windowResize').on('didResize', () => {
      // Do some resizing magic
    });

  }
});
```