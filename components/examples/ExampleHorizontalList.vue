<template>
  <section>
    <h1 class="mb-24">Vue Horizontal List</h1>

    <div class="p-24 bg-steam border-3">
      <h5>Just an empty DIV, for comparision.</h5>
    </div>

    <div>
      <vue-horizontal-list :items="items" :options="{responsive: [{size: 1}]}">
        <template v-slot:default="{item}">
          <div>
            <div class="Banner background-image ptb-48 p-32 border-4">
              <div class="flex-center">
                <div class="flex-column-align-center white text-center">
                  <h1>Important Text</h1>
                  <p>Why the text above is important</p>
                  <div class="mt-24">
                    <button>Explore Me</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </vue-horizontal-list>
    </div>

    <div>
      <vue-horizontal-list :items="items" :options="{responsive: [{end: 576, size: 1}, {size: 2}]}">
        <template v-slot:default="{item}">
          <div class="bg-steam border-3 overflow-hidden flex">
            <div class="ImageBoxed">
              <img :src="item.image"/>
            </div>

            <div class="p-16-24">
              <h5 class="text-ellipsis-1l">{{item.title}}</h5>
              <p class="text-ellipsis-2l">{{item.content}}</p>
            </div>
          </div>
        </template>
      </vue-horizontal-list>
    </div>

    <div>
      <vue-horizontal-list :items="items"
                           :options="{responsive: [{end: 576, size: 1}, {start: 576, end: 768, size: 2},{size: 3}]}">
        <template v-slot:default="{item}">
          <div>
            <div class="aspect r-5-3 border-3 overflow-hidden">
              <img :src="item.image"/>
            </div>

            <div class="mt-8 small-bold">SUBTITLE • FOCUS</div>

            <h5>{{item.title}}</h5>
            <p class="mt-4 text-ellipsis-2l">{{item.content}}</p>
          </div>
        </template>
      </vue-horizontal-list>
    </div>

    <div>
      <vue-horizontal-list :items="items"
                           :options="{responsive: [{end: 576, size: 1}, {start: 576, end: 768, size: 2},{start: 768, end: 992, size: 3},{size: 4}]}">
        <template v-slot:default="{item}">
          <div>
            <div class="aspect r-5-3 border-3 overflow-hidden">
              <img :src="item.image"/>
            </div>

            <div class="mt-8 flex-between">
              <div class="small-bold">BEST</div>
              <div class="small-bold">3/5</div>
            </div>

            <h6>{{item.title}}</h6>
            <p class="mt-4"><b>$200 USD</b> / night</p>
          </div>
        </template>
      </vue-horizontal-list>
    </div>

    <div>
      <vue-horizontal-list :items="items">
        <template v-slot:default="{item}">
          <div>
            <div class="aspect r-10-12 border-3 overflow-hidden">
              <div class="relative wh-100 lh-0">
                <img :src="item.image"/>


                <div class="bg-overlay absolute-0 wh-100 p-24 flex-end">
                  <h4 class="m-0 text-ellipsis-2l text-center white">{{item.title}}</h4>
                </div>
              </div>
            </div>

            <div class="mt-8 tiny-bold">SUBTITLE • FOCUS</div>

            <p class="mt-4 text-ellipsis-2l">{{item.content}}</p>
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
          {
            title: 'Sed non ante non cras amet',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis leo. Vestibulum sit amet metus nec neque dignissim dapibus.',
            image: 'https://picsum.photos/id/1015/600/600'
          },
          {
            title: 'Curabitur sit amet nunc',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat. Aliquam erat volutpat. Nunc erat lacus, rhoncus nec.',
            image: 'https://picsum.photos/id/1019/600/600'
          },
          {
            title: 'Proin pharetra, ante metus',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac diam ac ex efficitur posuere. Pellentesque cursus pellentesque risus, non.',
            image: 'https://picsum.photos/id/1039/600/600'
          },
          {
            title: 'Cras pharetra non enim a',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada varius nibh, a malesuada nisi feugiat eget. Aenean convallis semper.',
            image: 'https://picsum.photos/id/1042/600/600'
          },
          {
            title: 'Proin vulputate, augue eu accumsan',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla tempor libero sit amet mollis. Praesent quis leo erat. Integer.',
            image: 'https://picsum.photos/id/1044/600/600'
          },
          {
            title: 'Maecenas feugiat magna sapien in',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet fringilla ante. Quisque at ipsum non lacus consequat dictum.',
            image: 'https://picsum.photos/id/1057/600/600'
          },
          {
            title: 'Donec commodo sed enim at',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu condimentum risus. Praesent dignissim, neque nec pharetra vestibulum, libero odio.',
            image: 'https://picsum.photos/id/1063/600/600'
          },
          {
            title: 'In bibendum urna et turpis',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ante volutpat leo vulputate volutpat et sed ex. Vivamus eu.',
            image: 'https://picsum.photos/id/1076/600/600'
          },
          {
            title: 'Phasellus iaculis dignissim erat at',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis quam scelerisque, eleifend purus gravida, scelerisque orci. Ut et turpis.',
            image: 'https://picsum.photos/id/1083/600/600'
          },
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  section > div {
    margin-top: 24px;
    margin-bottom: 24px;
  }

  .Banner {
    background-image: url("https://picsum.photos/id/1011/2000/500");
  }

  .background-image {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .ImageBoxed {
    flex: 0 0 25%;
    max-width: 25%;
  }
</style>
