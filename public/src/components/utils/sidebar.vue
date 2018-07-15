<template>
  <v-app>
    <div class="sidebar">
      <v-flex xs1 mt-2 ml-2 text-xs-left v-if="!drawer" style="position: absolute">
        <v-btn icon class="grey lighten-5" @click.stop="drawer =! drawer"><v-icon large color="pink">chevron_right</v-icon></v-btn>
      </v-flex>
      <v-navigation-drawer
        app
        absolute
        mini-variant
        v-model="drawer"
        dark
        hide-overlay
        style="float:left;position:fixed"
        class="pink"
      >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile>
          <v-btn class="pink lighten-1" icon @click.stop="drawer =! drawer"><v-icon large dark>chevron_left</v-icon></v-btn>
        </v-list-tile>
      </v-list>

      <v-list class="pa-0">

      </v-list>
    </v-toolbar>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-tile avatar class="mb-3">
          <v-list-tile-avatar>
            <img src="../../assets/me.png" >
          </v-list-tile-avatar>
        </v-list-tile>
      <v-list-tile
      >
        <v-list-tile-action>
          <v-btn icon><v-icon>mail</v-icon></v-btn>
        </v-list-tile-action>
      </v-list-tile>

      <v-list-tile
      >
        <v-list-tile-action>
          <v-btn icon href="https://www.github.com/mukulkhanna"><v-icon>fa-github</v-icon></v-btn>
        </v-list-tile-action>
      </v-list-tile>
      <v-list-tile
      >
        <v-list-tile-action>
          <v-btn icon><v-icon>fa-medium</v-icon></v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      mini: true,
      window: {
        width: 0,
        height: 0
      }
    }
  },
  methods: {
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
      if (this.window.width < 850) {
        this.drawer = false
      }
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>
