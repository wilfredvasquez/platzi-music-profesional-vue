<template lang="pug">
  #app(class="columns")
   div(class="column is-half is-offset-one-quarter")
      div(class="container-form")
        #header
          img(
            alt="Satelite Platzi"
            src="https://static.platzi.com/media/user_upload/Page%201-d8d869f4-7130-4ae9-9907-2fa809bd136a.jpg")
          br
          p(class="title-platzi is-size-4 has-text-center mt-10")
            b {{ "Registro estación Platzi" }}
        br
        div(class="field")
          label(class="is-size-7 has-text-left text-platzi") 
            b {{ "Nombre" }}
          div(class="control")
            input(class="input is-warning" type="text" placeholder="Nombre")
        div(class="field")
          label(class="is-size-7 has-text-left text-platzi") 
            b {{ "Apellido" }}
          div(class="control")
            input(class="input is-warning" type="text" placeholder="Apellido")
        div(class="field")
          label(class="is-size-7 has-text-left text-platzi")
            b {{ "Cargo" }}
          div(class="control")
            input(class="input is-warning" type="text" placeholder="Cargo")
        
        .columns
          div(class="column field is-grouped is-grouped-right")
            div(class="control")
              button(class="button-platzi")
               b {{ "ENVIAR" }}
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
#app {
  font-family: Roboto, Roboto-Bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  color: #212121;
}
#header{
  text-align: center;
}
.container-form {
  width: 320px;
  height: 409px;
}
.text-platzi{
  color: #FF9300;
}
.title-platzi {
  color: #00BFD6;
}
.button-platzi{
  color: white;
  background: #00BFD6;
  border-color: #00BFD6;
  border-width: 1px;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.5em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(0.5em - 1px);
  text-align: center;
  white-space: nowrap;
  border-radius: 4px;
  width: 160px;
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.5em;
}
</style>
