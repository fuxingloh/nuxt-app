<template>
  <section>
    <h1 class="mb-24">Vue Masonry Wall</h1>

    <vue-masonry-wall :items="items" :options="options" @append="append">
      <template v-slot:default="{item}">
        <div class="p-16-24 border-3 bg-steam">
          <h5>{{item.title}}</h5>
          <p class="text-ellipsis">{{item.content}}</p>
        </div>
      </template>
    </vue-masonry-wall>
  </section>
</template>

<script>
  import VueMasonryWall from "vue-masonry-wall";

  function content() {
    const length = Math.random() * 300 + 30

    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  export default {
    name: "ExampleMasonry",
    components: {VueMasonryWall},
    data() {
      return {
        options: {
          width: 300,
          padding: {
            2: 8,
            default: 12
          },
        },
        items: [
          {title: 'Item 0', content: content()},
          {title: 'Item 1', content: content()},
          {title: 'Item 2', content: content()},
          {title: 'Item 3', content: content()},
          {title: 'Item 4', content: content()},
          {title: 'Item 5', content: content()},
          {title: 'Item 6', content: content()},
          {title: 'Item 7', content: content()},
          {title: 'Item 8', content: content()},
          {title: 'Item 9', content: content()},
        ]
      }
    },
    methods: {
      append() {
        for (let i = 0; i < 20; i++) {
          this.items.push({title: `Item ${this.items.length}`, content: content()})
        }
      }
    }
  }
</script>

<style scoped>

</style>
