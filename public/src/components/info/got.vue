<template>
  <v-app>
    <div>
      <v-layout justify-left mt-5 pt-2 mr-4 text-xs-left row wrap justify-space-around>
        <v-flex offset-xs1 xs12 sm4 md3>
            <v-card>
              <v-card-media
                contain
                :src="require('@/assets/images.jpeg')"
                height="200px"
              ></v-card-media>

              <v-card-title primary-title>
                <div>
                  <h3 class="ml-0 pink--text text-xs-left" style="font-family: 'Montserrat', sans-serif;font-size:23px">Game of Thrones API</h3>
                  <div class="text-xs-left body-1">A collection of quotes by my favourite,your favourite, our favourite - <span class="pink--text">team at Dunder Mifflin</span>.</div>
                </div>
              </v-card-title>

            </v-card>
          </v-flex>

        <v-flex xs11 md7 mt-3 ml-3 mb-5>
          <h1 class="mb-1">ABOUT</h1>
          <div class="texty">
            <span class="pink--text">Game of Thrones</span> is an American fantasy drama television series created by David Benioff and D. B. Weiss. It is an adaptation of A Song of Ice and Fire, George R. R. Martin's series of fantasy novels, the first of which is A Game of Thrones. The series premiered on HBO in the United States on April 17, 2011, and its seventh season ended on August 27, 2017. The series will conclude with its eighth season premiering in 2019.
          </div><br>
          <div class="texty">
            Game of Thrones has attracted record viewership on HBO and has a broad, active, international fan base. It has been acclaimed by critics, particularly for its acting, complex characters, story, scope, and production values, although its frequent use of nudity and violence (including sexual violence) has been criticized. The series has received 38 Primetime Emmy Awards, including Outstanding Drama Series in 2015 and 2016, more than any other primetime scripted television series.
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
                            <v-btn icon to="/got/quotes"><v-icon small color="pink">launch</v-icon></v-btn>
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
  name: 'got',
  data () {
    return {
      copySnackbar: false,
      cards: [
        { head: 'ALL QUOTES', text: 'Get all quotes @' , link: 'https://api-train.herokuapp.com/got/quotes' },
        { head: 'NUMBER OF QUOTES', text: 'Get specific number of quotes @', link: 'https://api-train.herokuapp.com/got/quotes?count=5' },
        { head: 'RANDOM QUOTE', text: 'Get a random quote @', link: 'https://api-train.herokuapp.com/got/quotes/random' },
        { head: "CHARACTERS' QUOTES", text: "Get characters' quotes @", link: 'https://api-train.herokuapp.com/got/quotes?character=Tyrion' }
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
