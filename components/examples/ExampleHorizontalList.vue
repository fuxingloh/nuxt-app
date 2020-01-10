<template>
  <section>
    <h3>Horizontal List</h3>

    <horizontal-list :items="items" :options="{size: 3}">
      <template v-slot:default="{item}">
        <div class="p-16-24 border-3 bg-steam">
          <h5>{{item.title}}</h5>
          <p>{{item.content}}</p>
        </div>
      </template>
    </horizontal-list>
  </section>
</template>

<script>
  import HorizontalList from "../utils/HorizontalList";

  export default {
    name: "ExampleHorizontalList",
    components: {HorizontalList},
    data() {
      return {
        items: [
          {title: 'Item 1', content: 'Content item with description'},
          {title: 'Item 2', content: 'Content item with description'},
          {title: 'Item 3', content: 'Content item with description'},
          {title: 'Item 4', content: 'Content item with description'},
          {title: 'Item 5', content: 'Content item with description'},
          {title: 'Item 6', content: 'Content item with description'},
          {title: 'Item 7', content: 'Content item with description'},
          {title: 'Item 8', content: 'Content item with description'},
          {title: 'Item 9', content: 'Content item with description'},
        ]
      }
    }
  }
</script>

<style scoped>

</style>
