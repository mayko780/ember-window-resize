import ResizeService from 'ember-window-resize/services/resize';

export function initialize(application) {
  application.register('service:resize', ResizeService);
  application.inject('route', 'resize', 'service:resize');
  application.inject('controller', 'resize', 'service:resize');
  application.inject('component', 'resize', 'service:resize');
}

export default {
  initialize
};
