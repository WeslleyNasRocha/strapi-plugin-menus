import pluginId from './utils/plugin-id';

export const ACTION_RESOLVE_CONFIG = `${pluginId}/resolve-config`;

export const DRAG_ITEM_TYPES = {
  RELATION: 'relation',
};

export const STRAPI_HEADER_HEIGHT = 96;

export const UID_MENU = 'plugin::menus.menu';
export const UID_MENU_ITEM = 'plugin::menus.menu-item';

// eslint-disable-next-line prefer-regex-literals
export const URL_ABSOLUTE_REGEX = new RegExp(
  '^(https?:\\/\\/)?'+
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
    '((\\d{1,3}\\.){3}\\d{1,3}))'+
    '(\\:\\d+)?(\\/[-a-z\\d%_:.~+@]*)*'+
    '(\\?[-a-z\\d%_:.~+@;&=]*)?'+
    '(\\#[-a-z\\d_]*)?$',
  'i'
);

// eslint-disable-next-line prefer-regex-literals
export const URL_RELATIVE_REGEX = new RegExp(
  '^(\\/[-a-z\\d%_:.~+@]*)*'+
    '(\\?[-a-z\\d%_:.~+@;&=]*)?'+
    '(\\#[-a-z\\d_]*)?$',
  'i'
);

// eslint-disable-next-line prefer-regex-literals
export const URL_MAILTO_REGEX = new RegExp('^mailto:(.*)@(.*)\\.(.*)$', 'i');

// eslint-disable-next-line prefer-regex-literals
export const URL_TEL_REGEX = new RegExp('^tel:(\\+|\\d)[\\d\\-]+$', 'i');
