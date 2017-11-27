import ResizeService from 'ember-window-resize/services/resize';

export function initialize(application) {
  application.register('service:resize', ResizeService);
}

export default {
  initialize
};
