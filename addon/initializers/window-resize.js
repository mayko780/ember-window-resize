import WindowResizeService from 'ember-window-resize/services/window-resize';

export function initialize(application) {
  application.register('service:windowResize', WindowResizeService);
  application.inject('route', 'windowResize', 'service:windowResize');
  application.inject('controller', 'windowResize', 'service:windowResize');
  application.inject('component', 'windowResize', 'service:windowResize');
}

export default {
  initialize
};
