<template>
  <div class="container pt-48 pb-128">
    <div>
      <h1>Features</h1>
    </div>

    <section>
      <h3>Spinner</h3>
      <spinner/>
    </section>

    <section>
      <h3>API</h3>
      <p>{{viaAxios}}</p>
    </section>
  </div>
</template>

<script>
  import Spinner from "../components/utils/Spinner";
  import * as Cookies from "js-cookie";

  export default {
    components: {Spinner},
    asyncData({$axios}) {
      return $axios.$get('/api/hello', {params: {world: 'Not World'}})
        .then(value => {
          return {
            viaAxios: value
          }
        })
    }
  }
</script>

<style scoped lang="less">
  h3 {
    margin-top: 24px;
    margin-bottom: 8px;
  }
</style>
