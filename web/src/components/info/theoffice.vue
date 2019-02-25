<template>
  <v-app>
    <div>
      <v-layout justify-left mt-5 pt-2 mr-4 text-xs-left row wrap justify-space-around>
        <v-flex offset-xs1 xs12 sm4 md3>
            <v-card flat>
              <v-card-media
                contain
                :src="require('@/assets/the-office-us.jpg')"
                height="200px"
              ></v-card-media>

              <v-card-title primary-title>
                <div>
                  <h3 class="ml-0 pink--text text-xs-left" style="font-family: 'Montserrat', sans-serif;font-size:23px">The Office API</h3>
                  <div class="text-xs-left body-1">A collection of quotes by my favourite,your favourite, our favourite - <span class="pink--text">team at Dunder Mifflin</span>.</div>
                </div>
              </v-card-title>

            </v-card>
          </v-flex>

        <v-flex xs11 md7 mt-3 ml-3 mb-5>
          <h1 class="mb-1">ABOUT</h1>
          <div class="texty">
            <span class="pink--text">The Office</span> is an American television sitcom that aired on NBC from March 24, 2005, to May 16, 2013, lasting nine seasons.
          </div><br>
          <div class="texty">
            The series depicts the everyday lives of office employees in the Scranton, Pennsylvania, branch of the fictional Dunder Mifflin Paper Company. To simulate the look of an actual documentary, it was filmed in a single-camera setup, without a studio audience or a laugh track. The series debuted on NBC as a midseason replacement and aired 201 episodes over the course of its run. The Office initially featured Steve Carell, Rainn Wilson, John Krasinski, Jenna Fischer, and B. J. Novak as the main cast; the series experienced numerous changes to its ensemble cast during its run.
          </div><br>
          <div class="texty">
            <span class="pink--text"> Since its debut, the series has frequently been listed as one of the greatest TV shows of all time.</span>
          </div>

        </v-flex>
      </v-layout>

      <v-divider class="mt-4"></v-divider>

      <v-container text-xs-center mt-4>
        <v-layout row wrap justify-center>
          <v-flex xs12 md4 mb-2 pl-2 text-xs-center v-for="card in cards" :key="card.text">
            <v-card flat>

              <v-card-title primary-title>
                <v-layout justify-center>
                  <div>
                      <h3 style="font-family: 'Montserrat', sans-serif">{{card.head}}
                        <v-layout justify-center>
                          <v-flex xs2>
                            <v-btn icon v-clipboard:copy="card.link" @click="handleCopyStatus()"><v-icon color="pink">fa-clone</v-icon></v-btn>
                          </v-flex>
                          <v-flex xs2>
                            <v-btn icon :href="card.link"><v-icon small color="pink">launch</v-icon></v-btn>
                          </v-flex>
                        </v-layout>
                      </h3>
                      <br>
                      <div class="cardyb">{{card.text}}<br><div class="pink--text"> <code ref="text" class="mt-3">{{card.link}}</code></div></div>
                    </div>
                </v-layout>
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
  name: 'theoffice',
  data () {
    return {
      copySnackbar: false,
      cards: [
        { head: 'ALL QUOTES', text: 'Get all quotes @', link: 'https://api-train.herokuapp.com/theoffice/quotes' },
        { head: 'NUMBER OF QUOTES', text: 'Get specific number of quotes @', link: 'https://api-train.herokuapp.com/theoffice/quotes?count=5' },
        { head: 'RANDOM QUOTE', text: 'Get a random quote @', link: 'https://api-train.herokuapp.com/theoffice/quotes/random' },
        { head: 'QUOTES BY CHARACTER', text: "Get a character's quote @", link: 'https://api-train.herokuapp.com/theoffice/quotes?charcater="Michael' },
        { head: "COUNTED QUOTES", text: "Get certain number of character's quotes @", link: 'https://api-train.herokuapp.com/theoffice/quotes?charcater=Michael&count=5' }
      ]
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
