import ResizeService from 'ember-window-resize/services/resize';

export function initialize(application) {
  application.register('service:window-resize', ResizeService);
  application.inject('route', 'window-resize', 'service:window-resize');
  application.inject('controller', 'window-resize', 'service:window-resize');
  application.inject('component', 'window-resize', 'service:window-resize');
}

export default {
  initialize
};
