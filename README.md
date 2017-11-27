# Ember-window-resize

[![Greenkeeper badge](https://badges.greenkeeper.io/mayko780/ember-window-resize.svg)](https://greenkeeper.io/)

Ember service to detect window resize events in your application

## Installation

In your application's directory

* `ember install ember-window-resize`


## Example usage

```javascript
import Ember from 'ember';
export default Ember.Component.extend({
  resize: inject.service(),
  didInsertElement() {

    this.get('resize').on('didResize', () => {
      // Do some resizing magic
    });

  }
});
```