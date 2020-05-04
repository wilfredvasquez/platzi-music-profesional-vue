<template lang="pug">
  #app
    Header(:headerData="headerData")
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      headerData: {
        logoSrc: "https://static.platzi.com/media/user_upload/logo-d871d30b-ac23-4240-93f3-13e49084d80b.jpg",
        textPlaceholder: "Busca tu peli, actor, actriz o director favorito",
        userName: "Bambi Rodríguez",
        userImg: "https://static.asianetnews.com/img/default-user-avatar.png",
      }
    }
    
  }
}
</script>

<style lang="scss">

</style>
