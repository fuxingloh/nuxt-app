/**
 * Path manipulation plugin.
 * E.g: this.$path.replace({path: `/${slug}-${id}`})
 * E.g: this.$path.replace({query: {foo:'bar'}})
 */
export default function (context, inject) {
  inject('path', {
    replace: ({path, query}) => {
      const getPath = () => {
        return path ? path : window.location.pathname;
      }

      const getQuery = () => {
        if (query) {
          if (Object.keys(query).length > 0) {
            return '?' + Object.keys(query)
              .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(query[k])}`)
              .join('&');
          }

          return ''
        }
        return window.location.search || ''
      }

      window.history.replaceState({}, document.title, `${getPath()}${getQuery()}`)
    },
  })
}
