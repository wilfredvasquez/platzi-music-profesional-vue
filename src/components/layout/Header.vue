<template lang="pug">
  section.hero.is-success
    .hero-head
      header
      nav.navbar
        .navbar-brand
          .nav-item(class="margin-left margin-top")
              strong 📻  Platzi Music
        .navbar-menu
          .navbar-start

          .navbar-end.is-gapless
            .navbar-item()
              .buttons
                router-link.button.is-info(:to="{ name: 'search' }", class="margin-right") Buscar
                router-link.button.is-info(to="about", class="margin-right") Nosotros

    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Canciones que estan Vue-nisimas!
        pm-player
</template>

<script>
import PmPlayer from '@/components/Player.vue'

export default {
  components: { PmPlayer }
}
</script>

<style lang="scss" scoped>
  .margin-left{
    margin-left: 2em;
  }
  .margin-top{
    margin-top: 1em;
  }
  .margin-right{
    margin-right: 2em;
  }
</style>