import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter(ssrContext, createDefaultRouter, routerOptions) {
  const options = routerOptions ? routerOptions : createDefaultRouter(ssrContext).options
  const routes = options.routes

  return new Router({
    ...options,
    routes: routes.map(remap)
  })
}

/**
 * Special regex path remapping
 *
 * Example: You have a file called @:username you want to to match request with regex: /@:username([a-z0-9]{3,32})
 * Mapping: {'@:username':'/@:username([a-z0-9]{3,32})'}
 * :username will be a path parameter
 *
 * Another example:
 * Mapping: {'article:slug:id':'/:slug([0-9a-z-]{0,1000}):id([0-9a-hjkmnp-tv-z]{12}1)'}
 * :slug & :id will both be a path parameter
 *
 * Another example:
 * Mapping: {'index': '/remapped-path'}
 */
const paths = {
}

function remap(route) {
  const path = paths[route.name]
  if (path) {
    return {...route, path}
  }
  return route
}
