// import FormData from "form-data"

// const apiVersion = 'v0.29.0'

export default function (context, inject) {
  const {$axios, store, req} = context

  // $axios.onResponse((response) => {
  //   if (response.data && response.data.error) {
  //     const error = response.data.error
  //     throw({statusCode: error.code, message: error.message, response})
  //   }
  // })

  // $axios.onRequest(config => {
  //   // Get user Id token
  //   return authenticator.getIdToken().then(({token}) => {
  //     if (token) config.headers['Authorization'] = `Bearer ${token}`
  //     return config
  //   }).catch(() => {
  //     // Error, Logout User,
  //     store.dispatch('account/signOut')
  //     return config
  //   })
  // });

  context.$api = {
    get: (path, config) => $axios.$get(`/api` + path, config),
    put: (path, data, config) => $axios.$put(`/api` + path, data, config),
    post: (path, data, config) => $axios.$post(`/api` + path, data, config),
    patch: (path, data, config) => $axios.$patch(`/api` + path, data, config),
    delete: (path, data, config) => $axios.$delete(`/api` + path, data, config),

    // postImage: (file, source) => {
    //   const form = new FormData()
    //   form.append('file', file, file.name)
    //   form.append("source", source)
    //   console.log(process.env.apiUrl)
    //   return $axios.$post(`${process.env.apiUrl}${apiVersion}/me/images`, form)
    // },
  }
  inject('api', context.$api)
}
