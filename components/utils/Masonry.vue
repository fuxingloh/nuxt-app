<template>
  <div ref="wall" class="MasonryWall" :style="style.wall" :class="{Ready: ready}">
    <div class="MasonryWallLane" v-for="(lane, index) in lanes" :key="index" :style="style.lane">
      <div class="MasonryWallItem" v-for="i in lane.indexes" :key="i" :style="style.item" :ref="`item_${i}`">
        <slot v-bind:item="items[i]" :index="i">{{items[i]}}</slot>
      </div>

      <div ref="spacers" class="Spacers index--1" :data-lane="index"
           v-observe-visibility="{callback: (v) => v && fill(),throttle:300}"
      />
    </div>
  </div>
</template>

<script>
  const newLanes = (count) => {
    const lanes = []
    for (let i = 0; i < count; i++) {
      lanes.push({i: i, indexes: []})
    }
    return lanes
  }

  export default {
    name: "Masonry",
    props: {
      items: {
        type: Array,
        required: true
      },

      /**
       * Masonry Lane config options
       * Full Config Example
       * {
       *     lanes: {
       *         1: {
       *             padding: 6
       *         },
       *         2: {
       *             padding: 8
       *         }
       *     },
       *     width: 300, of Item padding included
       *     padding: 12, Left Right Top Bottom
       *     min: 1, min number of lanes
       * }
       */
      options: {
        type: Object,
        required: false
      },

      /**
       * Persistence of Masonry Wall in vuex store
       */
      persistence: {
        type: Object,
        required: false
      },
    },
    data() {
      const count = this.options && this.options.ssr && this.options.ssr.default || 0
      if (count > 0) {
        const lanes = newLanes(count)
        for (let i = 0; i < this.items.length; i++) {
          lanes[i % count].indexes.push(i)
        }

        return {
          lanes: lanes,
          cursor: this.items.length,
          ready: false
        }
      }

      return {
        lanes: [],
        cursor: 0,
        ready: false
      }
    },
    mounted() {
      // Mounted is only called in client side
      if (this.persistence && this.persistence.getter) {
        const {lanes, cursor} = JSON.parse(JSON.stringify(this.$store.getters[this.persistence.getter]))
        if (lanes.length > 0) {
          this.lanes = lanes
          this.cursor = cursor
        }
      }

      this.$redraw = () => {
        const count = this.laneCount()
        if (this.lanes.length !== count) {
          this.ready = false
          this.cursor = 0
          this.lanes.splice(0)
          this.lanes.push(...newLanes(count))
        }
        this.ready = true
        this.fill()
      }

      this.$redraw()
      window.addEventListener('resize', this.$redraw)
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.$redraw)

      if (this.persistence && this.persistence.commit) {
        this.$store.commit(this.persistence.commit, {
          lanes: this.lanes, cursor: this.cursor
        })
      }
    },
    computed: {
      style() {
        const padding = this.padding()

        return {
          wall: {
            margin: `-${padding}px`
          },
          lane: {
            paddingLeft: `${padding}px`,
            paddingRight: `${padding}px`,
          },
          item: {
            paddingTop: `${padding}px`,
            paddingBottom: `${padding}px`,
          }
        }
      }
    },
    methods: {
      fill() {
        if (!this.ready) return

        if (this.cursor >= this.items.length) {
          // Request for more items
          this.$emit('append')
          return
        }

        // Keep filling until no more items
        this.$nextTick(() => {
          const spacers = this.$refs.spacers
          const spacer = _.maxBy(spacers, (spacer) => spacer.clientHeight || 0)
          this.fillItem(spacer.dataset.lane)
          this.fill()
        })
      },

      fillItem(laneIndex) {
        const lane = this.lanes[laneIndex]
        if (this.items[this.cursor]) {
          lane.indexes.push(this.cursor)
          this.cursor++
        }
      },

      /**
       * @param index to scroll to
       */
      scrollTo(index) {
        const item = this.$refs['item_' + index]
        if (item && item[0]) {
          clearTimeout(this.$scrollEvent)
          this.$scrollEvent = setTimeout(() => {
            this.$scrollTo(item[0], 500)
          }, 501)
        }
      },

      padding() {
        const lane = this.options && this.options.lanes && this.options.lanes[this.lanes.length]
        return lane && lane.padding || this.options.padding || 12
      },
      laneWidth() {
        const lane = this.options && this.options.lanes && this.options.lanes[this.lanes.length]
        return lane && lane.width || this.options.width || 300
      },
      laneCount() {
        let length = Math.round(this.$refs.wall.scrollWidth / this.laneWidth())
        if (this.options && this.options.min) {
          if (length < this.options.min) return this.options.min
        }
        return length
      },
    }
  }
</script>

<style scoped lang="less">
  .MasonryWall {
    display: flex;

    .MasonryWallLane {
      flex-grow: 1;
      flex-basis: 0;

      display: flex;
      flex-direction: column;
    }

    .Spacers {
      flex-grow: 1;
      margin-top: -300px;
      padding-top: 300px;
      min-height: 100px;
    }
  }

  .MasonryWall:not(.Ready) {
    opacity: 0;
  }
</style>
