<template>
  <v-app>
    <div class="hello">
      <img class="mt-5" src="../assets/seven.jpg" height=200>
      <!-- <div class="display-3 text-xs-left">api Train </div> -->
      <v-container>
        <v-layout justify-center>
          <v-flex xs10>
            <div class="headline">🌈 A land of open-source apis of things that I like 🎉 </div>
          </v-flex>
        </v-layout>
        <v-layout text-xs-center justify-center mt-3 mb-3>
          <v-flex xs10>
            <v-chip class="pink--text body-1">
              <v-avatar class="pink white--text"><b>M</b></v-avatar>
              MongoDB
            </v-chip>
            <v-chip class="pink--text body-1">
              <v-avatar class="pink white--text"><b>E</b></v-avatar>
                Express.js
            </v-chip>
            <v-chip class="pink--text body-1">
              <v-avatar class="pink white--text"><b>V</b></v-avatar>
                VueJS
            </v-chip>
            <v-chip class="pink--text body-1">
              <v-avatar class="pink white--text"><b>N</b></v-avatar>
                Node.js
            </v-chip>
          </v-flex>
        </v-layout>
        <p><v-btn icon><v-icon large color="pink">fa-github</v-icon></v-btn></p>
      </v-container>

      <v-layout justify-center row wrap mb-5>
        <v-flex xs11 sm4 md3 ml-2>
          <v-card hover flat to="info/shiffman">
            <v-card-media
              :src="require('@/assets/shiffman.jpg')"
              height="200px"
            ></v-card-media>

            <v-card-title primary-title>
              <div>
                <h3 class="mb-0 pink--text" style="font-family: 'Montserrat', sans-serif;font-size:25px">Shiffman API</h3>
                <div class="body-1">A collection of quotes by my favourite,your favourite, our favourite - <span class="pink--text"> Daniel Shiffman</span>.</div>
              </div>
            </v-card-title>

          </v-card>
        </v-flex>
        <v-flex xs12 sm4 md3 ml-2>
          <v-card hover flat>
            <v-card-media
              contain
              src="https://i.pinimg.com/originals/85/e6/f7/85e6f76cf15b4255a6192b4d85c6d8c3.jpg"
              height="200px"
            ></v-card-media>

            <v-card-title primary-title>
              <div>
                <h3 class="mb-0 pink--text" style="font-family: 'Montserrat', sans-serif;font-size:25px">The Office API</h3>
                <div class="body-1">A collection of quotes of the TV show - <span class="pink--text"> The Office</span>.</div>
              </div>
            </v-card-title>

          </v-card>
        </v-flex>
        <v-flex xs12 sm4 md3 ml-2>
          <v-card hover flat>
            <v-card-media
              contain
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXpjratsD8w9M4wNlpzrex1JHnFQl5LKS-gNW0xQurKp-bMNZiAw"
              height="200px"
            ></v-card-media>

            <v-card-title primary-title>
              <div>
                <h3 class="mb-0 pink--text" style="font-family: 'Montserrat', sans-serif;font-size:25px">Game of Thrones API</h3>
                <div class="body-1">A collection of quotes by the TV show - <span class="pink--text"> Game of Thrones</span>.</div>
              </div>
            </v-card-title>

          </v-card>
        </v-flex>
  </v-layout>

      <!-- <v-footer
        dark
        height=""
      >
    <v-card
      class="flex"
      flat
      tile

    >

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2018 — <strong>API TRAIN</strong>
      </v-card-actions>
    </v-card>
  </v-footer> -->

    </div>
  </v-app>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
