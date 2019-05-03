<template lang="html">
  <form>
    <v-text-field
      v-model="title"
      v-validate="'required'"
      :error-messages="errors.collect('title')"
      label="Titel"
      data-vv-name="title"
      required
    ></v-text-field>
    <v-text-field
      v-model="thumbnailImage"
      v-validate="{url: {require_protocol: true }, required: true}"
      :error-messages="errors.collect('thumbnailImage')"
      label="Bilde URL"
      data-vv-name="thumbnailImage"
      required
    ></v-text-field>
    <v-select
      v-model="selectedAuthor"
      v-validate="'required'"
      :items="optionsAuthor"
      :error-messages="errors.collect('selectAuthor')"
      label="Velg bruker"
      data-vv-name="selectAuthor"
      required
    ></v-select>
    <v-select
      v-model="selectedCategory"
      v-validate="'required'"
      :items="optionsCategory"
      :error-messages="errors.collect('selectCategory')"
      label="Velg kategori"
      data-vv-name="selectCategory"
      required
    ></v-select>

    <div class="orb-list-items">
          <h4 class="font-weight-light title mb-2">Legg til instruksjoner</h4>
          <div class="instructions-list">
            <div
                    class="row input"
                    v-for="(instructionsInput, index) in instructionsInputs"
                    :class="{ invalid: $v.instructionsInputs.$each[index].$error}"
                    :key="instructionsInput.id">
              <label class="col-sm-3 text-right" :for="instructionsInput.id"></label>
              <v-layout row wrap>
                <v-flex xs11>
                  <input
                          class="ing-input"
                          placeholder="Instruks..."
                          type="text"
                          :id="instructionsInput.id"
                          @blur="$v.instructionsInputs.$each[index].value.$touch()"
                          v-model="instructionsInput.value">
                </v-flex>
                <v-flex xs1>
                  <v-icon
                    class="mt-1 ml-3"
                    left
                    size=26
                    @click="onDeleteInstruction(instructionsInput.id)">
                    clear
                  </v-icon>
                </v-flex>
              </v-layout>
              </div>
            <v-btn class="add-button" small @click="onAddInstruction">Legg til</v-btn>
          </div>
        </div>

        <div class="orb-list-items">
          <h4 class="font-weight-light title mb-2">Legg til ingredienser</h4>
          <div class="instructions-list">
            <div
                    class="input"
                    v-for="(ingredientInput, index) in ingredientInputs"
                    :class="{ invalid: $v.ingredientInputs.$each[index].$error}"
                    :key="ingredientInput.id">
              <label class="col-sm-3 text-right" :for="ingredientInput.id"></label>
              <v-layout row wrap>
                <v-flex xs8>
                  <input
                          class="ing-input"
                          placeholder="Ingrediens..."
                          type="text"
                          :id="ingredientInput.id"
                          @blur="$v.ingredientInputs.$each[index].value.$touch()"
                          v-model="ingredientInput.value.ingredient">
                </v-flex>
                <v-flex xs3>
                  <input
                          class="ing-input"
                          placeholder="Mengde..."
                          type="text"
                          :id="ingredientInput.id"
                          @blur="$v.ingredientInputs.$each[index].value.$touch()"
                          v-model="ingredientInput.value.amount">
                </v-flex>
                <v-flex xs1>
                  <v-icon
                    class="mt-1 ml-3"
                    left
                    size=26
                    @click="onDeleteIngredient(ingredientInput.id)">
                    clear
                  </v-icon>
                </v-flex>
              </v-layout>

            </div>
            <v-btn class="add-button" small @click="onAddIngredient">Legg til</v-btn>
          </div>
        </div>
        <v-layout row wrap>
          <v-flex xs12>
            <v-btn class="orb-submit-btn" @click="submit">Lagre</v-btn>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <div class="orb-error-wrapper">
              <p class="text-xs-right orb-error" v-for="error in errors.all()">{{ removeExclamation(error) }} &nbsp;|&nbsp; </p>
            </div>
          </v-flex>
        </v-layout>
  </form>
</template>

<script>
import api from '../../services/api'
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  $_veeValidate: {
      validator: 'new'
    },
    data: () => ({
      title: '',
      thumbnailImage: '',
      optionsAuthor: [],
      optionsCategory: [],
      selectedAuthor: '',
      selectedCategory: '',
      instructionsInputs: [],
      ingredientInputs: [],
      dictionary: {
        custom: {
          title: {
            required: () => 'Titel kan ikke være tom!',
          },
          thumbnailImage: {
            url: () => 'Bilde URL må være en URL!',
            required: () => 'Bilde url kan ikke være tom!'
          },
          selectAuthor: {
            required: 'Velg en bruker!'
          },
          selectCategory: {
            required: 'Velg en kategori!'
          }
        }
      }
    }),
    validations: {
      instructionsInputs: {
        required,
        $each: {
          value: {
            required,
            minLen: minLength(2)
          }
        }
      },
      ingredientInputs: {
        required,
        $each: {
          value: {
            required
          }
        }
      }
    },
    mounted () {
      this.$validator.localize('en', this.dictionary)
    },
    methods: {
      removeExclamation(string) {
        return string.replace(/!+$/, '');
      },
      getAuthors() {
        api.getAllUsers()
          .then(authors => {
            authors.map(authorObj => {
              let author = authorObj.user;
              this.optionsAuthor.push(author)
            })
          })
      },
      getCategories() {
        api.getAllCategories()
          .then(categories => {
            categories.map(categoryObj => {
              let category = categoryObj.category;
              this.optionsCategory.push(category)
            })
          })
      },
      submit() {
        this.$validator.validateAll()
          .then(result => {
            if (this.instructionsInputs.length > 0 && this.ingredientInputs.length > 0 && !this.$validator.errors.all()){
              let data = this.getFormData();
              api.createRecipe(data)
                .then(response => {
                  console.log(response);
                  window.location.reload();
                })
            } else {
              console.log(false);
            }
          })
      },
      getFormData() {
        return {
          title: this.title,
          thumbnailImage: this.thumbnailImage,
          category: this.selectedCategory,
          author: this.selectedAuthor,
          instructions: this.instructionsInputs.map(instruction => instruction.value),
          ingredients: this.ingredientInputs.map(ingredient => ingredient.value)
        }
      },
      onAddInstruction () {
        const newInstruction = {
          id: Math.random() * Math.random() * 1000,
          value: ''
        }
        this.instructionsInputs.push(newInstruction)
      },
      onDeleteInstruction (id) {
        this.instructionsInputs = this.instructionsInputs.filter(instruction => instruction.id !== id)
      },
      onAddIngredient () {
        const newIngredient = {
          id: Math.random() * Math.random() * 1000,
          value: {
            ingredient: '',
            amount: ''
          }
        }
        this.ingredientInputs.push(newIngredient)
      },
      onDeleteIngredient (id) {
        this.ingredientInputs = this.ingredientInputs.filter(ingredient => ingredient.id !== id)
      },
    },
    created: function() {
      this.getAuthors();
      this.getCategories();
    }
}
</script>

<style lang="css" scoped>
.orb-error {
  display: inline;
  color: red;
}

.orb-submit-btn {
  margin-right: 0;
  float: right;
}

.orb-error-wrapper {
  float: right;
}

.add-button  {
  margin-left: 0 !important
}

.ing-input {
  min-width: 100%;
}

.orb-form {
    min-width: 600px;
  }

.error-text {
  margin-top: -2%;
}

.category-select {
  padding: 0 !important;
}

.signup-form {
  margin: 30px auto;
  padding: 20px;
}

.input {
  margin: 10px auto;
}

.input label {
  display: block;
  color: #4e4e4e;
  margin-bottom: 6px;
  font-size: 120%;
  margin-top: 1%;
}

.input.inline label {
  display: inline;
}

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.input.inline input {
  width: auto;
}

.input input:focus {
  outline: none;
  border: 1px solid #521751;
  background-color: #eee;
}

.input select {
  border: 1px solid #ccc;
  font: inherit;
}

.input.invalid input {
  border: 1px solid rgb(136, 0, 0);
  background-color: rgb(255, 211, 145);
}

.input.selectinvalid {
  margin-top: 10%;
}

.input.invalid label {
  color: rgb(136, 0, 0);
}

.orb-list-items input {
  width: 90%;
}

</style>
