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
            .navbar-item
              a(@click="selectLang('en')") En
            .navbar-item
              a(@click="selectLang('es')") Es
            .navbar-item
              .buttons
                router-link.button.is-info(:to="{ name: 'search' }", class="margin-right") {{ $t('search') }}
                router-link.button.is-info(to="about", class="margin-right") {{ $t('about') }}

    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Canciones que estan Vue-nisimas!
        pm-player
</template>

<script>
import PmPlayer from '@/components/Player.vue'

export default {
  components: { PmPlayer },
  methods: {
    selectLang (lang) {
      this.$i18n.locale = lang
    }
  }
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