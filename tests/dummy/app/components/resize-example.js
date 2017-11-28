import Component from '@ember/component';
import { inject as service } from '@ember/service';
import layout from '../templates/components/resize-example';

export default Component.extend({
  layout,
  resize: service(),
  didInsertElement() {
    this._super(...arguments);
    this.get('resize').on('didResize', (event) => {
        console.log('resize', event);
    });
  }
});
