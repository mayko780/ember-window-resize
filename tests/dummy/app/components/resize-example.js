import Component from '@ember/component';
import { inject as service } from '@ember/service';
import layout from '../templates/components/resize-example';
import Ember from 'ember';

const { Logger } = Ember;

export default Component.extend({
  layout,
  windowResize: service(),
  didInsertElement() {
    this._super(...arguments);
    this.get('windowResize').on('didResize', (event) => {
      Logger.info('resize', event);
    });
  }
});
