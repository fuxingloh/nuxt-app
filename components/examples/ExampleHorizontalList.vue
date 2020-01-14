<template>
  <section>
    <h1 class="mtb-24">Vue Horizontal List</h1>

    <div class="p-24 bg-steam border-3">
      <h5>Just a DIV</h5>
    </div>

    <div>
      <vue-horizontal-list :items="items" :options="{responsive: [{size: 1}]}">
        <template v-slot:default="{item}">
          <div class="p-16-24 bg-steam border-3">
            <h5>{{item.title}}</h5>
            <p>{{item.content}}</p>
          </div>
        </template>
      </vue-horizontal-list>
    </div>

    <div>
      <vue-horizontal-list :items="items" :options="{responsive: [{end: 576, size: 1}, {size: 2}]}">
        <template v-slot:default="{item}">
          <div class="p-16-24 bg-steam border-3">
            <h5>{{item.title}}</h5>
            <p>{{item.content}}</p>
          </div>
        </template>
      </vue-horizontal-list>
    </div>

    <div>
      <vue-horizontal-list :items="items"
                           :options="{responsive: [{end: 576, size: 1}, {start: 576, end: 768, size: 2},{size: 3}]}">
        <template v-slot:default="{item}">
          <div class="p-16-24 bg-steam border-3">
            <h5>{{item.title}}</h5>
            <p>{{item.content}}</p>
          </div>
        </template>
      </vue-horizontal-list>
    </div>

    <div>
      <vue-horizontal-list :items="items"
                           :options="{responsive: [{end: 576, size: 1}, {start: 576, end: 768, size: 2},{start: 768, end: 992, size: 3},{size: 4}]}">
        <template v-slot:default="{item}">
          <div class="p-16-24 bg-steam border-3">
            <h5>{{item.title}}</h5>
            <p>{{item.content}}</p>
          </div>
        </template>
      </vue-horizontal-list>
    </div>

    <div>
      <vue-horizontal-list :items="items">
        <template v-slot:default="{item}">
          <div class="p-16-24 bg-steam border-3">
            <h5>{{item.title}}</h5>
            <p>{{item.content}}</p>
          </div>
        </template>
      </vue-horizontal-list>
    </div>
  </section>
</template>

<script>
  import VueHorizontalList from "vue-horizontal-list";

  export default {
    name: "ExampleHorizontalList",
    components: {VueHorizontalList},
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
