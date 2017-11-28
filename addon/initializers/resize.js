import ResizeService from 'ember-window-resize/services/resize';

export function initialize(application) {
  application.register('service:resize', ResizeService);
  application.inject('service', 'resizeService', 'service:resize');
  application.inject('route', 'resizeService', 'service:resize');
  application.inject('template', 'resizeService', 'service:resize');
  application.inject('component', 'resizeService', 'service:resize');
}

export default {
  initialize
};
