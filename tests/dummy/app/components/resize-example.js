import Component from '@ember/component';
import { inject as service } from '@ember/service';
import layout from '../templates/components/resize-example';

export default Component.extend({
  layout,
  windowResize: service(),
  didInsertElement() {
    this._super(...arguments);
    this.windowResize.on('didResize', (event) => {
      // eslint-disable-next-line no-console
      console.info('resize', event);
    });
  }
});
