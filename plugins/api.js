import FormData from "form-data"

/**
 * Options: onResponse(response)
 * For each request, manipulate the response post-flight
 * `$axios.onResponse((response) => { })`
 *
 * Options: onRequest(config)
 * For each request, manipulate the request config preflight
 * `$axios.onRequest(config => { return config })`
 *
 *
 *
 * @param context
 * @param inject
 */
export default function (context, inject) {
  const {$axios} = context

  context.$api = {
    get: (path, config) => $axios.$get(`/api` + path, config),
    put: (path, data, config) => $axios.$put(`/api` + path, data, config),
    post: (path, data, config) => $axios.$post(`/api` + path, data, config),
    patch: (path, data, config) => $axios.$patch(`/api` + path, data, config),
    delete: (path, data, config) => $axios.$delete(`/api` + path, data, config),

    /**
     * @param path to post file to
     * @param file to post
     * @param params additional params to add to FormData
     * @returns {Promise<any>}
     */
    postFile: (path, file, params) => {
      const form = new FormData()
      form.append('file', file, file.name)

      if (params) {
        Object.keys(params).forEach(key => {
          form.append(key, params[key])
        })
      }

      return $axios.$post(`/api` + path, form)
    },
  }
  inject('api', context.$api)
}
