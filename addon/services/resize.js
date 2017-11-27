import Service from '@ember/service';

export default Service.extend({

  init() {
    this._super(...arguments);
    this._onResize = (event) => {
      this._resizeHandler(event);
    };
    this._initialiseResizeListener();
  },

  destroy() {
    this._super(...arguments);
    this._destroyResizeListener();
  },

  _initialiseResizeListener() {
    window.addEventListener('resize', this._onResize);
  },

  _destroyResizeListener() {
    window.removeEventListener('resize', this._onResize);
  },

  _resizeHandler(event) {
    this.trigger('didResize', event);
  }

});
