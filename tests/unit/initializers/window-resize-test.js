import Application from '@ember/application';
import { run } from '@ember/runloop';

import { initialize } from 'dummy/initializers/window-resize';
import { module, test } from 'qunit';

module('Unit | Initializer | resize', {
  beforeEach() {
    run(() => {
      this.application = Application.create();
      this.application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(this.application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
