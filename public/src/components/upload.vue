<template>
  <v-app>
    <div>
      <h1 class="pink--text mt-5">Quote uploader</h1>
      <v-form v-model="valid">
        <v-layout wrap justify-center mt-5>
          <v-flex xs9 sm6>
            <v-select
              color="pink"
              class="pink--text"
              :rules="rules"
              :items="items"
              label="Choose API"
              v-on:change="clear"
              outline
              v-model="name"
            ></v-select>
          </v-flex>
        </v-layout>
        <v-layout wrap justify-center mt-1>
          <v-flex xs9 sm6>
            <v-textarea
            v-if="name"
            label="QUOTE"
            :rules="rules"
            placeholder="Enter the quote here"
            v-model="quote"
            outline
            class="pink--text"
            color="pink"
            >
            </v-textarea>
          </v-flex>
        </v-layout>
        <v-layout wrap justify-center mt-1>
          <v-flex xs9 sm6>
            <v-text-field
            v-if="name==='The Office'"
            :rules="rules"
            v-model="character"
            outline
            label="CHARACTER"
            placeholder="Enter character here"
            class="pink--text"
            color="pink"
            >
            </v-text-field>
          </v-flex>
    </v-layout>
          <v-btn :disabled="!valid" color="pink"  @click="upload">UPLOAD</v-btn>
  </v-form>
          <v-snackbar
          v-model="snackbar"
          top
          color="success"
          >
            {{snack}}
          </v-snackbar>
    </div>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  name: 'upload',
  data () {
    return {
      name: null,
      quote: null,
      character: null,
      snack: null,
      snackbar: false,
      items: [
        'Shiffman',
        'The Office',
        'Game of Thrones'
      ],
      rules: [
        v => !!v || 'Field is required',
        v => (v && v.length >= 5) || 'Field must be greater than 5 characters'
      ],
    }
  },
  methods: {
    clear () {
      this.quote = null,
      this.character = null
    },
    upload () {
      if (this.name === 'The Office') {
        var myQuote = {
          quote: this.quote,
          character: this.character,
          apiKey: process.env.PASS_WORD
        }
        axios.post('http://api-train.herokuapp.com/theoffice/quotes', myQuote)
          .then(() => {
            console.log('✅')
            this.snack = 'Successfuly uploaded ✅'
            this.snackbar = true
            this.clear()
          })
          .catch((err) => {
            console.log(err)
            this.snack = err
            this.snackbar = true
          })
      }
    }
  }
}
</script>

<style>

</style>
