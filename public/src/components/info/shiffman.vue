<template>
  <v-app>
    <div>
      <v-layout justify-left mt-5 pt-2 mr-4 text-xs-left row wrap justify-space-around>
        <v-flex offset-xs1 xs12 sm4 md3>
            <v-card flat hover>
              <v-card-media
                :src="require('@/assets/shiffman.jpg')"
                height="200px"
              ></v-card-media>

              <v-card-title primary-title>
                <div>
                  <h3 class="mb-0 pink--text" style="font-family: 'Montserrat', sans-serif;font-size:23px">Shiffman API</h3>
                  <div class="body-1">A collection of quotes by my favourite,your favourite, our favourite - <span class="pink--text"> Daniel Shiffman</span>.</div>
                </div>
              </v-card-title>

            </v-card>
          </v-flex>

        <v-flex xs11 md7 mt-3 ml-3>
          <h1 class="mb-1">ABOUT</h1>
          <div class="texty">
            <span class="pink--text">Daniel Shiffman</span> works as an Associate Arts Professor at the Interactive Telecommunications Program at NYU’s Tisch School of the Arts.
          </div><br>
          <div class="texty">
            Originally from Baltimore, Daniel received a BA in Mathematics and Philosophy from Yale University and a Master’s Degree from the ITP. He is a director of The Processing Foundation and develops tutorials, examples, and libraries for Processing and p5.js. He is the author of Learning Processing: A Beginner’s Guide to Programming Images, Animation, and Interaction and The Nature of Code (self-published via Kickstarter), an open source book about simulating natural phenomenon in Processing. He can be found talking incessantly on the YouTube about programming.
          </div>

          <v-btn icon href="https://www.youtube.com/user/shiffman">
            <v-icon medium color="red">
              fa-youtube-play
            </v-icon>
          </v-btn>
          <v-btn icon href="https://shiffman.net/about/">
            <v-icon medium>
              link
            </v-icon>
          </v-btn>
        </v-flex>
      </v-layout>

      <v-divider class="mt-4"></v-divider>

      <v-container text-xs-center>
        <v-layout row wrap justify-space-between>
          <v-flex xs12 md4 mb-2 text-xs-center>
            <v-card flat hover>

              <v-card-title primary-title>
                <div>
                  <h3 style="font-family: 'Montserrat', sans-serif">ALL QUOTES<v-btn v-clipboard:copy="thingToCopy" @click="handleCopyStatus()" icon><v-icon color="pink">fa-clone</v-icon></v-btn></h3>

                  <div class="cardyb">Get all his quotes @ <div class="pink--text"> <code ref="text">api-train.herokuapp.com/shiffman/quotes</code></div>.</div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 md4 mb-2>
            <v-card flat hover>
              <v-card-title primary-title>
                <div>
                  <h3 style="font-family: 'Montserrat', sans-serif">NUMBER OF QUOTES<v-btn icon v-clipboard:copy="thingToCopy2" @click="handleCopyStatus()"><v-icon color="pink">fa-clone</v-icon></v-btn></h3>

                  <div class="cardyb">Get specific number of quotes <div class="pink--text"> <code ref="text">api-train.herokuapp.com/shiffman/quotes?count=5</code></div>.</div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 md4 mb-2>
            <v-card flat hover>
              <v-card-title primary-title>
                <div>
                  <h3 style="font-family: 'Montserrat', sans-serif">RANDOM QUOTE<v-btn icon v-clipboard:copy="thingToCopy3" @click="handleCopyStatus()"><v-icon color="pink">fa-clone</v-icon></v-btn></h3>

                  <div class="cardyb">Get a random quote each time @ <div class="pink--text"> <code ref="text">api-train.herokuapp.com/shiffman/quotes/random</code></div>.</div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-snackbar
      v-model="copySnackbar"
      :timeout=1500
      color="success"
      >
        URL has been copied successfuly
      </v-snackbar>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'shiffman',
  data () {
    return {
      copySnackbar: false,
      thingToCopy: 'api-train.herokuapp.com/shiffman/quotes',
      thingToCopy2: 'api-train.herokuapp.com/shiffman/quotes?count=5',
      thingToCopy3: 'api-train.herokuapp.com/shiffman/quotes/random'
    }
  },
  methods: {
    handleCopyStatus () {
      this.copySnackbar = true
    }
  }
}
</script>

<style scoped>

  h3,h1{
    font-family: 'Montserrat', sans-serif;
    font-size:26px;
  }
  .texty{
    font-family: 'Montserrat', sans-serif;
    font-size:20px;
  }
  .cardyb{
    font-size:16px;
  }
</style>
