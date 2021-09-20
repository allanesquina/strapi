'use strict';

module.exports = {
  type: 'admin',
  routes: [
    {
      method: 'GET',
      path: '/settings',
      handler: 'admin-api.getSettings',
      config: {
        policies: [
          'admin::isAuthenticatedAdmin',
          {
            name: 'admin::hasPermissions',
            options: {
              actions: ['plugin::upload.settings.read'],
            },
          },
        ],
      },
    },
    {
      method: 'PUT',
      path: '/settings',
      handler: 'admin-api.updateSettings',
      config: {
        policies: [
          'admin::isAuthenticatedAdmin',
          {
            name: 'admin::hasPermissions',
            options: {
              actions: ['plugin::upload.settings.read'],
            },
          },
        ],
      },
    },
    {
      method: 'POST',
      path: '/',
      handler: 'admin-api.upload',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
    {
      method: 'GET',
      path: '/files/count',
      handler: 'admin-api.count',
      config: {
        policies: [
          'admin::isAuthenticatedAdmin',
          {
            name: 'admin::hasPermissions',
            options: {
              actions: ['plugin::upload.read'],
            },
          },
        ],
      },
    },
    {
      method: 'GET',
      path: '/files',
      handler: 'admin-api.find',
      config: {
        policies: [
          'admin::isAuthenticatedAdmin',
          {
            name: 'admin::hasPermissions',
            options: {
              actions: ['plugin::upload.read'],
            },
          },
        ],
      },
    },
    {
      method: 'GET',
      path: '/files/:id',
      handler: 'admin-api.findOne',
      config: {
        policies: [
          'admin::isAuthenticatedAdmin',
          {
            name: 'admin::hasPermissions',
            options: {
              actions: ['plugin::upload.read'],
            },
          },
        ],
      },
    },
    {
      method: 'GET',
      path: '/search/:id',
      handler: 'admin-api.search',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
    {
      method: 'DELETE',
      path: '/files/:id',
      handler: 'admin-api.destroy',
      config: {
        policies: [
          'admin::isAuthenticatedAdmin',
          {
            name: 'admin::hasPermissions',
            options: {
              actions: ['plugin::upload.assets.update'],
            },
          },
        ],
      },
    },
  ],
};
