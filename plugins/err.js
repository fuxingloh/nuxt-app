export default function (context, inject) {
  const {error, store} = context

  context.$error = (err) => {
    if (err.statusCode) {
      switch (err.statusCode) {
        case 404:
          return error({statusCode: 404, message: 'Not Found'})

        case 403:
          return error({statusCode: 403, message: 'Forbidden'})

        default:
          return store.dispatch('addError', err)
      }
    }

  }
  inject('error', context.$error)
}
